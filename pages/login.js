import { Flex, Button, Heading, Input, Link } from '@chakra-ui/react';

export default function login() {
	return (
		<Flex height="80vh" justifyContent="center" alignItems="center">
			<Flex background="gray.700" p={12} direction="column">
				<Heading>Log In</Heading>
				<Input mt={5} placeholder="username" variant="filled" />
				<Input mt={5} placeholder="••••••••" variant="filled" />
				<Button mt={5} colorScheme="teal" width="100%">Log In</Button>
				<Link mt={2}>Don't have an account ?? Register</Link>
			</Flex>
		</Flex>
	)
}