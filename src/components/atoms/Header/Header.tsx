/**
 *
 * Header
 *
 */

import React from 'react';
import {Text, View} from 'react-native';

import HeaderStyles from './styles';

import type {PropsType} from './types';

function Header({label}: PropsType): React.ReactElement {
  return (
    <View style={HeaderStyles.container}>
      <Text style={HeaderStyles.label}>{label}</Text>
    </View>
  );
}

export default Header;
