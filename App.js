import React from "react";
import {
	Rajdhani_500Medium,
	Rajdhani_700Bold,
} from "@expo-google-fonts/rajdhani";
import {
	Inter_400Regular,
	Inter_500Medium,
} from "@expo-google-fonts/inter";
import AppLoading from "expo-app-loading";
import { StatusBar } from "react-native";
import { useFonts } from "expo-font";

import { AuthContext } from "./src/hooks/auth";

import { Routes } from "./src/routes/index";
import { Background } from "./src/components/Background";

export default function App() {
	const [fontsLoaded] = useFonts({
		Inter_400Regular,
		Inter_500Medium,
		Rajdhani_500Medium,
		Rajdhani_700Bold,
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	}

	return (
		<Background>
			<StatusBar
				barStyle='light-content'
				backgroundColor='transparent'
				translucent
			/>
			<AuthContext.Provider
				value={{
					name: "Matheus",
					email: "matheuseugenio212@gmail.com",
					avatar: "matheus.png",
				}}
			>
				<Routes />
			</AuthContext.Provider>
		</Background>
	);
}
