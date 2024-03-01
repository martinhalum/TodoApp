/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';

import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import StackNavigation from './src/navigation/stack';
import useUserStore from 'providers/UserProvider/UserProvider';

const Navigation = () => {
  const initializeUser = useUserStore(state => state.initialize);

  useEffect(() => {
    initializeUser();
  }, [initializeUser]);

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
