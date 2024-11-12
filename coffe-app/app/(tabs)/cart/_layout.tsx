import React from 'react';
import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Colors } from '../../../shared/tokens';

export default function CartLayout() {
  return (
    <SafeAreaProvider>
      <StatusBar style="dark" backgroundColor="white" />
      <Stack
        screenOptions={{
          headerShown: true,
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            statusBarColor: Colors.white,
            statusBarStyle: 'dark',
          }}
        />
      </Stack>
    </SafeAreaProvider>
  );
}
