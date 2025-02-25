import React from "react";
import { ChannelList } from "stream-chat-expo";
import { useSetAtom } from "jotai";
import { channelAtom } from "../../../store";
import { Channel as ChannelType } from "stream-chat";
import { useRouter } from "expo-router";

const HomeScreen = () => {
  const router = useRouter();
  const setChannel = useSetAtom(channelAtom);

  const channelHandler = (channel: ChannelType) => {
    setChannel(channel);
    router.push(`/channel/${channel.id}`);
  };

  return <ChannelList onSelect={(ch) => channelHandler(ch)} />;
};

export default HomeScreen;
