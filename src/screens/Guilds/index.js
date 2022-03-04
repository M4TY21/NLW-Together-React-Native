import React from "react";

import { View, FlatList } from "react-native";

import { Guild } from "../../components/Guild";
import { ListDivider } from "../../components/ListDivider";

import { styles } from "./styles";

export const data = [
	{
		id: "1",
		name: "Lendários",
		icon: "image.png",
		owner: true,
	},
	{
		id: "2",
		name: "Lendários",
		icon: "image.png",
		owner: true,
	},
];

export function Guilds({ handleGuildSelect }) {
	return (
		<View style={styles.container}>
			<FlatList
				data={data}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => (
					<Guild
						data={item}
						onPress={() => handleGuildSelect(item)}
					/>
				)}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{
					paddingBottom: 68,
					paddingTop: 103,
				}}
				ItemSeparatorComponent={() => (
					<ListDivider isCentered />
				)}
				ListHeaderComponent={() => (
					<ListDivider isCentered />
				)}
				style={styles.guilds}
			/>
		</View>
	);
}
