import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import { supabase } from "../../lib/supabase";
import { useAtomValue } from "jotai";
import { profileAtom } from "../../providers/AuthProvider";
import UserListItem from "../../components/UserListItem";

const UsersScreen = () => {
  const [users, setUsers] = useState<
    { full_name: string; avatar_url: string; email: string; id: string }[]
  >([]);
  const profile = useAtomValue(profileAtom);

  useEffect(() => {
    (async function () {
      const { data: profiles, error } = await supabase
        .from("profiles")
        .select("*")
        .neq("id", profile?.id)
        .order("full_name", { ascending: true });

      const processedProfiles = await Promise.all(
        (
          profiles as {
            id: string;
            full_name: string;
            avatar_url: string;
            email: string;
          }[]
        )?.map(async (profile) => {
          const { data } = await supabase.from("users").select("*");
          return {
            ...profile,
            avatar_url: profile.avatar_url
              ? supabase.storage
                  .from("avatars")
                  .getPublicUrl(profile.avatar_url).data.publicUrl
              : "",
            email: data?.email as string,
          };
        })
      );

      console.log(processedProfiles);

      setUsers(processedProfiles);
    })();
  }, []);

  return (
    <FlatList
      style={{ backgroundColor: "white", flex: 1 }}
      data={users}
      ItemSeparatorComponent={() => (
        <View style={{ height: 1, backgroundColor: "lightgray" }} />
      )}
      renderItem={({ item }) => <UserListItem user={item} />}
    />
  );
};

export default UsersScreen;
