import React from "react";

import { View, TextInput } from "react-native";

import { styles } from "./styles";

export function SmallInput({ ...rest }) {
	return <TextInput style={styles.container} {...rest} />;
}
