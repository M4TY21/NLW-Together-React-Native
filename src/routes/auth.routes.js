import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { theme } from "../global/styles/theme";

import { AppointmentCreate } from "../screens/AppointmentCreate";
import { AppointmentDetails } from "../screens/AppointmentDetails";
import { SignIn } from "../screens/SignIn";
import { Home } from "../screens/Home";

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: theme.colors.secondary100 }
      }}
    >
      <Screen
        name="SignIn"
        component={SignIn}
      />
      <Screen
        name="Home"
        component={Home}
      />
      <Screen
        name="AppointmentDetails"
        component={AppointmentDetails}
      />
      <Screen
        name="AppointmentCreate"
        component={AppointmentCreate}
      />
    </Navigator>
  )
}