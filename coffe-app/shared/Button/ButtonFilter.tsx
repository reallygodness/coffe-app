import React from "react";
import { Animated, GestureResponderEvent, Pressable, PressableProps, StyleSheet, Text } from "react-native";
import { Colors, Fonts } from "../tokens";


export function ButtonFilter({ text, ...props }: PressableProps & { text: string }) {

    const animatedValue = new Animated.Value(100);
	const color = animatedValue.interpolate({
		inputRange: [0, 100],
		outputRange: [Colors.white, Colors.Worange],
	});

	const fadeIn = (e: GestureResponderEvent) => {
		Animated.timing(animatedValue, {
			toValue: 0,
			duration: 100,
			useNativeDriver: true,
		}).start();
		// eslint-disable-next-line @typescript-eslint/no-unused-expressions
		props.onPressIn && props.onPressIn(e);
	};

	const fadeOut = (e: GestureResponderEvent) => {
		Animated.timing(animatedValue, {
			toValue: 100,
			duration: 100,
			useNativeDriver: true,
		}).start();
		// eslint-disable-next-line @typescript-eslint/no-unused-expressions
		props.onPressOut && props.onPressOut(e);
	};

    return(
        <Pressable {...props}>
            <Animated.View style={{ ...styles.text, backgroundColor: color }}>
                <Text style={styles.text}>{text}</Text>
            </Animated.View>
				
		</Pressable>
    )   
}

const styles = StyleSheet.create({
    text: {
        color: Colors.filterColor,
        fontSize: Fonts.f14,
        fontFamily: Fonts.SoraRegular,
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 10,
        paddingLeft:16,
    }
})