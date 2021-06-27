import React, { useState } from 'react';
import useAppContext from '../hooks/useAppContext';
import AuthDenied from '../utils/AuthDenied';
import { useRouter } from 'next/router';
import { Flex, Button, Heading, Input, Link } from '@chakra-ui/react';
import { loginUser } from '../api/authentication';

export default function Login() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const { showToast, setUser } = useAppContext();

	const router = useRouter();

	const login = () => {
		const userData = { username, password }

		loginUser(userData).then(data => {
			setUser(data);
			showToast({ title: 'Logged in successfully', description: `You are now ${data.name}`, isSuccess: true, })
			router.push('/')
		}).catch(err => showToast({ title: err }))
	}

	return (
		<AuthDenied>
			<Flex height="80vh" justifyContent="center" alignItems="center">
				<Flex maxW="80%" minW="30%" background="gray.700" p={12} direction="column">
					<Heading>Log In</Heading>
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
						onClick={login}
						disabled={username.trim().length === 0 || password.length === 0}
					>Log In</Button>
					<Link mt={2} href='/register'>New to blogram ?? Register</Link>
				</Flex>
			</Flex>
		</AuthDenied>
	)
}