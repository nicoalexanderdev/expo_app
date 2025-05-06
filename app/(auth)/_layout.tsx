import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet } from 'react-native'

const AuthLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen name='sign-in' options={{
          headerShown:false
        }}>
        </Stack.Screen>
        <Stack.Screen name='sign-up' options={{
          headerShown:false
        }}>
        </Stack.Screen>
      </Stack>

      <StatusBar backgroundColor='#161622' style='light'></StatusBar>
    </>
  )
}

export default AuthLayout

const styles = StyleSheet.create({})