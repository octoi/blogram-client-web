import Link from 'next/link';
import useAppContext from '../../hooks/useAppContext';
import { useRouter } from 'next/router';
import { Flex, Text, Input, Button } from '@chakra-ui/react';
import { InputGroup, InputLeftElement } from '@chakra-ui/react';
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

export default function Header() {
	const { user, logout, searchQuery, setSearchQuery } = useAppContext();
	const router = useRouter();

	const isInputDisabled = router.pathname !== '/';

	return (
		<Flex mt={5} mb={10} justifyContent="space-between" alignItems="center" width="100%">
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
					disabled={isInputDisabled}
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
				/>
			</InputGroup>
			<div>
				{user ? (
					<Menu>
						<MenuButton as={Button}>
							{user?.name}
						</MenuButton>
						<MenuList>
							<Link href="/profile" passHref><MenuItem>Profile</MenuItem></Link>
							<Link href="/new" passHref><MenuItem>Create</MenuItem></Link>
							<Link href="/settings" passHref><MenuItem>Settings</MenuItem></Link>
							<MenuItem onClick={logout} color="red.300">Logout</MenuItem>
						</MenuList>
					</Menu>
				) : (
					<Link href='/login' passHref>
						<Button>Login</Button>
					</Link>
				)}
			</div>
		</Flex>
	)
}
