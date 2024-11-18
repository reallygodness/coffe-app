import React from 'react';

import { Pressable, Text, StyleSheet } from 'react-native';
import EditIcon from '../../assets/icons/EditIcon';
import { Colors, Fonts } from '../tokens';


export default function AddressLine() {
  return (
    <>
      <Text style={styles.text}>Адрес</Text>
      <Pressable style={styles.container}>
        <Text style={styles.textAddress}>Москва, Новослободская 23</Text>
        <EditIcon />
      </Pressable>
    </>
  );
}
const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    fontWeight: '400',
    fontStyle: 'normal',
    letterSpacing: 1,
    color: Colors.textGray,
    fontFamily: Fonts.SoraRegular,
    marginBottom: 4,
  },
  textAddress: {
    fontSize: 14,
    fontStyle: 'normal',
    color: Colors.textGray,
    fontFamily: Fonts.SoraSemiBold,
  },
  container: {
    flexDirection: 'row',
    marginBottom: 28,
    gap: 4,
    alignItems: 'center',
  },
});
