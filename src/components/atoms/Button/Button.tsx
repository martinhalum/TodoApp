/**
 *
 * Button
 *
 */

import React from 'react';

import FilledButton from './FilledButton';

import type {PropsType} from './types';
import OutlinedButton from './OutlinedButton';

/**
 * Renders a button based on the provided props.
 *
 * @param label - The text to be displayed on the button.
 * @param leftAlign - Determines if the button's content should be left-aligned. Defaults to `false`.
 * @param leftIcon - The name of the icon to be displayed on the left side of the button.
 * @param rightIcon - The name of the icon to be displayed on the right side of the button.
 * @param type - The type of the button. Defaults to 'primary'.
 * @param customColor - The custom background color of the button.
 * @param textColor - The color of the button's text.
 * @param disabled - Determines if the button should be disabled. Defaults to `false`.
 * @param onPress - The function to be called when the button is pressed.
 * @returns A React element representing a button component based on the provided props.
 */

function Button({
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
  switch (type) {
    case 'outlined':
    case 'submit':
      return (
        <OutlinedButton
          label={label}
          leftAlign={leftAlign}
          leftIcon={leftIcon}
          rightIcon={rightIcon}
          type={type}
          onPress={onPress}
          customColor={customColor}
          textColor={textColor}
          disabled={disabled}
        />
      );
    default:
      return (
        <FilledButton
          label={label}
          leftAlign={leftAlign}
          leftIcon={leftIcon}
          rightIcon={rightIcon}
          type={type}
          onPress={onPress}
          customColor={customColor}
          textColor={textColor}
          disabled={disabled}
        />
      );
  }
}

export default Button;
