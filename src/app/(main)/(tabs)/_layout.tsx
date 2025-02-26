import React from "react";
import { Tabs, useRouter } from "expo-router";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { View } from "react-native";

const TabsLayout = () => {
  const router = useRouter();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "black",
        headerTitleAlign: "center",
      }}
    >
      <Tabs.Screen
        name="contacts"
        options={{
          headerTitle: "Contacts",
          tabBarLabel: "Contacts",
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="address-book" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "Chats",
          tabBarLabel: "Chats",
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="commenting" size={size} color={color} />
          ),
          headerRight: () => (
            <View style={{ paddingRight: 12 }}>
              <AntDesign
                name="plus"
                size={24}
                color={"black"}
                onPress={() => router.push("/users")}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerTitle: "Profile",
          tabBarLabel: "Profile",
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="user" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          headerTitle: "Settings",
          tabBarLabel: "Settings",
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="gear" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
