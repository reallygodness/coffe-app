import {
	Pressable,
	PressableProps,
	Text,
	StyleSheet,
	Animated,
	GestureResponderEvent,
} from 'react-native';
import { Colors, Fonts, Radius } from '../tokens';
import React from 'react';

export function Button({ text, ...props }: PressableProps & { text: string }) {
	const animatedValue = new Animated.Value(100);
	const color = animatedValue.interpolate({
		inputRange: [0, 100],
		outputRange: [Colors.hoverOrange, Colors.Worange],
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

	return (
		<Pressable {...props} onPressIn={fadeIn} onPressOut={fadeOut}>
			<Animated.View style={{ ...Styles.button, backgroundColor: color }}>
				<Text style={Styles.text}>{text}</Text>
			</Animated.View>
		</Pressable>
	);
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
	},
});
