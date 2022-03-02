import React from "react";

import { View, FlatList } from "react-native";

import { Guild } from "../../components/Guild";
import { ListDivider } from "../../components/ListDivider";

import { styles } from "./styles";

export const guildss = [
	{
		id: "1",
		name: "Lendários",
		icon: "image.png",
		owner: true,
	},
];

export function Guilds({ handleGuildSelect }) {
	return (
		<View style={styles.container}>
			<FlatList
				data={guildss}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => (
					<Guild
						data={item}
						onPress={() => handleGuildSelect(item)}
					/>
				)}
				showsVerticalScrollIndicator={false}
				ItemSeparatorComponent={() => <ListDivider />}
				style={styles.guilds}
			/>
		</View>
	);
}
