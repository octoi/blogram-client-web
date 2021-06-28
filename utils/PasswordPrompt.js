import React, { useRef, useState } from 'react';
import {
	AlertDialog,
	AlertDialogBody,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogContent,
	AlertDialogOverlay,
	Button,
	Input
} from "@chakra-ui/react"

export default function PasswordPrompt({ isOpen, onClose, onConfirm }) {
	const [password, setPassword] = useState('');
	const cancelRef = useRef();

	const handleBtnPress = () => {
		setPassword('')
		onConfirm(password);
		onClose();
	}

	return (
		<AlertDialog
			isOpen={isOpen}
			leastDestructiveRef={cancelRef}
			onClose={onClose}
			isCentered
		>
			<AlertDialogOverlay>
				<AlertDialogContent>
					<AlertDialogHeader fontSize="lg" fontWeight="bold">Enter Password</AlertDialogHeader>
					<AlertDialogBody>
						<Input
							placeholder="••••••••"
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</AlertDialogBody>
					<AlertDialogFooter>
						<Button ref={cancelRef} onClick={onClose}>Cancel</Button>
						<Button colorScheme="teal" disabled={password.length === 0} onClick={handleBtnPress} ml={3}>Confirm</Button>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialogOverlay>
		</AlertDialog>
	)
}
