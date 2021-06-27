import React, { useState, useEffect } from 'react';
import useAppContext from '../hooks/useAppContext';
import Blog from '../components/home/Blog';
import { fetchAllBlogs } from '../api/blog';

export default function Home() {
	const [blogs, setBlogs] = useState();
	const { showToast } = useAppContext();

	useEffect(() => {
		fetchAllBlogs().then((blogs) => {
			setBlogs(blogs);
		}).catch(err => {
			showToast({ title: err });
		})
	}, [showToast])

	return (
		<div>
			{blogs && blogs.map(blog => <Blog key={blog?.id} blog={blog} />)}
		</div>
	)
}
