/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Pressable, Text, StyleSheet, Animated, PressableProps } from 'react-native';
import { Colors } from '../tokens';

export function Button({
  text,
  onPress,
  style,
  ...props
}: PressableProps & { text: string; onPress: () => void }) {
  const animatedValue = new Animated.Value(100);
  const bgColor = animatedValue.interpolate({
    inputRange: [0, 100],
    outputRange: [Colors.accentBrownHover, Colors.accentBrown],
  });
  const onPressButtonIn = () => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };
  const onPressButtonOut = () => {
    Animated.timing(animatedValue, {
      toValue: 100,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };
  return (
    <Pressable
      onPressIn={onPressButtonIn}
      onPressOut={onPressButtonOut}
      onPress={onPress}
      style={style}
      {...props}
    >
      <Animated.View style={{ ...styles.container, backgroundColor: bgColor }}>
        <Text style={styles.text}>{text}</Text>
      </Animated.View>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 62,
    borderRadius: 16,
  },
  text: {
    color: Colors.white,
    fontSize: 16,
    fontStyle: 'normal',
    textAlign: 'center',
    fontFamily: 'Sora-SemiBold',
  },
});
