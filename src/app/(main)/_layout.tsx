import React, { useEffect } from "react";
import { Redirect, Slot, Stack, useLocalSearchParams } from "expo-router";
import { StreamChat } from "stream-chat";
import { Chat, OverlayProvider } from "stream-chat-expo";
import { useAtomValue } from "jotai";
import { channelAtom } from "../../store";

export const client = StreamChat.getInstance("se66mbct33w5");

const MainLayout = () => {
  let isAuth = true;
  const channel = useAtomValue(channelAtom);

  if (!isAuth) {
    return <Redirect href={"/sign-in"} />;
  }

  useEffect(() => {
    const connect = async () => {
      await client.connectUser(
        {
          id: "jlahey",
          name: "Jim Lahey",
          image: "https://i.imgur.com/fR9Jz14.png",
        },
        client.devToken("jlahey")
      );

      //   const channel = client.channel("messaging", "the_park", {
      //     name: "the_park",
      //   });

      //   await channel.watch();
    };

    connect();
  }, []);

  return (
    <OverlayProvider>
      <Chat client={client}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" />
          <Stack.Screen
            name="channel/[cid]"
            options={{
              headerShown: true,
              headerTitle: channel?.data?.name,
              headerBackButtonDisplayMode: "minimal",
            }}
          />
        </Stack>
      </Chat>
    </OverlayProvider>
  );
};

export default MainLayout;
