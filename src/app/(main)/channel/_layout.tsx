import { View, Text } from "react-native";
import React from "react";
import { Slot, Stack, useLocalSearchParams, useRouter } from "expo-router";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

const ChannelLayout = () => {
  const { cid: channelName } = useLocalSearchParams();
  const router = useRouter();
  return (
    <Stack
      screenOptions={{
        headerLeft: ({}) => (
          <AntDesign
            name="arrowleft"
            color={"black"}
            size={20}
            onPress={() => router.back()}
          />
        ),
        headerTitle: channelName as string,
      }}
    />
  );
};

export default ChannelLayout;
