import React from "react";
import { Tabs } from "expo-router";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

const TabsLayout = () => {

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
