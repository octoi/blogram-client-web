import React, { useState, useEffect } from 'react';
import * as JsSearch from 'js-search';
import useAppContext from '../../hooks/useAppContext';
import Blog from './Blog';

export default function Blogs({ blogs }) {
	const [displayBlogs, setDisplayBlogs] = useState(blogs);
	const { searchQuery } = useAppContext();

	useEffect(() => {
		const search = new JsSearch.Search('_id');

		search.addIndex('title');
		search.addIndex('blog');
		search.addDocuments(blogs ? blogs : []);

		if (searchQuery.trim().length === 0) setDisplayBlogs(blogs);
		else {
			const searchResult = search.search(searchQuery);
			setDisplayBlogs(searchResult);
		}
	}, [searchQuery, blogs]);

	return (
		<div>
			{displayBlogs && displayBlogs.map(blog => <Blog key={blog?._id} blog={blog} />)}
		</div>
	)
}
