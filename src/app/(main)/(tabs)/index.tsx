import React from "react";
import { ChannelList } from "stream-chat-expo";
import { useAtomValue, useSetAtom } from "jotai";
import { channelAtom } from "../../../store";
import { Channel as ChannelType } from "stream-chat";
import { useRouter } from "expo-router";
import { profileAtom } from "../../../providers/AuthProvider";

const HomeScreen = () => {
  const router = useRouter();
  const setChannel = useSetAtom(channelAtom);
  const profile = useAtomValue(profileAtom);

  const channelHandler = (channel: ChannelType) => {
    setChannel(channel);
    router.push(`/channel/${channel.id}`);
  };

  return (
    <ChannelList
      filters={{
        members: { $in: [profile?.id!] },
      }}
      onSelect={(ch) => channelHandler(ch)}
    />
  );
};

export default HomeScreen;
