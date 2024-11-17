import { Pressable, StyleSheet, Text } from "react-native"
import { Colors, Fonts, Radius } from "../tokens"
import { ExpoRouter, Link, LinkProps } from "expo-router"
import React from "react"
import { Button } from "../Button/Button";


export function CustomLink({text, ...props}: LinkProps & {text:string}) {
	return (
		<Link href={""} style={styles.link} {...props}>      
			<Text style = {styles.text}>{text}</Text>
		</Link>
	);
}

const styles = StyleSheet.create({
    link: {
        fontSize: Fonts.f16,
        color:Colors.white,
        backgroundColor: Colors.Worange,
		borderRadius: Radius.r16,
		justifyContent: 'center',
		alignItems: 'center',
		height: 62,
		width: 315,
        padding:"5%",
    },
    text: {
        color: Colors.white,
		fontSize: Fonts.f16,
        textAlign:"center",
    }
})