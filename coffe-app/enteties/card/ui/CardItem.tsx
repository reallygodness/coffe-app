/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

import { BlurView } from 'expo-blur';
import { Card } from '../model/card.model';
import StarIcon from '../../../assets/icons/starIcon';
import { Colors, Fonts } from '../../../shared/tokens';

export default function CardItem({ name, subTitle, price, image, rating }: Card) {
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.image} source={{ uri: image }} />
        <BlurView intensity={5} style={styles.ratingContainer}>
          <StarIcon />
          <Text style={styles.ratingText}>{rating}</Text>
        </BlurView>
      </View>

      <View style={styles.wrapper}>
        <View>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.description}>{subTitle}</Text>
        </View>
        <View style={styles.priceWrapper}>
          <View>
            <Text style={styles.price}>{price} ₽</Text>
          </View>
          <Pressable style={styles.button}>
            <Text style={styles.textButton}>+</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    minHeight: 239,
    borderRadius: 16,
    backgroundColor: Colors.white,
    padding: 4,
    maxWidth: 150,
    marginBottom: 13,
    marginHorizontal: 8,
  },
  ratingContainer: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    gap: 3,
    backgroundColor: Colors.raitingBG,
    width: 51,
    height: 25,
    borderTopLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  ratingText: {
    fontSize: 10,
    fontFamily: Fonts.SoraRegular,
    color: Colors.white,
  },
  image: {
    width: 141,
    height: 132,
    borderRadius: 16,
    resizeMode: 'contain',
  },
  wrapper: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingVertical: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.darkText,
    fontFamily: Fonts.SoraSemiBold,
  },
  description: {
    fontSize: 12,
    fontWeight: '400',
    fontStyle: 'normal',
    color: Colors.lightText,
  },
  priceWrapper: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  price: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.accentGreen,
    fontFamily: Fonts.SoraSemiBold,
  },
  button: {
    backgroundColor: Colors.accentBrown,
    width: 32,
    height: 32,
    borderRadius: 10,
    justifyContent: 'center',
  },
  textButton: {
    color: Colors.white,
    textAlign: 'center',
  },
});
