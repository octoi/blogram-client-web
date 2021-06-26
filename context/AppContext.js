import { createContext, useState } from 'react';
import { getUser } from '../utils/session';

export const AppStateContext = createContext();

export function AppContext({ children }) {
	const [user, setUser] = useState();

	const userFromSession = getUser();

	if (userFromSession && userFromSession.token != user.token) setUser(userFromSession);

	return (
		<AppStateContext.Provider>
			{children}
		</AppStateContext.Provider>
	);

}