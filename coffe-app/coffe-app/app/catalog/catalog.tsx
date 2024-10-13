/* eslint-disable prettier/prettier */
import { View, Text } from "react-native";
import { Colors } from "../../shared/tokens";
import React from "react";
import { CustomLink } from "../../shared/CustomLink/CustomLink";

export default function Catalog(){
    return (
        <View style={{backgroundColor:Colors.Worange}}>
            <CustomLink href = "/catalog/id" text = "ID"></CustomLink>
            <CustomLink href = "/catalog/cart" text = "CART"></CustomLink>
            <CustomLink href = "/catalog/address" text = "ADDRESS"></CustomLink>
            
        </View>
    )
}