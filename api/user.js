import axios from 'axios';
import { serverUrl } from '../utils/constants';

const userRoute = `${serverUrl}/user`;

export function getUserData(userId) {
	return new Promise((resolve, reject) => {
		axios.get(`${userRoute}/${userId}`).then(res => {
			const data = res?.data;
			if (data?.status === 200) {
				resolve(data?.message);
			} else {
				reject(data?.message);
			}
		});
	});
}

export function getUserBlogs(userId) {
	return new Promise((resolve, reject) => {
		axios.get(`${serverUrl}/blog/user/${userId}`).then(res => {
			const data = res?.data;
			if (data?.status === 200) {
				resolve(data?.message);
			} else {
				reject(data?.message);
			}
		}).catch(err => reject("Failed to get blogs"));
	});
}

export function updateUser(userData) {
	return new Promise((resolve, reject) => {
		axios.put(`${userRoute}/update`, userData).then(res => {
			const data = res.data;
			if (data?.status === 200) {
				resolve(data?.message)
			} else {
				reject(data?.message);
			}
		}).catch(() => reject("Couldn't request to server !"));
	});
}