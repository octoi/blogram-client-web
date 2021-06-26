import { Flex, Text, Input, Button } from '@chakra-ui/react';
import { InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';

export default function Header() {
	return (
		<Flex mt={5} justifyContent="space-evenly" width="100%">
			<Text fontSize="2xl">Blogram</Text>
			<InputGroup ml={2} mr={2}>
				<InputLeftElement pointerEvents="none">
					<SearchIcon color="gray.300" />
				</InputLeftElement>
				<Input
					placeholder="Search for blogs ..."
					variant="filled"
				/>
			</InputGroup>
			<div>
				<Menu>
					<MenuButton as={Button}>
						username
					</MenuButton>
					<MenuList>
						<MenuItem>Profile</MenuItem>
						<MenuItem>New Blog</MenuItem>
						<MenuItem>Settings</MenuItem>
					</MenuList>
				</Menu>
			</div>
		</Flex>
	)
}
