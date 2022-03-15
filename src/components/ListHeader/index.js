import React from "react";
import { View, Text } from "react-native";

import { styles } from "./styles";

export function ListHeader({ title, subtitle, marginTop }) {
	return (
		<View
			style={[styles.container, { marginTop: marginTop }]}
		>
			<Text style={styles.title}>{title}</Text>

			<Text style={styles.subtitle}>{subtitle}</Text>
		</View>
	);
}
