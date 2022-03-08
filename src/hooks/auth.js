import React, {
	createContext,
	useContext,
	useState,
} from "react";

import * as AuthSession from "expo-auth-session";

import {
	REDIRECT_URI,
	SCOPE,
	RESPONSE_TYPE,
	CLIENT_ID,
	CDN_IMAGE,
} from "../configs";

import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
	const [user, setUser] = useState({});
	const [loading, setLoading] = useState(false);

	async function signIn() {
		try {
			setLoading(true);

			const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

			const response = await AuthSession.startAsync({
				authUrl,
			});
			console.log(response);
		} catch {
			throw new Error("Não foi possivel autenticar");
		}
	}

	return (
		<AuthContext.Provider value={{ user, signIn }}>
			{children}
		</AuthContext.Provider>
	);
}

function useAuth() {
	const context = useContext(AuthContext);
	return context;
}

export { AuthProvider, useAuth };
