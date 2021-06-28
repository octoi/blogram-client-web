import React from 'react';
import Blog from './Blog';

export default function Blogs({ blogs }) {
	return (
		<div>
			{blogs && blogs.map(blog => <Blog key={blog?.id} blog={blog} />)}
		</div>
	)
}
