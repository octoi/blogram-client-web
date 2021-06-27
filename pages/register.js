import React, { useState } from 'react';
import { Flex, Button, Heading, Input, Link } from '@chakra-ui/react';

export default function Register() {
	const [username, setUsername] = useState('');
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');

	const register = () => {

	}

	return (
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
				<Button mt={5} colorScheme="teal" width="100%" onClick={register}>Register</Button>
				<Link mt={2} href='/login'>Already in blogram ?? Login</Link>
			</Flex>
		</Flex>
	)
}