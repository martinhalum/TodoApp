import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomePage from '@pages/HomePage';
import DetailPage from '@pages/DetailPage';

const Stack = createStackNavigator();

/**
 * Returns a StackNavigator component from the @react-navigation/stack library.
 * The StackNavigator component is configured with two screens: HomePage and DetailPage.
 * The function also sets some screen options for the StackNavigator component.
 *
 * @returns The StackNavigator component.
 *
 *
 */
const StackNavigation = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      gestureEnabled: false,
    }}>
    <Stack.Screen name="HomePage" component={HomePage} />
    <Stack.Screen name="DetailPage" component={DetailPage} />
  </Stack.Navigator>
);

export default StackNavigation;
