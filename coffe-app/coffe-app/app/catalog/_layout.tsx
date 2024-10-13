import { HeaderShownContext } from "@react-navigation/elements";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import React from "react";

export default function RootLayout(){
    const [loaded] = useFonts({
        SoraRegular: require('../../assets/fonts/Sora-Regular.ttf'),
        SoraSemiBold: require('../../assets/fonts/Sora-SemiBold.ttf') 
    });

    if (!loaded){
        null;
    }
    return (
        <Stack>
            <Stack.Screen name = "catalog"></Stack.Screen>
            <Stack.Screen name = "address"></Stack.Screen>
            <Stack.Screen name = "cart"></Stack.Screen>
            <Stack.Screen name = "success"></Stack.Screen>
        </Stack>
    )
}

