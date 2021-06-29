import React from 'react';
import useAppContext from "../hooks/useAppContext"
import { useRouter } from 'next/router';

export default function Profile() {
	const router = useRouter();
	const { user } = useAppContext();

	React.useEffect(() => {
		if (!user) router.push('/')
		router.push(`/user/${user?.id}`);
	}, [user, router]);

	return <div></div>
}
