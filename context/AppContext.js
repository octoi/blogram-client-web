import { createContext, useState } from 'react';
import { getUser } from '../utils/session';
import { useToast } from '@chakra-ui/react';

export const AppStateContext = createContext();

export function AppContext({ children }) {
	const [user, setUser] = useState();
	const [searchQuery, setSearchQuery] = useState();

	const userFromSession = getUser();
	const toast = useToast();

	if (userFromSession && userFromSession.token != user.token) setUser(userFromSession);

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

	const globalValues = {
		user, setUser,
		searchQuery, setSearchQuery,
		showToast,
	}

	return (
		<AppStateContext.Provider value={globalValues}>
			{children}
		</AppStateContext.Provider>
	);

}