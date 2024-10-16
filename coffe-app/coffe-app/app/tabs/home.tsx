import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CustomLink } from '../../shared/CustomLink/CustomLink';

export default function Tab() {
  return (
    <View style={styles.container}>
      <Text>Tab [Catalog]</Text>
      <CustomLink href = '/catalog/id' text="id"></CustomLink>
      <CustomLink href = '/address' text="address"></CustomLink>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
