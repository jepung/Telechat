import { View, Text } from "react-native";
import React from "react";
import { Slot, Stack, useLocalSearchParams, useRouter } from "expo-router";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

const ChannelLayout = () => {
  const { cid: channelName } = useLocalSearchParams<{cid: string}>();
  const router = useRouter();
  return (
    <Slot/>
  );
};

export default ChannelLayout;
