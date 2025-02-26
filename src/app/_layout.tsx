import React from "react";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AuthProvider from "../providers/AuthProvider";

const RootLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
       <AuthProvider>
          <Stack screenOptions={{ headerShown: false }}>
              <Stack.Screen name="(main)"/>
              <Stack.Screen name="(auth)"/>
          </Stack>
       </AuthProvider>
    </GestureHandlerRootView>
  );
};

export default RootLayout;
