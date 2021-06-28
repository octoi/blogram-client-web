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
	const [value, setValue] = useState('');
	const cancelRef = useRef();

	const handleBtnPress = () => {
		setValue('')
		onConfirm(value);
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
							value={value}
							onChange={(e) => setValue(e.target.value)}
						/>
					</AlertDialogBody>
					<AlertDialogFooter>
						<Button ref={cancelRef} onClick={onClose}>Cancel</Button>
						<Button colorScheme="teal" disabled={value.length === 0} onClick={handleBtnPress} ml={3}>Confirm</Button>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialogOverlay>
		</AlertDialog>
	)
}
