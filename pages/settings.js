import React from 'react';
import useAppContext from '../hooks/useAppContext';
import AuthProtected from '../utils/AuthProtected';
import PasswordPrompt from '../utils/PasswordPrompt';
import { useRouter } from 'next/router';
import { useDisclosure, Flex, Heading, Button, Input } from '@chakra-ui/react';

export default function Settings() {
	const router = useRouter();
	const { onOpen, isOpen, onClose } = useDisclosure();
	const { user, showToast } = useAppContext();


	const checkPassword = (password) => {

	}

	return (
		<AuthProtected>
			<Flex height="80vh" justifyContent="center" alignItems="center">
				<Flex maxW="80%" minW="30%" background="gray.700" p={12} direction="column">
					<Heading>Settings</Heading>
					<Input
						mt={5}
						placeholder="change username"
						value={user?.username}
						variant="filled"
					/>
					<Input
						mt={5}
						placeholder="change username"
						value={user?.name}
						variant="filled"
					/>
					<Input
						mt={5}
						placeholder="new password"
						variant="filled"
						type="password"
					/>
					<Button
						mt={5}
						colorScheme="teal"
						width="100%"
						onClick={onOpen}
					>Update</Button>
				</Flex>
			</Flex>
			<PasswordPrompt isOpen={isOpen} onClose={onClose} onConfirm={checkPassword} />
		</AuthProtected>
	)
}
