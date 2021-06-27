import axios from 'axios';
import { serverUrl } from '../utils/constants';

const registerRoute = `${serverUrl}/user/register`;
const loginRoute = `${serverUrl}/user/login`;

export function registerUser(userData) {
	return new Promise((resolve, reject) => {
		axios.post(registerRoute, userData).then(res => {
			const data = res.data;
			if (data?.status === 200) {
				resolve(data?.message)
			} else {
				reject(data?.message);
			}
		}).catch(() => reject("Couldn't request to server !"));
	});
}

export function loginUser(userData) {
	return new Promise((resolve, reject) => {
		axios.post(loginRoute, userData).then(res => {
			const data = res.data;
			if (data?.status === 200) resolve(data?.message)
			else reject(data?.message);
		}).catch(() => reject("Couldn't request to server !"));
	});
}