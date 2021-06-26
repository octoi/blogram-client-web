import { Flex, Text, Input, Button } from '@chakra-ui/react';
import { InputGroup, InputLeftElement } from '@chakra-ui/react';
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import Link from 'next/link';
import { SearchIcon } from '@chakra-ui/icons';

export default function Header() {
	return (
		<Flex mt={5} justifyContent="space-between" alignItems="center" width="100%">
			<Link href="/" passHref>
				<Text cursor="pointer" fontSize="2xl" fontWeight="normal">Blogram</Text>
			</Link>
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
						<Link href="/profile" passHref><MenuItem>Profile</MenuItem></Link>
						<Link href="/new" passHref><MenuItem>Create</MenuItem></Link>
						<Link href="/settings" passHref><MenuItem>Settings</MenuItem></Link>
					</MenuList>
				</Menu>
			</div>
		</Flex>
	)
}
