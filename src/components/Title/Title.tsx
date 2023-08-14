import React from 'react';
import {StyleProp, StyleSheet, Text, TextStyle} from 'react-native';

interface ITitleProps {
  label: string;
  subTitle?: string;
  styleProp?: StyleProp<TextStyle>;
}

export const Title = ({label, subTitle, styleProp}: ITitleProps) => {
  return (
    <>
      <Text style={[styles.title, styleProp]}>{label}</Text>
      {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  subTitle: {
    color: '#fff',
  },
});
