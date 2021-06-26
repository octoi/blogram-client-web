import React, { useState } from 'react';
import { Flex, Button, Heading, Input, Link } from '@chakra-ui/react';
import { LoginStyledFlex } from '../styles/styledComponents';

export default function Login() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	return (
		<Flex height="80vh" justifyContent="center" alignItems="center">
			<LoginStyledFlex background="gray.700" p={12} direction="column">
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
				<Button mt={5} colorScheme="teal" width="100%">Log In</Button>
				<Link mt={2}>New to blogram ?? Register</Link>
			</LoginStyledFlex>
		</Flex>
	)
}