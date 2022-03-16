import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 635 + getStatusBarHeight(),
	},
	overlay: {
		flex: 1,
		backgroundColor: theme.colors.overlay,
	},
	content: {
		alignItems: "center",
		justifyContent: "center",
	},
	text: {
		flexDirection: "row",
		alignSelf: "center",
		justifyContent: "center",
		marginTop: 20,
		marginBottom: 31,
	},
	title: {
		fontFamily: theme.fonts.title700,
		fontSize: 24,
		color: theme.colors.heading,
		marginRight: 0,
	},
	subtitle: {
		fontFamily: theme.fonts.title700,
		fontSize: 24,
		color: theme.colors.primary,
	},
	buttons: {
		flexDirection: "row",
	},
	closeButton: {
		width: 160,
		height: 56,
		borderRadius: 8,
		borderWidth: 1,
		borderColor: theme.colors.secondary30,
		alignItems: "center",
		justifyContent: "center",
		marginRight: 20,
	},
	confirmButton: {
		width: 160,
		height: 56,
		backgroundColor: theme.colors.primary,
		borderRadius: 8,
		alignItems: "center",
		justifyContent: "center",
	},
	textButton: {
		fontSize: 15,
		fontFamily: theme.fonts.text500,
		color: theme.colors.heading,
	},
});
