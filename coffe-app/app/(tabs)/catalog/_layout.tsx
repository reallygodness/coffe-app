import React from 'react';
import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Colors } from '../../../shared/tokens';

export default function CatalogLayout() {
  return (
    <SafeAreaProvider>
      <StatusBar style="light" backgroundColor="black" />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            statusBarColor: Colors.black,
          }}
        />
      </Stack>
    </SafeAreaProvider>
  );
}
