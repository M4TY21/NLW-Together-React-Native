import React, {
	useState,
	useCallback,
	useEffect,
} from "react";
import { FlatList, View, BackHandler } from "react-native";

import { CategorySelect } from "../../components/CategorySelect";
import { ButtonLogOff } from "../../components/ButtonLogOff";
import { Appointment } from "../../components/Appointment";
import { ListDivider } from "../../components/ListDivider";
import { Background } from "../../components/Background";
import { ListHeader } from "../../components/ListHeader";
import { ButtonAdd } from "../../components/ButtonAdd";
import { Profile } from "../../components/Profile";
import { Load } from "../../components/Load";

import {
	useFocusEffect,
	useNavigation,
} from "@react-navigation/native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLLECTION_APPOINTMENTS } from "../../configs/database";
import { useAuth } from "../../hooks/auth";

import { styles } from "./styles";

export function Home() {
	const [category, setCategory] = useState("");
	const [appointments, setAppointments] = useState([]);
	const [loading, setLoading] = useState(true);
	const [openModal, setOpenModal] = useState(false);

	const { signOut } = useAuth();

	const navigation = useNavigation();

	function handleAppointmentCreate() {
		navigation.navigate("AppointmentCreate");
	}

	function handleAppointmentDetails(guildSelected) {
		navigation.navigate("AppointmentDetails", {
			guildSelected,
		});
	}

	function handleCategorySelect(categoryId) {
		categoryId === category
			? setCategory("")
			: setCategory(categoryId);
	}

	async function loadAppointment() {
		const response = await AsyncStorage.getItem(
			COLLECTION_APPOINTMENTS
		);
		const storage = response ? JSON.parse(response) : [];

		if (category) {
			setAppointments(
				storage.filter((item) => item.category === category)
			);
		} else {
			setAppointments(storage);
		}

		setLoading(false);
	}

	function handleCloseModal() {
		setOpenModal(false);
	}

	useFocusEffect(
		useCallback(() => {
			loadAppointment();
		}, [category])
	);

	useEffect(() => {
		const backAction = () => {
			setOpenModal(true);
			return true;
		};

		const backHandler = BackHandler.addEventListener(
			"hardwareBackPress",
			backAction
		);

		return () => backHandler.remove();
	}, []);

	return (
		<Background>
			<View style={styles.header}>
				<Profile />

				<ButtonAdd
					activeOpacity={0.8}
					onPress={handleAppointmentCreate}
				/>
			</View>

			<View style={{ marginBottom: 10 }}>
				<CategorySelect
					categorySelected={category}
					setCategory={handleCategorySelect}
					hasChecked={false}
				/>
			</View>

			{loading ? (
				<Load />
			) : (
				<>
					<ListHeader
						title='Partidas Agendadadas'
						subtitle={`Total ${appointments.length}`}
					/>

					<FlatList
						data={appointments}
						keyExtractor={(item) => item.id}
						renderItem={({ item }) => (
							<Appointment
								data={item}
								activeOpacity={0.8}
								onPress={() =>
									handleAppointmentDetails(item)
								}
							/>
						)}
						ItemSeparatorComponent={() => <ListDivider />}
						contentContainerStyle={{
							paddingBottom: 69,
						}}
						style={styles.matches}
						showsHorizontalScrollIndicator={false}
					/>
				</>
			)}

			<ButtonLogOff
				visible={openModal}
				closeModal={handleCloseModal}
				LogOut={signOut}
			/>
		</Background>
	);
}
