import { useContext } from 'react';
import { AppStateContext } from '../context/AppContext';

export default function useAppContext() {
	return useContext(AppStateContext);
}