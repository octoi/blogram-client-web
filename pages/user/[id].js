import React, { useEffect, useState } from 'react';
import useAppContext from '../../hooks/useAppContext';
import AuthProtected from "../../utils/AuthProtected"
import Blog from '../../components/home/Blog';
import { useRouter } from 'next/router';
import { getUserData, getUserBlogs } from '../../api/user';
import { Text, Flex, Button } from '@chakra-ui/react';

export default function User() {
	const [targetUser, setTargetUser] = useState();
	const [blogs, setBlogs] = useState([]);

	const router = useRouter();
	const { id } = router.query;
	const { showToast, user } = useAppContext();

	useEffect(() => {
		if (!id) return;
		getUserData(id).then(userData => setTargetUser(userData)).catch(err => showToast({ title: err }));
		getUserBlogs(id).then(blogs => setBlogs(blogs)).catch(err => showToast({ title: err }));
	}, [id, showToast])

	return (
		<AuthProtected>
			{targetUser && (
				<Flex mt={5} direction="column" width="100%" justifyContent="center" alignItems="center">
					<Text fontSize="5xl">{targetUser.name}</Text>
					<Text fontSize="xl" opacity="0.8">@{targetUser.username}</Text>
					{user?.username === targetUser?.username && (
						<Button onClick={() => router.push('/settings')} mt={4} colorScheme="teal">Edit Profile</Button>
					)}
				</Flex>
			)}
			{blogs.length !== 0 && <Text mt={10} fontSize="xl">All Blogs</Text>}
			{blogs.map(blog => <Blog key={blog?._id} blog={blog} />)}
		</AuthProtected>
	)
}
