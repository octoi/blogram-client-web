import axios from 'axios';
import { serverUrl } from '../utils/constants';

const blogRoute = `${serverUrl}/blog`;

export function fetchAllBlogs() {
	return new Promise((resolve, reject) => {
		axios.get(blogRoute).then(res => {
			const data = res.data;
			if (data?.status === 200) {
				resolve(data?.message);
			} else {
				reject(data?.message);
			}
		}).catch(() => reject("Failed to fetch data"))
	});
}