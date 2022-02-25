import React from "react";

import { TextInput } from "react-native";

import { styles } from "./styles";

export function SmallInput({ ...rest }) {
	return (
		<TextInput style={styles.container} keyboardType='number-pad' {...rest} />
	);
}
