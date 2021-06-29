import React, { useState } from 'react';
import useAppContext from '../hooks/useAppContext';
import AuthProtected from '../utils/AuthProtected';
import PasswordPrompt from '../utils/PasswordPrompt';
import { useRouter } from 'next/router';
import { updateUser } from '../api/user';
import { useDisclosure, Flex, Heading, Button, Input } from '@chakra-ui/react';

export default function Settings() {
	const router = useRouter();
	const { onOpen, isOpen, onClose } = useDisclosure();
	const { user, setUser, showToast } = useAppContext();

	const [newUsername, setNewUsername] = useState(user?.username ? user?.username : '');
	const [newName, setNewName] = useState(user?.name ? user?.name : '');
	const [newPassword, setNewPassword] = useState('');

	const update = (userData) => {
		updateUser(userData).then(userData => {
			setUser(userData);
			showToast({ title: "Updated", isSuccess: true });
			router.push('/');
		}).catch(err => {
			showToast({ title: err });
		})
	}

	const checkPassword = (password) => {
		const userData = {
			username: user?.username,
			name: user?.name,
			password,
			newUsername: newUsername,
			newName: newName,
			newPassword: newPassword === '' ? password : newPassword,
		}
		update(userData);
	}

	return (
		<AuthProtected>
			<Flex height="80vh" justifyContent="center" alignItems="center">
				<Flex maxW="80%" minW="30%" background="gray.700" p={12} direction="column">
					<Heading>Settings</Heading>
					<Input
						mt={5}
						placeholder="change username"
						variant="filled"
						value={newUsername}
						onChange={(e) => setNewUsername(e.target.value)}
					/>
					<Input
						mt={5}
						placeholder="change username"
						variant="filled"
						value={newName}
						onChange={(e) => setNewName(e.target.value)}
					/>
					<Input
						mt={5}
						placeholder="new password"
						variant="filled"
						type="password"
						value={newPassword}
						onChange={(e) => setNewPassword(e.target.value)}
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
