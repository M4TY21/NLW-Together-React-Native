import React from "react";

import {
  TouchableOpacity,
  ImageBackground,
  Text,
  View,
  FlatList
} from "react-native";

import { ListDivider } from "../../components/ListDivider";
import { ButtonIcon } from "../../components/ButtonIcon";
import { ListHeader } from "../../components/ListHeader";
import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { Member } from "../../components/Member";

import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

import BannerImg from "../../img/banner.png";
import { Fontisto } from "@expo/vector-icons";

export function AppointmentDetails(){

  const members = [
    {
      id: "1",
      username: 'Matheus',
      avatar_url: 'http://github.com/M4TY21.png',
      status: 'online'
    },
    {
      id: "2",
      username: 'Rodrigo',
      avatar_url: 'http://github.com/M4TY21.png',
      status: 'offline'
    }
  ];

  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <TouchableOpacity activeOpacity={0.8}>
            <Fontisto
              name="share"
              size={24}
              color={theme.colors.primary}
            />
          </TouchableOpacity>
        }
      />

      <ImageBackground
        source={BannerImg}
        style={styles.banner}
      >
        <View style={styles.bannerContent}>
          <Text style={styles.title}>
            Lendários
          </Text>

          <Text style={styles.subtitle}>
            É hoje que vamos chegar ao challenger sem perder uma partida da md10
          </Text>
        </View>
      </ImageBackground>

      <ListHeader
        title="Jogadores"
        subtitle="Total 3"
      />

      <FlatList
        data={members}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Member data={item}/>
        )}
        ItemSeparatorComponent={() => <ListDivider />}
        style={styles.members}
      />
      <View style={styles.footer}>
        <ButtonIcon
          activeOpacity={0.9}
          title="Entrar na partida"
        />
      </View>
    </Background>
  )
}