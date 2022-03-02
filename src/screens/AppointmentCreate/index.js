import React, { useState } from "react";

import {
	TouchableOpacity,
	Text,
	View,
	ScrollView,
	Platform,
	KeyboardAvoidingView,
} from "react-native";

import { CategorySelect } from "../../components/CategorySelect";
import { SmallInput } from "../../components/SmallInput";
import { ModalView } from "../../components/ModalView";
import { GuildIcon } from "../../components/GuildIcon";
import { TextArea } from "../../components/TextArea";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Guilds } from "../Guilds";

import { Feather } from "@expo/vector-icons";
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

export function AppointmentCreate() {
	const [category, setCategory] = useState("");

	function handleCategorySelect(categoryId) {
		categoryId === category
			? setCategory("")
			: setCategory(categoryId);
	}

	return (
		<KeyboardAvoidingView
			style={styles.container}
			behavior={
				Platform.OS === "ios"
					? "padding"
					: "height"
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

				<View style={{ marginBottom: 32 }}>
					<CategorySelect
						categorySelected={category}
						setCategory={handleCategorySelect}
						hasChecked={true}
					/>
				</View>

				<View style={styles.form}>
					<TouchableOpacity activeOpacity={1}>
						<View style={styles.select}>
							{/* {
              <View style={styles.image} />
              <GuildIcon />
            } */}

							<View style={styles.selectBody}>
								<Text style={styles.label}>
									Selecione um servidor
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
							<Text style={styles.label}>
								Dia e mês
							</Text>
							<View style={styles.column}>
								<SmallInput maxLength={2} />
								<Text style={styles.divider}>
									/
								</Text>
								<SmallInput maxLength={2} />
							</View>
						</View>

						<View>
							<Text style={styles.label}>
								Horário
							</Text>
							<View style={styles.column}>
								<SmallInput maxLength={2} />
								<Text style={styles.divider}>
									:
								</Text>
								<SmallInput maxLength={2} />
							</View>
						</View>
					</View>

					<View
						style={[
							styles.field,
							{ marginBottom: 12 },
						]}
					>
						<Text style={styles.label}>
							Descrição
						</Text>

						<Text style={styles.caracteresLimit}>
							Max 100
						</Text>
					</View>

					<TextArea
						multiline
						maxLength={100}
						numberOfLines={5}
						autoCorrect={false}
					/>
				</View>

				<View style={styles.footer}>
					<Button
						title='Agendar'
						activeOpacity={0.8}
						// onPress={handleCreateAppointment}
					/>
				</View>
			</ScrollView>

			<ModalView>
				<Guilds />
			</ModalView>
		</KeyboardAvoidingView>
	);
}
