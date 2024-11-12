import React, { useEffect } from 'react';
import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { Colors } from '../shared/tokens';

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [loaded, error] = useFonts({
    'SoraRegular': require('../assets/fonts/Sora-Regular.ttf'),
    'SoraSemiBold': require('../assets/fonts/Sora-SemiBold.ttf'),
  });
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

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
            navigationBarColor: Colors.black,
          }}
        />
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
            navigationBarColor: Colors.white,
          }}
        />
      </Stack>
    </SafeAreaProvider>
  );
}
