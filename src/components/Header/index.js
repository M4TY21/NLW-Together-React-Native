import React from "react";

import { View, Text, TouchableOpacity } from "react-native";

import { BorderlessButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";

import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

export function Header({ title, action, ...rest }) {
	const navigation = useNavigation();

	const { secondary100, secondary40, heading } =
		theme.colors;

	function handleGoBack() {
		navigation.goBack();
	}

	return (
		<LinearGradient
			style={styles.container}
			colors={[secondary100, secondary40]}
		>
			<TouchableOpacity
				onPress={handleGoBack}
				activeOpacity={0.8}
			>
				<Feather
					name='arrow-left'
					size={24}
					color={heading}
				/>
			</TouchableOpacity>

			<Text style={styles.title}>{title}</Text>

			{action ? (
				<TouchableOpacity activeOpacity={0.8} {...rest}>
					{action}
				</TouchableOpacity>
			) : (
				<View style={{ width: 24 }} />
			)}
		</LinearGradient>
	);
}
