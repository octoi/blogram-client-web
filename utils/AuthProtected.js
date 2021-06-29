import useAppContext from '../hooks/useAppContext';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Flex, Spinner } from '@chakra-ui/react';

export default function AuthProtected({ children }) {
	const { user, showToast } = useAppContext();
	const [loading, setLoading] = useState(false);
	const [count, setCount] = useState(0);
	const router = useRouter();



	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			const checkForUser = () => {
				if (!user) {
					if (count !== 1) {
						checkForUser();
						setCount(1);
						return;
					}
					showToast({ title: 'Permission denied', description: 'Please login to continue' });
					router.push('/login');
				}
				setLoading(false);
			}
			checkForUser();
		}, 1000)
	}, [children, user, router, showToast, count])

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
