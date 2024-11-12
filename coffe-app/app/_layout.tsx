import { useFonts } from 'expo-font';
import { Stack } from 'expo-router/stack';
import React from 'react';
import { Colors } from '../shared/tokens';

export default function Layout() {
  const [loaded] = useFonts({
		'SoraRegular': require('../assets/fonts/Sora-Regular.ttf'),
		'SoraSemiBold': require('../assets/fonts/Sora-SemiBold.ttf'),
	});

  if (!loaded) {
		return null;
	}
  return (
    <Stack screenOptions={{ statusBarColor: Colors.black}}>
      <Stack.Screen name = "index" options = {{ headerShown: false }}/>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name = "address"/>
      <Stack.Screen name = "success"/>
    </Stack>
  );
}
