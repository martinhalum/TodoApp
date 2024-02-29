/**
 *
 * Footer
 *
 */

import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconFa5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';

import FooterStyles from './styles';

import type {PropsType} from './types';

/**
 * Renders a footer view with icons.
 *
 * @component
 *
 * @param {Object} props - The component props.
 * @param {Function} props.onPressAdd - A function to be called when the add button is pressed.
 *
 * @returns A React-Native element representing the footer view with icons.
 */
function Footer({onPressAdd}: PropsType): React.ReactElement {
  return (
    <View style={FooterStyles.container}>
      <IconFa5 name="home" size={24} style={FooterStyles.icon} />
      <Icon name="folder-o" size={26} style={FooterStyles.icon} />
      <TouchableOpacity
        testID="Add"
        style={FooterStyles.addContainer}
        onPress={onPressAdd}>
        <IconFa5 name="plus" size={20} style={FooterStyles.addIcon} />
      </TouchableOpacity>
      <Icon name="comment-o" size={26} style={FooterStyles.icon} />
      <Ionicons name="person-outline" size={26} style={FooterStyles.icon} />
    </View>
  );
}

export default Footer;
