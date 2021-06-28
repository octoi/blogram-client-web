import React, { useState } from 'react';
import AuthProtected from '../utils/AuthProtected';
import { Flex, Heading, Input, Textarea, Button, Spinner } from '@chakra-ui/react';

export default function New() {
	const [title, setTitle] = useState('');
	const [blog, setBlog] = useState('');
	const [loading, setLoading] = useState(false);

	const createNewBlog = () => {
		setLoading(true);
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
					onClick={createNewBlog}
					mt={5}
					colorScheme="teal"
					disabled={title.trim().length === 0 || blog.trim().length === 0 || loading}
				>{loading ? <Spinner /> : 'Publish'}</Button>
			</Flex>
		</AuthProtected>
	)
}
