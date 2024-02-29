/**
 *
 * Button
 *
 */

import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import ButtonStyles from './styles';
import type {PropsType} from './types';
import {MainTheme} from 'theme';

/**
 * Renders a button with customizable styles and functionality.
 *
 * @param label - The text to be displayed on the button.
 * @param leftAlign - Determines if the button's icon should be aligned to the left. Defaults to `false`.
 * @param leftIcon - The name of the icon to be displayed on the left side of the button.
 * @param rightIcon - The name of the icon to be displayed on the right side of the button.
 * @param type - Determines the style of the button. Defaults to 'primary'.
 * @param customColor - Overrides the default background color of the button.
 * @param textColor - Overrides the default text color of the button.
 * @param disabled - Determines if the button is disabled. Defaults to `false`.
 * @param onPress - The function to be called when the button is pressed.
 *
 * @returns The rendered button component.
 */
function FilledButton({
  label,
  leftAlign,
  leftIcon,
  rightIcon,
  type,
  customColor,
  textColor,
  disabled,
  onPress,
}: PropsType): React.ReactElement {
  const backgroundColor =
    leftIcon !== undefined ? MainTheme.colors.primary : 'transparent';

  const containerStyle =
    type === 'primary'
      ? ButtonStyles.primaryContainer
      : ButtonStyles.secondaryContainer;
  return (
    <TouchableOpacity
      role="button"
      style={
        customColor === undefined
          ? containerStyle
          : {...containerStyle, backgroundColor: customColor}
      }
      onPress={onPress}
      disabled={disabled}>
      {!leftAlign && (
        <View
          style={[
            ButtonStyles.iconContainer,
            {backgroundColor: backgroundColor},
          ]}>
          {leftIcon && <Icon name={leftIcon} style={{color: 'white'}} />}
        </View>
      )}
      <Text role="heading" style={{color: textColor}}>
        {label}
      </Text>
      <View style={ButtonStyles.iconContainer}>
        {rightIcon && (
          <Icon name={rightIcon} size={15} style={{color: textColor}} />
        )}
      </View>
    </TouchableOpacity>
  );
}

export default FilledButton;
