import React, { useState } from "react";

import { TouchableOpacity, Text, View } from "react-native";

import { CategorySelect } from "../../components/CategorySelect";
import { Background } from "../../components/Background";
import { GuildIcon } from "../../components/GuildIcon";
import { Header } from "../../components/Header";

import { Feather } from "@expo/vector-icons";
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";
import { SmallInput } from "../../components/SmallInput";

export function AppointmentCreate() {
	const [category, setCategory] = useState("");

	function handleCategorySelect(categoryId) {
		categoryId === category ? setCategory("") : setCategory(categoryId);
	}

	return (
		<Background>
			<Header title="Agendar partida" />

			<Text
				style={[
					styles.label,
					{ marginTop: 36, marginLeft: 24, marginBottom: 18 },
				]}
			>
				Categoria
			</Text>

			<View style={{ marginBottom: 32 }}>
				<CategorySelect
					categorySelected={category}
					setCategory={handleCategorySelect}
					hasChecked={false}
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
							<Text style={styles.label}>Selecione um servidor</Text>
						</View>

						<Feather
							name="chevron-right"
							color={theme.colors.heading}
							size={18}
						/>
					</View>
				</TouchableOpacity>

				<SmallInput />
			</View>
		</Background>
	);
}
