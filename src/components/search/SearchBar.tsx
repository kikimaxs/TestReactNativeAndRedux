import React from 'react';
import { View, TextInput } from 'react-native';
import styles from './styles';
import { Props } from './type';



export default function SearchBar({ value, onChange, placeholder }: Props) {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
        style={styles.input}
        clearButtonMode="while-editing"
      />
    </View>
  );
}