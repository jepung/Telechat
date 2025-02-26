import { View, Text } from 'react-native'
import React, { ReactNode, useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import { Session } from '@supabase/supabase-js'
import { Redirect, Slot } from 'expo-router'
import { atom, useAtom, useSetAtom } from 'jotai'

export const sessionAtom = atom<Session | null>(null)

const AuthProvider = ({children}: {children: any}) => {
    const setSession = useSetAtom(sessionAtom)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return children
}

export default AuthProvider