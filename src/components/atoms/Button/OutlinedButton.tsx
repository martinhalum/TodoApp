/**
 *
 * Button
 *
 */

import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import ButtonStyles from './styles';

import type {PropsType} from './types';

/**
 * Renders a button with different styles based on the `type` prop.
 *
 * @param label - The text to be displayed on the button.
 * @param type - The style type of the button. It can be one of the following: 'primary', 'secondary', 'outlined', or 'submit'.
 * @param onPress - The callback function to be executed when the button is pressed.
 * @param disabled - Determines if the button is disabled or not.
 *
 * @returns The rendered button component.
 */
function OutlinedButton({
  label,
  type,
  onPress,
  disabled,
}: PropsType): React.ReactElement {
  return (
    <TouchableOpacity
      style={
        type === 'outlined'
          ? ButtonStyles.outlinedContainer
          : ButtonStyles.submitContainer
      }
      onPress={onPress}
      disabled={disabled}>
      <Text
        style={
          type === 'outlined'
            ? ButtonStyles.outlinedLabel
            : ButtonStyles.submitLabel
        }>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

export default OutlinedButton;
