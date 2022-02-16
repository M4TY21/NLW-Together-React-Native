import React from 'react';
import { TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons"

import { styles } from "./styles";

export function ButtonAdd({...rest}) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <MaterialCommunityIcons
        style={styles.icon}
        name="plus"
        size={28}
      />
    </TouchableOpacity>
  )
}