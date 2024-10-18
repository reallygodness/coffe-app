import { useLocalSearchParams } from "expo-router";
import React from "react";
import { View, Text } from "react-native";

export default function IdPage() {
    const { alias } = useLocalSearchParams();
    return ( 
    <View>
        <Text>{ alias }</Text>
    </View>
    )
}