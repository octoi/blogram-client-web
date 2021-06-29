import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { useRouter } from 'next/router';
import { Text, Link } from '@chakra-ui/react';
import { HomeBlogContainer } from '../../styles/styledComponents';
import { getUserData } from '../../api/user';

export default function Blog({ blog }) {
	const [blogUser, setBlogUser] = useState();
	const router = useRouter();

	useEffect(() => {
		getUserData(blog?.user).then(user => {
			setBlogUser(user);
		}).catch(err => {
			console.log(err);
		})
	}, [blog]);


	return (
		<HomeBlogContainer mt={4} onClick={() => router.push(`/blog/${blog?._id}`)} borderRadius="12" p={7}>
			<Text fontSize="3xl" fontWeight="medium">{blog?.title}</Text>
			<Text mt={2} opacity="0.8" fontSize="xl">{moment(parseInt(blog?.createdAt)).fromNow()}</Text>
			<Text fontSize="xl" opacity="0.5" mt={3}>{`${blog?.blog.substr(0, 200)} ...`}</Text>
			{blogUser && (
				<Link href={`/user/${blogUser?.id}`}>
					<Text mt={3} opacity="0.8" fontSize="xl">{`written by ${blogUser?.name}`}</Text>
				</Link>
			)}
		</HomeBlogContainer>
	)
}
