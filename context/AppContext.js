import { createContext, useState } from 'react';
import { getUser } from '../utils/session';

export const AppStateContext = createContext();

export function AppContext({ children }) {
	const [user, setUser] = useState();
	const [searchQuery, setSearchQuery] = useState();

	const userFromSession = getUser();

	if (userFromSession && userFromSession.token != user.token) setUser(userFromSession);

	const globalValues = {
		user, setUser,
		searchQuery, setSearchQuery
	}

	return (
		<AppStateContext.Provider value={globalValues}>
			{children}
		</AppStateContext.Provider>
	);

}