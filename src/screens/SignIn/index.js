import React from "react";
import { View, Text, Image, Alert } from "react-native";

import Illustration from "../../img/illustration.png";
import { styles } from "./styles";

import { ButtonIcon } from "../../components/ButtonIcon/index";
import { Background } from "../../components/Background";
import { useNavigation } from "@react-navigation/native";

import { useAuth } from "../../hooks/auth";

export function SignIn() {
	const { user, signIn } = useAuth();
	console.log(user);

	async function handleSignIn() {
		try {
			await signIn();
		} catch (error) {
			Alert.alert(error);
		}
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
