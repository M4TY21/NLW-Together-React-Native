import React from "react";

import { TextInput } from "react-native";

import { styles } from "./styles";

export function TextArea({ ...rest }) {
	return <TextInput style={styles.container} {...rest} />;
}
