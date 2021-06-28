import { createContext, useState, useEffect } from 'react';
import { getUser, saveToken, removeToken } from '../utils/session';
import { useToast } from '@chakra-ui/react';

export const AppStateContext = createContext();

export function AppContext({ children }) {
	const [user, setUser] = useState();
	const [searchQuery, setSearchQuery] = useState('');

	const userFromSession = getUser();
	const toast = useToast();


	useEffect(() => {
		if (!user?.token) {
			if (userFromSession && userFromSession.token != user?.token) setUser(userFromSession);
			return 0;
		}

		saveToken(user?.token);
	}, [user, userFromSession])

	const showToast = ({ title, description, isSuccess }) => {
		toast({
			title: title,
			description: description ? description : '',
			status: isSuccess ? 'success' : 'error',
			duration: 5000,
			isClosable: true,
			position: 'top-right',
		});
	}

	const logout = () => {
		removeToken();
		setUser();
	}

	const globalValues = {
		user, setUser,
		searchQuery, setSearchQuery,
		showToast, logout
	}

	return (
		<AppStateContext.Provider value={globalValues}>
			{children}
		</AppStateContext.Provider>
	);

}