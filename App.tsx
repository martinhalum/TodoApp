/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import StackNavigation from './src/navigation/stack';

const Navigation = () => {
  return (
    <NavigationContainer>
      <StatusBar />
      <StackNavigation />
    </NavigationContainer>
  );
};

function App() {
  return <Navigation />;
}

export default App;
