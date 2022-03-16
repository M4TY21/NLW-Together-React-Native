import React from "react";

import {
	View,
	TouchableOpacity,
	Text,
	Modal,
	TouchableWithoutFeedback,
} from "react-native";
import { useAuth } from "../../hooks/auth";

import { Background } from "../Background";

import { styles } from "./styles";

export function ButtonLogOff({
	closeModal,
	LogOut,
	...rest
}) {
	return (
		<Modal
			transparent
			animationType='slide'
			statusBarTranslucent
			{...rest}
		>
			<TouchableWithoutFeedback onPress={closeModal}>
				<View style={styles.overlay}>
					<View style={styles.container}>
						<Background>
							<View style={styles.content}>
								<View style={styles.text}>
									<Text style={styles.title}>
										Deseja sair do Game
									</Text>

									<Text style={styles.subtitle}>Play</Text>

									<Text style={styles.title}>?</Text>
								</View>
								<View style={styles.buttons}>
									<TouchableOpacity
										activeOpacity={0.8}
										style={styles.closeButton}
										onPress={closeModal}
									>
										<Text style={styles.textButton}>
											Não
										</Text>
									</TouchableOpacity>

									<TouchableOpacity
										activeOpacity={0.8}
										style={styles.confirmButton}
										onPress={LogOut}
									>
										<Text style={styles.textButton}>
											Sim
										</Text>
									</TouchableOpacity>
								</View>
							</View>
						</Background>
					</View>
				</View>
			</TouchableWithoutFeedback>
		</Modal>
	);
}
