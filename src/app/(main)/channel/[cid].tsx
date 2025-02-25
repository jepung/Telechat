import React, { useMemo } from "react";
import { Channel, Chat, MessageInput, MessageList } from "stream-chat-expo";
import { Channel as ChannelType } from "stream-chat";
import { useAtomValue } from "jotai";

import { Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { channelAtom } from "../../../store";
import { useLocalSearchParams } from "expo-router";
import { client } from "../_layout";

const ChannelScreen = () => {
  const { cid } = useLocalSearchParams();

  const channel = useMemo(() => {
    return client.getChannelById("messaging", cid as string, {});
  }, [cid]);

  if (!channel) {
    return Alert.alert("Error Channel");
  }

  return (
    <SafeAreaView edges={["bottom"]}>
      <Channel channel={channel}>
        <MessageList />
        <MessageInput />
      </Channel>
    </SafeAreaView>
  );
};

export default ChannelScreen;
