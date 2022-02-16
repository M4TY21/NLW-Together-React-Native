import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

export function Category({ title, icon: Icon, checked = false, ...rest }){
  const { secondary50, secondary70 } = theme.colors;
  return(
    <TouchableOpacity {...rest} >
      <LinearGradient
        style={styles.container}
        colors={[secondary50, secondary70]}
      >
        <View
          style={[styles.content, { opacity: checked ? 1 : 0.4 }]}
        >
          <View style={checked ? styles.checked : styles.check }>
            <Icon
              width={48}
              height={48}
            />
          </View>

          <Text style={styles.title}>
            { title }
          </Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  )
}