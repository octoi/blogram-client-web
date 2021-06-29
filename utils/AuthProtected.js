import useAppContext from '../hooks/useAppContext';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Flex, Spinner } from '@chakra-ui/react';

export default function AuthProtected({ children }) {
	const { user, showToast } = useAppContext();
	const [loading, setLoading] = useState(false);
	const router = useRouter();



	useEffect(() => {
		setLoading(true);
		if (!user) {
			setTimeout(() => {
				if (!user) {
					showToast({ title: 'Permission denied', description: 'Please login to continue' });
					router.push('/login');
				} else {
					setLoading(false);
				}
			}, 2000)
		} else {
			setLoading(false);
		}
	}, [children, user, router, showToast])

	return (
		<div>
			{!loading ? (
				<div>
					{children}
				</div>
			) : (
				<Flex height="90vh" justifyContent="center" alignItems="center">
					<Spinner />
				</Flex>
			)}
		</div>
	)
}
