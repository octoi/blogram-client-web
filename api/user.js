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