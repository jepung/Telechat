import { Redirect, Stack } from "expo-router";
import { useAtomValue } from "jotai";
import { channelAtom } from "../../store";
import ChatProvider from "../../providers/ChatProvider";
import { sessionAtom } from "../../providers/AuthProvider";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

const MainLayout = () => {
  const channel = useAtomValue(channelAtom);
  const session = useAtomValue(sessionAtom);

  if (!session) {
    return <Redirect href={"/login"} />;
  }

  return (
    <ChatProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen
          name="channel"
          options={{
            headerShown: true,
            headerTitle: channel?.data?.name,
            headerBackButtonDisplayMode: "minimal",
          }}
        />
        <Stack.Screen
          name="users"
          options={{
            headerShown: true,
            headerTitle: "Users",
            headerBackButtonDisplayMode: "minimal",
          }}
        />
      </Stack>
    </ChatProvider>
  );
};

export default MainLayout;
