import { View, Text } from 'react-native'
import React from 'react'
import { Redirect, Slot, Stack } from 'expo-router'
import { useAtomValue } from 'jotai'
import { sessionAtom } from '../../providers/AuthProvider'

const AuthLayout = () => {
    const session = useAtomValue(sessionAtom)

    if(session) {
        return <Redirect href={"/(main)"}/>
    }

  return <Stack screenOptions={{
    headerTitle: "Login"
  }}/>
}

export default AuthLayout