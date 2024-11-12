/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, Image, Animated, Pressable } from 'react-native';
import { Colors, Fonts } from '../shared/tokens';
import { Button } from '../shared/Button/Button';
import React from 'react';
import { CustomLink } from '../shared/CustomLink/CustomLink';

export default function App() {
	const animatedValue = new Animated.ValueXY({
		x: 0,
		y: -100,
	});

	Animated.timing(animatedValue, {
		toValue: {
			x: 0,
			y: 5,
		},
		duration: 2000,
		useNativeDriver: true,
	}).start();


	return (
		<View style={styles.container}>
			<Image
				style={styles.image}
				// eslint-disable-next-line @typescript-eslint/no-require-imports
				source={require('../assets/Coffee-logo.png')}
				resizeMode="contain"
			/>
			<Animated.View style={styles.content}>
				<Animated.Text
					style={{
						...styles.Maintextstyle,
						transform: [{ translateX: animatedValue.x }, { translateY: animatedValue.y }],
					}}
				>
					Одно из самых вкусных кофе в городе!
				</Animated.Text>
				<Text style={styles.Undertextstyle}>
					Свежие зёрна, настоящая арабика и бережная обжарка
				</Text>		
				<CustomLink href = '/home' text = "Начать" asChild>
				</CustomLink>
			</Animated.View>
		</View>
	);
}

const styles = StyleSheet.create({
	// eslint-disable-next-line react-native/no-color-literals
	container: {
		backgroundColor: 'black',
		justifyContent: 'flex-end',
		alignItems: 'center',
		flex: 1,
		padding: 50,
	},
	content: {
		gap: 10,
	},

	Maintextstyle: {
		color: Colors.white,
		fontSize: Fonts.f34,
		textAlign: 'center',
		fontWeight: '600',
		fontFamily: Fonts.SoraSemiBold
	},
	Undertextstyle: {
		color: Colors.gray,
		fontSize: Fonts.f14,
		textAlign: 'center',
		padding: 5,
		fontFamily: Fonts.SoraRegular
	},

	image: {
		height: 600,
		width: 468,
	},

});
