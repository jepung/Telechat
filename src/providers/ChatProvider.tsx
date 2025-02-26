import { View, Text, ActivityIndicator } from 'react-native'
import React, { ReactNode, useEffect, useState } from 'react'
import { Chat, OverlayProvider } from 'stream-chat-expo'
import { StreamChat } from "stream-chat";

export const client = StreamChat.getInstance(process.env.EXPO_PUBLIC_STREAM_API_KEY);

const ChatProvider = ({children}: {children: ReactNode}) => {
    const [isReady, setIsReady] = useState(false)

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
            setIsReady(true)

            //   const channel = client.channel("messaging", "the_park", {
            //     name: "the_park",
            //   });

            //   await channel.watch();
        };

        connect();

        return () => {
            client.disconnectUser()
            setIsReady(false)
        }
    }, []);

    if(!isReady) {
        return <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <ActivityIndicator/>
        </View>
    }

    return (
        <OverlayProvider>
            <Chat client={client}>
                {children}
            </Chat>
        </OverlayProvider>
    )
}

export default ChatProvider