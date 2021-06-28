import useAppContext from '../hooks/useAppContext';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function AuthProtected({ children }) {
	const { user } = useAppContext();
	const router = useRouter();

	useEffect(() => {
		if (user) {
			router.push('/')
		}
	}, [children, user, router])

	return (
		<div>
			{children}
		</div>
	)
}
