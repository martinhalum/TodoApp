/*
 * Defines the MainTheme constant based on the device's appearance.
 */

import {Appearance} from 'react-native';

import {LightTheme} from './light';
import {DarkTheme} from './dark';

const isDark = Appearance.getColorScheme() === 'dark';

export const MainTheme = {
  dark: isDark ? DarkTheme.dark : LightTheme.dark,
  colors: isDark ? DarkTheme.colors : LightTheme.colors,
};
