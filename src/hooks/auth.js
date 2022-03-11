import React, {
	createContext,
	useContext,
	useState,
	useEffect,
} from "react";

import * as AuthSession from "expo-auth-session";

import AsyncStorage from "@react-native-async-storage/async-storage";

const { REDIRECT_URI } = process.env;
const { SCOPE } = process.env;
const { RESPONSE_TYPE } = process.env;
const { CLIENT_ID } = process.env;
const { CDN_IMAGE } = process.env;

import { api } from "../services/api";
import {
	COLLECTION_USERS,
	COLLECTION_APPOINTMENTS,
} from "../configs/database";

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

			if (type === "success" && !params.error) {
				api.defaults.headers.authorization =
					"Bearer " + params.access_token;

				const userInfo = await api.get("/users/@me");

				console.log(userInfo);

				const firstName =
					userInfo.data.username.split(" ")[0];

				userInfo.data.avatar = `${CDN_IMAGE}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`;

				const userData = {
					...userInfo.data,
					firstName,
					tokens: params.access_token,
				};

				await AsyncStorage.setItem(
					COLLECTION_USERS,
					JSON.stringify(userData)
				);

				setUser(userData);
			}
		} catch {
			console.log("Não foi possivel autenticar");
		} finally {
			setLoading(false);
		}
	}

	async function loadUserStorageData() {
		const storage = await AsyncStorage.getItem(
			COLLECTION_USERS
		);

		if (storage) {
			const userLogged = JSON.parse(storage);
			api.defaults.headers.authorization = `Bearer ${userLogged.token}`;

			setUser(userLogged);
		}
	}

	useEffect(() => {
		loadUserStorageData();
	}, []);

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
