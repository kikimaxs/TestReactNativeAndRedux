import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import { HeaderProps } from './type';

export default function Header({ left, center, right }: HeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.left}>{left}</View>
      <View style={styles.center}>{center}</View>
      <View style={styles.right}>{right}</View>
    </View>
  );
}