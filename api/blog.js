import axios from 'axios';
import { serverUrl } from '../utils/constants';

const blogRoute = `${serverUrl}/blog`;

export function fetchAllBlogs() {
	return new Promise((resolve, reject) => {
		axios.get(blogRoute).then(res => {

			const data = res.data;

			if (data?.status === 200) { resolve(data?.message); }
			else { reject(data?.message); }

		}).catch(() => reject("Failed to fetch data"))
	});
}

export function createBlog(blogData) {
	return new Promise((resolve, reject) => {
		const route = `${blogRoute}/new`;

		axios.post(route, blogData).then(res => {

			const data = res.data;

			if (data?.status === 200) { resolve(data?.message); }
			else { reject(data?.message); }

		}).catch(() => reject('Failed to create blog :('));
	});
}

export function fetchOneBlog(id) {
	return new Promise((resolve, reject) => {
		const route = `${blogRoute}/${id}`;

		axios.get(route).then(res => {

			const data = res.data;

			if (data?.status === 200) { resolve(data?.message) }
			else { reject(data?.message); }

		}).catch(() => reject("Failed to fetch data"))
	});
}

export function deleteBlog(userData, id) {
	return new Promise((resolve, reject) => {
		const route = `${blogRoute}/${id}`;

		axios.delete(route, { data: userData }).then(res => {

			const data = res.data;

			if (data?.status === 200) { resolve(data?.message) }
			else { reject(data?.message); }

		}).catch(() => reject("Failed to delete blog"))
	});
}