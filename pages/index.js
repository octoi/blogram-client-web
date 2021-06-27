import React, { useState, useEffect } from 'react';
import useAppContext from '../hooks/useAppContext';
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
		</div>
	)
}
