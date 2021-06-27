import useAppContext from '../hooks/useAppContext';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function AuthProtected({ children }) {
	const { user, showToast } = useAppContext();
	const router = useRouter();

	useEffect(() => {
		if (!user) {
			showToast({ title: 'Permission denied', description: 'Please login to continue' });
			router.push('/login');
		}
	}, [children, user, router, showToast])

	return (
		<div>
			{children}
		</div>
	)
}
