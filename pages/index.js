import React, { useState, useEffect } from 'react';
import { fetchAllBlogs } from '../api/blog';
import useAppContext from '../hooks/useAppContext';
import Blogs from '../components/home/Blogs';

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
			<Blogs blogs={blogs} />
		</div>
	)
}
