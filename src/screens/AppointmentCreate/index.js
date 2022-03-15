import React, { useState } from "react";

import {
	TouchableOpacity,
	Text,
	View,
	ScrollView,
	Platform,
	KeyboardAvoidingView,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLLECTION_APPOINTMENTS } from "../../configs/database";
import { useNavigation } from "@react-navigation/native";
import uuid from "react-native-uuid";

import { CategorySelect } from "../../components/CategorySelect";
import { SmallInput } from "../../components/SmallInput";
import { Background } from "../../components/Background";
import { ModalView } from "../../components/ModalView";
import { GuildIcon } from "../../components/GuildIcon";
import { TextArea } from "../../components/TextArea";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";

import { Guilds } from "../Guilds";

import DiscordSvg from "../../img/discord.svg";
import { theme } from "../../global/styles/theme";
import { Feather } from "@expo/vector-icons";
import { styles } from "./styles";

export function AppointmentCreate() {
	const [category, setCategory] = useState("");
	const [openGuildsModal, setOpenGuildsModal] =
		useState(false);
	const [guilds, setGuilds] = useState([]);

	const [day, setDay] = useState("");
	const [month, setMonth] = useState("");
	const [hour, setHour] = useState("");
	const [minute, setMinute] = useState("");
	const [description, setDescription] = useState("");

	const navigation = useNavigation();

	function handleOpenGuilds() {
		setOpenGuildsModal(true);
	}

	function handleCloseGuilds() {
		setOpenGuildsModal(false);
	}

	function handleGuildSelect(guildSelect) {
		setGuilds(guildSelect);
		setOpenGuildsModal(false);
	}

	function handleCategorySelect(categoryId) {
		categoryId === category
			? setCategory("")
			: setCategory(categoryId);
	}

	async function handleSave() {
		const newAppointment = {
			id: uuid.v4(),
			guilds,
			category,
			date: `${day}/${month} ás ${hour}:${minute}h`,
			description,
		};

		const storage = await AsyncStorage.getItem(
			COLLECTION_APPOINTMENTS
		);
		const appointments = storage ? JSON.parse(storage) : [];

		await AsyncStorage.setItem(
			COLLECTION_APPOINTMENTS,
			JSON.stringify([...appointments, newAppointment])
		);

		navigation.navigate("Home");
	}

	return (
		<Background>
			<KeyboardAvoidingView
				style={styles.container}
				behavior={
					Platform.OS === "ios" ? "padding" : "height"
				}
			>
				<ScrollView>
					<Header title='Agendar partida' />

					<Text
						style={[
							styles.label,
							{
								marginTop: 36,
								marginLeft: 24,
								marginBottom: 18,
							},
						]}
					>
						Categoria
					</Text>

					<View>
						<CategorySelect
							categorySelected={category}
							setCategory={handleCategorySelect}
							hasChecked={true}
						/>
					</View>

					<View style={styles.form}>
						<TouchableOpacity
							activeOpacity={1}
							onPress={handleOpenGuilds}
						>
							<View style={styles.select}>
								{guilds.icon ? (
									<GuildIcon
										guildId={guilds.id}
										iconId={guilds.icon}
									/>
								) : (
									<View style={styles.image}>
										<DiscordSvg width={45} height={45} />
									</View>
								)}

								<View style={styles.selectBody}>
									<Text style={styles.label}>
										{guilds.name
											? guilds.name
											: "Selecione um servidor"}
									</Text>
								</View>

								<Feather
									name='chevron-right'
									color={theme.colors.heading}
									size={18}
								/>
							</View>
						</TouchableOpacity>

						<View style={styles.field}>
							<View>
								<Text
									style={[
										styles.label,
										{ marginBottom: 12 },
									]}
								>
									Dia e mês
								</Text>
								<View style={styles.column}>
									<SmallInput onChangeText={setDay} />
									<Text style={styles.divider}>/</Text>
									<SmallInput onChangeText={setMonth} />
								</View>
							</View>

							<View>
								<Text
									style={[
										styles.label,
										{ marginBottom: 12 },
									]}
								>
									Horário
								</Text>
								<View style={styles.column}>
									<SmallInput onChangeText={setHour} />
									<Text style={styles.divider}>:</Text>
									<SmallInput onChangeText={setMinute} />
								</View>
							</View>
						</View>

						<View
							style={[styles.field, { marginBottom: 12 }]}
						>
							<Text style={styles.label}>Descrição</Text>

							<Text style={styles.caracteresLimit}>
								Max 60
							</Text>
						</View>

						<TextArea
							multiline
							maxLength={60}
							numberOfLines={4}
							autoCorrect={false}
							onChangeText={setDescription}
						/>
					</View>

					<View style={styles.footer}>
						<Button
							title='Agendar'
							activeOpacity={0.8}
							onPress={handleSave}
						/>
					</View>
				</ScrollView>

				<ModalView
					visible={openGuildsModal}
					closeModal={handleCloseGuilds}
				>
					<Guilds handleGuildSelect={handleGuildSelect} />
				</ModalView>
			</KeyboardAvoidingView>
		</Background>
	);
}
