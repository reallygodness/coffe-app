import { Pressable, PressableProps, View, Text, StyleSheet } from "react-native";
import { Colors, Fonts, Radius } from "../tokens";


export function Button ( {text, ...props}: PressableProps & {text: string} ) {
    return (
        <Pressable {...props}>
            <View style = {Styles.button}>
                <Text style = {Styles.text}>{text}</Text>
            </View>
        </Pressable>
    )
}   

const Styles = StyleSheet.create({
    text: {
        color: Colors.white,
        fontSize: Fonts.f16,
    },

    button: {
        backgroundColor: Colors.Worange,
        borderRadius: Radius.r16,
        justifyContent: 'center',
        alignItems: 'center',
        height: 62,
        width: 315,
    }
})