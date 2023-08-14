import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

interface ICardSkillProps {
  skill: string;
}

export const CardSkill = ({skill}: ICardSkillProps) => {
  return (
    <TouchableOpacity style={styles.buttonSkill}>
      <Text style={styles.textSkill}>{skill}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: '#1F1E25',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginVertical: 10,
  },
  textSkill: {
    color: '#fff',
    fontSize: 18,
  },
});
