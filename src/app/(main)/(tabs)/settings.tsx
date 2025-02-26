import { View, Text, Pressable, TouchableOpacity } from "react-native";
import React from "react";
import { Link, router, useRouter } from "expo-router";
import { supabase } from "../../../lib/supabase";

const SettingsScreen = () => {
  const logoutHandler = async () => {
    await supabase.auth.signOut()
  }

  return (
    <View style={{flex: 1, padding: 10}}>
      <TouchableOpacity onPress={logoutHandler} activeOpacity={0.9} style={{backgroundColor: "black", padding: 15, borderRadius: 100}}>
        <Text style={{textAlign: "center", color: "white", fontWeight: "bold"}}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingsScreen;
