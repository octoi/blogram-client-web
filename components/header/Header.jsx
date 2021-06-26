import { Flex, Text, Input } from '@chakra-ui/react';
import { InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

export default function Header() {
	return (
		<Flex mt={5} justifyContent="space-evenly" width="100%">
			<Text fontSize="2xl">Blogram</Text>
			<InputGroup ml={2}>
				<InputLeftElement pointerEvents="none">
					<SearchIcon color="gray.300" />
				</InputLeftElement>
				<Input
					placeholder="Search for blogs ..."
					variant="filled"
				/>
			</InputGroup>
		</Flex>
	)
}
