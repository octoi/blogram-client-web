import React, { useState } from 'react';
import useAppContext from '../hooks/useAppContext';
import AuthProtected from '../utils/AuthProtected';
import PasswordPrompt from '../utils/PasswordPrompt';
import { useRouter } from 'next/router';
import { createBlog } from '../api/blog';
import { Flex, Heading, Input, Textarea, Button, Spinner, useDisclosure } from '@chakra-ui/react';

export default function New() {
	const [title, setTitle] = useState('');
	const [blog, setBlog] = useState('');
	const [loading, setLoading] = useState(false);

	const router = useRouter();

	const { isOpen, onOpen, onClose } = useDisclosure()
	const { user, showToast } = useAppContext();

	const createNewBlog = (password) => {
		if (password.length === 0) return;
		setLoading(true);

		const blogData = { username: user.username, password, title, blog }
		createBlog(blogData).then(() => {
			setLoading(false)
			showToast({ title: 'Blog created successfully :)', isSuccess: true });
			router.push('/');
		}).catch(err => {
			setLoading(false)
			showToast({ title: err });
		})
	}

	return (
		<AuthProtected>
			<Flex direction="column" p={12} background="gray.700">
				<Heading>New Blog</Heading>
				<Input
					mt={10}
					placeholder="Title.."
					variant="filled"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<Textarea
					mt={5}
					placeholder="What do you wanna write ??"
					height={200}
					variant="filled"
					value={blog}
					onChange={(e) => setBlog(e.target.value)}
				/>
				<Button
					onClick={onOpen}
					mt={5}
					colorScheme="teal"
					disabled={title.trim().length === 0 || blog.trim().length === 0 || loading}
				>{loading ? <Spinner /> : 'Publish'}</Button>
			</Flex>

			<PasswordPrompt isOpen={isOpen} onClose={onClose} onConfirm={createNewBlog} />
		</AuthProtected>
	)
}
