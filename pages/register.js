import React, { useState } from 'react';
import useAppContext from '../hooks/useAppContext';
import AuthDenied from '../utils/AuthDenied';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Flex, Button, Heading, Input, Link } from '@chakra-ui/react';
import { registerUser } from '../api/authentication';

export default function Register() {
	const [username, setUsername] = useState('');
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');
	const { showToast, setUser } = useAppContext();

	const router = useRouter();

	const register = () => {
		const userData = { name, username, password }

		registerUser(userData).then(data => {
			setUser(data);
			showToast({ title: 'Registered successfully', description: `You are now ${data.name}`, isSuccess: true, })
			router.push('/')
		}).catch(err => showToast({ title: err }))
	}

	return (
		<AuthDenied>
			<Head>
				<title>Register</title>
				<meta name="description" content="signup to blogram" />
			</Head>
			<Flex height="80vh" justifyContent="center" alignItems="center">
				<Flex maxW="80%" minW="30%" background="gray.700" p={12} direction="column">
					<Heading>Register</Heading>
					<Input
						mt={5}
						placeholder="name"
						variant="filled"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<Input
						mt={5}
						placeholder="username"
						variant="filled"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
					<Input
						mt={5}
						placeholder="••••••••"
						variant="filled"
						value={password}
						type="password"
						onChange={(e) => setPassword(e.target.value)}
					/>
					<Button
						mt={5}
						colorScheme="teal"
						width="100%"
						onClick={register}
						disabled={username.trim().length === 0 || name.trim().length === 0 || password.trim().length === 0}
					>Register</Button>
					<Link mt={2} href='/login'>Already in blogram ?? Login</Link>
				</Flex>
			</Flex>
		</AuthDenied>
	)
}