import React from 'react';
import { Image } from 'react-native';

import { styles } from './styles';

export function GuildIcon() {
  const uri = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.pngaaa.com%2F766%2F2341766-middle.png&f=1&nofb=1";
  return (
    <Image
      source={{ uri }}
      style={styles.image}
      resizeMode="cover"
    />
  )
}