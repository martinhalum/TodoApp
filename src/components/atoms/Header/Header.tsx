/**
 *
 * Header
 *
 */

import React from 'react';
import {Text, View} from 'react-native';

import HeaderStyles from './styles';

import type {PropsType} from './types';
/**
 * Renders a header component with a label.
 *
 * @param {PropsType} props - The props for the header component.
 * @param {string} props.label - The label to be displayed in the header.
 * @returns {React.ReactElement} The rendered header component.
 */
function Header({label}: PropsType): React.ReactElement {
  return (
    <View style={HeaderStyles.container}>
      <Text style={HeaderStyles.label}>{label}</Text>
    </View>
  );
}

export default Header;
