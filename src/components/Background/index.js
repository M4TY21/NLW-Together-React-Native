import React from "react";
import { LinearGradient } from "expo-linear-gradient";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

export function Background({ children }) {
	return (
		<LinearGradient
			style={styles.container}
			colors={[
				theme.colors.secondary80,
				theme.colors.secondary100,
			]}
		>
			{children}
		</LinearGradient>
	);
}
