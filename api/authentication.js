import axios from 'axios';
import { serverUrl } from '../utils/constants';

const registerRoute = `${serverUrl}/user/register`;

export function registerUser(userData) {
	return new Promise((resolve, reject) => {
		axios.post(registerRoute, userData)

			.then(res => {

				const data = res.data;
				if (data?.status === 200) resolve(data?.message)
				else reject(data?.message);

			}).catch(() => reject('Could request to server !'));

	});
}