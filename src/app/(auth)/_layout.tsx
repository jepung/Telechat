import { View, Text } from "react-native";
import React from "react";
import { Slot, Stack } from "expo-router";

const AuthLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="sign-in" options={{ headerTitle: "Sign In" }} />
    </Stack>
  );
};

export default AuthLayout;
