/**
 *
 * NavButtons
 *
 */

import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {TouchableOpacity, View} from 'react-native';

import NavButtonsStyles from './styles';

import type {PropsType} from './types';

/**
 * Renders a component with two buttons wrapped in a View.
 * The buttons are styled using the NavButtonsStyles stylesheet.
 * Optional callback functions can be provided for the left and right buttons.
 *
 * @param {Object} props - The component props.
 * @param {Function} props.onLeftPress - Callback function to be executed when the left button is pressed.
 * @param {Function} props.onRightPress - Callback function to be executed when the right button is pressed.
 * @returns {React.ReactElement} The rendered component.
 */
function NavButtons({
  onLeftPress,
  onRightPress,
}: PropsType): React.ReactElement {
  return (
    <View testID="wrapper" style={NavButtonsStyles.wrapper}>
      <TouchableOpacity testID="leftButton" onPress={onLeftPress}>
        <Icon name="chevron-left" size={18} />
      </TouchableOpacity>
      <TouchableOpacity testID="rightButton" onPress={onRightPress}>
        <Icon name="edit" size={18} />
      </TouchableOpacity>
    </View>
  );
}

export default NavButtons;
