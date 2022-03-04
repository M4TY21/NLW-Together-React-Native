import React, { useContext } from "react";
import { View, Text, Image } from "react-native";

import Illustration from "../../img/illustration.png";
import { styles } from "./styles";

import { AuthContext } from "../../hooks/auth";

import { ButtonIcon } from "../../components/ButtonIcon/index";
import { Background } from "../../components/Background";
import { useNavigation } from "@react-navigation/native";

export function SignIn() {
	const Navigation = useNavigation();

	const context = useContext(AuthContext);
	console.log(context);

	function handleSignIn() {
		Navigation.navigate("Home");
	}

	return (
		<Background>
			<View style={styles.container}>
				<Image
					source={Illustration}
					style={styles.imagem}
					resizeMode='stretch'
				/>

				<View style={styles.content}>
					<Text style={styles.title}>
						Conecte-se {"\n"}e organize suas {"\n"}
						jogatinas
					</Text>

					<Text style={styles.subtitle}>
						Crie grupos para jogar seus games {"\n"}
						favoritos com seus amigos
					</Text>

					<ButtonIcon
						title='Entrar com o Discord'
						activeOpacity={0.7}
						onPress={handleSignIn}
					/>
				</View>
			</View>
		</Background>
	);
}
