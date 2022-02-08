import React from 'react';
import {
  Text,
  Image,
  View,
  TouchableOpacity
} from 'react-native';

import DiscordImg from '../../img/discord.png';
import { styles } from "./styles";

export function ButtonIcon({ title, opacity }) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={opacity}>
      <View style={styles.iconWrapper}>
        <Image source={DiscordImg} style={styles.icon} />
      </View>

      <Text style={styles.title}>
        { title }
      </Text>
    </TouchableOpacity>
  )
}