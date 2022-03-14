import React, { useEffect } from "react";
import { useState } from "react";
import { View, FlatList } from "react-native";

import { Guild } from "../../components/Guild";
import { Load } from "../../components/Load";
import { ListDivider } from "../../components/ListDivider";

import { styles } from "./styles";

import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

export function Guilds({ handleGuildSelect }) {
	const [guilds, setGuilds] = useState([]);
	const [loading, setLoading] = useState(true);

	const { user } = useAuth();

	async function fetchGuilds() {
		const response = await api.get("/users/@me/guilds", {
			headers: {
				authorization: `Bearer ${user.tokens}`,
			},
		});
		setGuilds(response.data);
		setLoading(false);
	}

	useEffect(() => {
		fetchGuilds();
	}, []);

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
					ItemSeparatorComponent={() => (
						<ListDivider isCentered />
					)}
					ListHeaderComponent={() => (
						<ListDivider isCentered />
					)}
					contentContainerStyle={{
						paddingBottom: 68,
						paddingTop: 103,
					}}
					style={styles.guilds}
				/>
			)}
		</View>
	);
}
