import React from "react";

import { View, FlatList } from "react-native";

import { Guild } from "../../components/Guild";
import { ListDivider } from "../../components/ListDivider";
import { Load } from "../../components/Load";

import { styles } from "./styles";

export function Guilds({
	handleGuildSelect,
	loading,
	guilds,
}) {
	return (
		<View style={styles.container}>
			{loading ? (
				<Load />
			) : (
				<FlatList
					data={guilds}
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
			)}
		</View>
	);
}
