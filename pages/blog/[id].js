import React, { useEffect, useState } from 'react';
import useAppContext from '../../hooks/useAppContext';
import moment from 'moment';
import AuthProtected from '../../utils/AuthProtected';
import PasswordPrompt from '../../utils/PasswordPrompt';
import { useRouter } from 'next/router';
import { getUserData } from '../../api/user'
import { fetchOneBlog, deleteBlog } from '../../api/blog';
import { Flex, Heading, Text, Link, Button, useDisclosure, Spinner } from '@chakra-ui/react';

export default function Blog() {
	const [blog, setBlog] = useState();
	const [author, setAuthor] = useState();
	const [loading, setLoading] = useState(false);
	const router = useRouter();

	const { id } = router.query;
	const { user, showToast } = useAppContext();
	const { isOpen, onOpen, onClose } = useDisclosure();

	useEffect(() => {
		fetchOneBlog(id).then(blog => {
			setBlog(blog);
			getUserData(blog?.user).then((userData) => setAuthor(userData));
		}).catch(err => showToast({ title: err }))
	}, [id, showToast]);

	const deleteCurrentBlog = (password) => {
		const userData = { username: user?.username, password }
		setLoading(true);

		deleteBlog(userData, id).then(() => {
			showToast({ title: 'Blog deleted successfully :)', isSuccess: true });
			router.push('/')
		}).catch(err => {
			setLoading(false);
			showToast({ title: err?.message })
		})
	}

	return (
		<AuthProtected>
			<Flex direction="column" mb={5}>
				{blog && (
					<Flex direction="column">
						<Heading>{blog?.title}</Heading>
						<Text mt={5} opacity="0.8" fontSize="xl">{moment(parseInt(blog?.createdAt)).fromNow()}</Text>
						<Text fontSize="xl" opacity="0.5" mt={5}>{`${blog?.blog} ...`}</Text>
						{author && (
							<Flex mt={5} direction="column">
								<Link href={`/user/${author?.id}`}>
									<Text opacity="0.8" fontSize="xl">Written by {author?.name}</Text>
								</Link>
								{user?.username === author?.username && <Button
									mt={5}
									width="100%"
									variant="outline"
									onClick={onOpen}
									disabled={loading}
								>{loading ? <Spinner /> : "Delete Blog"}</Button>}
							</Flex>
						)}
					</Flex>
				)}
			</Flex>
			<PasswordPrompt isOpen={isOpen} onClose={onClose} onConfirm={deleteCurrentBlog} />
		</AuthProtected>
	)
}
