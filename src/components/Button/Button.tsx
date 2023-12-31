import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

interface IButtonProps {
  children: string;
  onPress: () => void;
}

export const Button = ({onPress, children}: IButtonProps) => (
  <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={onPress}>
    <Text style={styles.buttonText}>{children}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#A370F7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
