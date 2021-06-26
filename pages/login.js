import { Flex, Button, Heading, Input, Link } from '@chakra-ui/react';
import { LoginStyledFlex } from '../styles/styledComponents';

export default function login() {
	return (
		<Flex height="80vh" justifyContent="center" alignItems="center">
			<LoginStyledFlex background="gray.700" p={12} direction="column">
				<Heading>Log In</Heading>
				<Input mt={5} placeholder="username" variant="filled" />
				<Input mt={5} placeholder="••••••••" variant="filled" />
				<Button mt={5} colorScheme="teal" width="100%">Log In</Button>
				<Link mt={2}>New to blogram ?? Register</Link>
			</LoginStyledFlex>
		</Flex>
	)
}