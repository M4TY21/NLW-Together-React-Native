import React, { useState, useEffect } from "react";

import {
	TouchableOpacity,
	ImageBackground,
	Text,
	View,
	FlatList,
	Alert,
	Share,
	Platform,
} from "react-native";

import { useRoute } from "@react-navigation/native";
import * as Linking from "expo-linking";

import { ListDivider } from "../../components/ListDivider";
import { ButtonIcon } from "../../components/ButtonIcon";
import { ListHeader } from "../../components/ListHeader";
import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { Member } from "../../components/Member";
import { Load } from "../../components/Load";

import { theme } from "../../global/styles/theme";
import { styles } from "./styles";
import BannerImg from "../../img/banner.png";
import { Fontisto } from "@expo/vector-icons";

import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

export function AppointmentDetails() {
	const [widget, setWidget] = useState({});
	const [loading, setLoading] = useState(true);

	const { user } = useAuth();

	const route = useRoute();
	const { guildSelected } = route.params;

	async function fetchGuildWidget() {
		try {
			const response = await api.get(
				`/guilds/${guildSelected.guilds.id}/widget.json`,
				{
					headers: {
						authorization: `Bearer ${user.tokens}`,
					},
				}
			);
			setWidget(response.data);

			setLoading(false);
		} catch (error) {
			Alert.alert(
				"A configuração Widget do servidor não está habilidada"
			);
		}
	}

	function handleShareInvitation() {
		if (widget.instant_invite == null) {
			Alert.alert("O convite Não está disponivel");
		} else {
			const message =
				Platform.OS === "ios"
					? `Junte-se a ${guildSelected.guild.name}`
					: widget.instant_invite;

			Share.share({
				message,
				url: widget.instant_invite,
			});
		}
	}

	useEffect(() => {
		fetchGuildWidget();
	}, []);

	function handleOpenDiscord() {
		Linking.openURL(widget.instant_invite);
	}

	return (
		<Background>
			<Header
				title='Detalhes'
				action={
					<TouchableOpacity activeOpacity={0.8}>
						<Fontisto
							name='share'
							size={24}
							color={theme.colors.primary}
							onPress={handleShareInvitation}
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
						{guildSelected.guilds.name}
					</Text>

					<Text style={styles.subtitle}>
						{guildSelected.description}
					</Text>
				</View>
			</ImageBackground>

			{loading ? (
				<Load />
			) : (
				<>
					<ListHeader
						title='Jogadores'
						subtitle={`Total ${widget.members.length}`}
						marginTop={15}
					/>

					<FlatList
						data={widget.members}
						keyExtractor={(item) => item.id}
						renderItem={({ item }) => (
							<Member data={item} />
						)}
						ItemSeparatorComponent={() => (
							<ListDivider isCentered />
						)}
						style={styles.members}
					/>
				</>
			)}
			{guildSelected.guilds.owner && (
				<View style={styles.footer}>
					<ButtonIcon
						activeOpacity={0.9}
						title='Entrar na partida'
						onPress={handleOpenDiscord}
					/>
				</View>
			)}
		</Background>
	);
}
