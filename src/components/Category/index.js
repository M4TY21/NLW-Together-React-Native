import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

export function Category({ title, icon: Icon, checked = false, onPress }){
  const { secondary50, secondary70 } = theme.colors;

  return(
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} >
      <LinearGradient
        style={styles.container}
        colors={[secondary50, secondary70]}
      >
        <View
          style={[styles.content, { opacity: checked ? 1 : 0.4 }]}
        >
          <View style={checked ? styles.checked : styles.check }/>

          <Icon
            width={50}
            height={50}
          />

          <Text style={styles.title}>
            { title }
          </Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  )
}