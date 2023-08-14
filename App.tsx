/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Home} from './src/pages/Home';
import {StatusBar} from 'react-native';

function App(): JSX.Element {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Home />
    </>
  );
}

export default App;
