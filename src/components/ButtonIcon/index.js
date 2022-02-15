import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import {
  Text,
  Image,
  View,
  TouchableOpacity
} from 'react-native';

import DiscordImg from '../../img/discord.png';
import { styles } from "./styles";

export function ButtonIcon({ title, onPress }) {
  return (
    <RectButton style={styles.container} onPress={onPress}>
      <View style={styles.iconWrapper}>
        <Image source={DiscordImg} style={styles.icon} />
      </View>

      <Text style={styles.title}>
        { title }
      </Text>
    </RectButton>
  )
}