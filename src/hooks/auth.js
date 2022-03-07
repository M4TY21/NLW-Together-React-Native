import React, {
	createContext,
	useContext,
	useState,
} from "react";

import * as AuthSession from "expo-auth-session";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
	const [user, setUser] = useState({});
	const [loading, setLoading] = useState(false);

	function SignIn() {
		try {
			setLoading(true);

			AuthSession.startAsync({ authUrl });
		} catch (error) {}
	}

	return (
		<AuthContext.Provider value={{ user }}>
			{children}
		</AuthContext.Provider>
	);
}

function useAuth() {
	const context = useContext(AuthContext);
	return context;
}

export { AuthProvider, useAuth };
