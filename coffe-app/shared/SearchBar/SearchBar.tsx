import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { Colors, Fonts } from '../tokens';

const TextInputExample = () => {
  const [text, onChangeText] = React.useState('');

  return (
    <SafeAreaProvider>
      <SafeAreaView style = {styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder='Найти кофе'
          placeholderTextColor={Colors.white}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 52,
    width: 315,
    margin: 20,
    borderWidth: 0,
    padding: 10,
    fontSize: Fonts.f14,
    borderRadius: 12,
    backgroundColor: Colors.searchColor,
  },

  container: {
    alignItems: 'center'
  }
});

export default TextInputExample;