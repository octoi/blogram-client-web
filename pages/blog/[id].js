import React, { useEffect, useState } from 'react';
import useAppContext from '../../hooks/useAppContext';
import AuthProtected from '../../utils/AuthProtected';
import moment from 'moment';
import { useRouter } from 'next/router';
import { getUserData } from '../../api/user'
import { fetchOneBlog } from '../../api/blog';
import { Flex, Heading, Text, Link, Button } from '@chakra-ui/react';

export default function Blog() {
	const [blog, setBlog] = useState();
	const [author, setAuthor] = useState()
	const router = useRouter();

	const { id } = router.query;
	const { user, showToast } = useAppContext();

	useEffect(() => {
		fetchOneBlog(id).then(blog => {
			setBlog(blog);
			getUserData(blog?.user).then((userData) => setAuthor(userData));
		}).catch(err => showToast({ title: err }))
	}, [id, showToast]);

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
								>Delete Blog</Button>}
							</Flex>
						)}
					</Flex>
				)}
			</Flex>
		</AuthProtected>
	)
}
