import React from "react"
import { View, Text } from "react-native"
import { CustomLink } from "../../shared/CustomLink/CustomLink"

export default function Cart () {
    return (
        <View>
            <CustomLink href = "/catalog/success" text = "SUCCESS"></CustomLink>
        </View>
    )
}