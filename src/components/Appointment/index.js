import React from "react";
import {
    View,
    Text
} from "react-native";

import { styles } from "./styles";

export function Appointment({ data, ...rest }){
  return (
    <TouchableOpacity {...rest}>
      <View style={styles.container}>
        <GuildIcon />
      </View>
    </TouchableOpacity>
  )
}