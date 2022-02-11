import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StatusBar,
} from "react-native";
import { styles } from "./styles";
import Illustration from "../../img/illustration.png";
import { ButtonIcon } from "../../components/ButtonIcon/index";

export function SignIn() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Image
        source={Illustration}
        style={styles.imagem}
        resizeMode='stretch'
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se {'\n'}
          e organize suas {'\n'}
          jogatinas
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {'\n'}
          favoritos com seus amigos
        </Text>

        <ButtonIcon
          title="Entrar com o Discord"
          opacity={0.7}
        />
      </View>
    </View>
  );
}