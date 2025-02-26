import { View, Text } from "react-native";
import React, { ReactNode, useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { Session, User } from "@supabase/supabase-js";
import { Redirect, Slot } from "expo-router";
import { atom, useAtom, useSetAtom } from "jotai";

interface IProfile {
  id: string;
  username: string;
  full_name: string;
  avatar_url: string;
  email: string;
}

export const sessionAtom = atom<Session | null>(null);
export const userAtom = atom<User | null>(null);
export const profileAtom = atom<IProfile | null>(null);
const AuthProvider = ({ children }: { children: any }) => {
  const [session, setSession] = useAtom(sessionAtom);
  const setProfile = useSetAtom(profileAtom);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  useEffect(() => {
    const fetchProfile = async () => {
      const { data } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", session!.user.id)
        .single();
      setProfile({ ...data, email: session!.user.email });
    };

    if (session?.user) {
      fetchProfile();
    }
  }, [session?.user]);

  return children;
};

export default AuthProvider;
