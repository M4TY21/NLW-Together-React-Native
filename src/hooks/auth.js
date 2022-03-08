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

			const { type, params } = await AuthSession.startAsync(
				{
					authUrl,
				}
			);

			if (type === "success") {
				api.defaults.headers.authorization =
					"Bearer " + params.access_token;

				const userInfo = await api.get("/users/@me");

				const firstName =
					userInfo.data.username.split(" ")[0];

				userInfo.data.avatar = `${CDN_IMAGE}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`;

				setUser({
					...userInfo.data,
					firstName,
					tokens: params.access_token,
				});

				setLoading(false);
			} else {
				setLoading(false);
			}
		} catch {
			throw new Error("Não foi possivel autenticar");
		}
	}

	return (
		<AuthContext.Provider value={{ user, loading, signIn }}>
			{children}
		</AuthContext.Provider>
	);
}

function useAuth() {
	const context = useContext(AuthContext);
	return context;
}

export { AuthProvider, useAuth };
