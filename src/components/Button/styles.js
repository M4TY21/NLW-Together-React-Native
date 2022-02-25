import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
	container: {
		width: "93%",
		height: 56,
		backgroundColor: theme.colors.primary,
		borderRadius: 8,
		flexDirection: "row",
		alignItems: "center",
		marginHorizontal: 14,
	},
	title: {
		flex: 1,
		color: theme.colors.heading,
		fontSize: 15,
		textAlign: "center",
		fontFamily: theme.fonts.text500,
	},
});
