import { View, Text, ActivityIndicator } from "react-native";
import React, { ReactNode, useEffect, useState } from "react";
import { Chat, OverlayProvider } from "stream-chat-expo";
import { StreamChat } from "stream-chat";
import { useAtomValue } from "jotai";
import { profileAtom, sessionAtom, userAtom } from "./AuthProvider";
import { supabase } from "../lib/supabase";

export const client = StreamChat.getInstance(
  process.env.EXPO_PUBLIC_STREAM_API_KEY
);

const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [isReady, setIsReady] = useState(false);
  const profile = useAtomValue(profileAtom);
  const { data: imageUrl } = supabase.storage
    .from("avatars")
    .getPublicUrl(profile?.avatar_url!);

  useEffect(() => {
    const connect = async () => {
      await client.connectUser(
        {
          id: profile?.id!,
          name: profile?.full_name,
          image: imageUrl.publicUrl,
        },
        client.devToken(profile?.id!)
      );
      setIsReady(true);

      //   const channel = client.channel("messaging", "the_park", {
      //     name: "the_park",
      //   });

      //   await channel.watch();
    };

    if (profile) {
      connect();
    }

    return () => {
      if (isReady) {
        client.disconnectUser();
        setIsReady(false);
      }
    };
  }, [profile]);

  if (!isReady) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <OverlayProvider>
      <Chat client={client}>{children}</Chat>
    </OverlayProvider>
  );
};

export default ChatProvider;
