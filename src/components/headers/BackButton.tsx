import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';

type BackButtonProps = { onPress: () => void };

export default function BackButton({ onPress }: BackButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.backButton}>
      <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>Back</Text>
    </TouchableOpacity>
  );
}