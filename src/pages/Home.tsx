import React, {useEffect, useState} from 'react';
import {Platform, View, StyleSheet, TextInput, FlatList} from 'react-native';
import {Button, CardSkill, Title} from '../components';
import {debounce} from '../helper';

export const Home = () => {
  const [newSkill, setNewSkill] = useState<string>('');
  const [mySkills, setMySkills] = useState<string[]>([]);
  const [greeting, setGreeting] = useState('');

  const handleAddSkill = () => {
    setMySkills(prevMySkills => [...prevMySkills, newSkill]);
  };

  const handleOnChange = debounce(1000, (param: string) => {
    setNewSkill(param);
  });

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      setGreeting('Good morning');
      return;
    }

    if (currentHour >= 12 && currentHour < 18) {
      setGreeting('Good afternoon');
      return;
    }

    setGreeting('Good night');
  }, []);

  return (
    <View style={styles.container}>
      <Title label="Welcome, Nath" subTitle={greeting} />

      <TextInput
        placeholder="New skill"
        style={styles.input}
        onChangeText={text => {
          handleOnChange(text);
        }}
        placeholderTextColor="#ccc"
      />

      <Button onPress={handleAddSkill}>Add</Button>

      <Title label="My skill" styleProp={{marginTop: 50, marginBottom: 10}} />

      <FlatList
        data={mySkills}
        keyExtractor={(item, index) => `${item}-${index}`}
        renderItem={({item}) => <CardSkill skill={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#414141',
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 70,
  },
  input: {
    backgroundColor: '#1F1E25',
    color: '#fff',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7,
  },
});
