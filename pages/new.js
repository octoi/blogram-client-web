import AuthProtected from '../utils/AuthProtected';
import { Flex, Input, Textarea, Heading, Button } from '@chakra-ui/react';

export default function New() {
	return (
		<AuthProtected>
			<Flex direction="column" p={12} background="gray.700">
				<Heading>New Blog</Heading>
				<Input mt={10} placeholder="Title.." variant="filled" />
				<Textarea mt={5} placeholder="What do you wanna write ??" height={200} variant="filled" />
				<Button mt={5} colorScheme="teal">Publish</Button>
			</Flex>
		</AuthProtected>
	)
}
