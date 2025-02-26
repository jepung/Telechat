import { View, Text, Image } from "react-native";
import React from "react";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

const UserListItem = ({
  user,
}: {
  user: {
    full_name: string;
    avatar_url: string;
    email: string;
  };
}) => {
  return (
    <View
      style={{
        padding: 15,
        backgroundColor: "white",
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
      }}
    >
      {user.avatar_url ? (
        <Image
          source={{ uri: user.avatar_url }}
          style={{ width: 35, height: 35, borderRadius: 20 }}
        />
      ) : (
        <AntDesign name="user" size={35} color={"black"} />
      )}

      <View>
        <Text style={{ fontWeight: 600 }}>{user.full_name}</Text>
        <Text style={{ color: "gray" }}>{user.email}</Text>
      </View>
    </View>
  );
};

export default UserListItem;
