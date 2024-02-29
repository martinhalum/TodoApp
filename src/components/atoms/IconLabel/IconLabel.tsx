/**
 *
 * IconLabel
 *
 */

import React from 'react';
import {Appearance, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import IconLabelStyles from './styles';
import type {PropsType} from './types';

/**
 * Renders a label with an optional icon. Customizes the appearance of the label and icon based on the provided props.
 *
 * @param {PropsType} props - The props for the IconLabel component.
 * @returns {React.ReactElement} The rendered IconLabel component.
 */
function IconLabel(props: PropsType): React.ReactElement {
  const {showIcon, subtitle, whiteFont, pillColor} = props;
  const isDark = Appearance.getColorScheme() === 'dark';

  return (
    <View style={IconLabelStyles.wrapper}>
      {showIcon && (
        <Icon
          name="calendar"
          size={12}
          color={whiteFont && isDark ? 'white' : undefined}
        />
      )}
      <Text
        style={[
          whiteFont ? IconLabelStyles.nonPrioSub : IconLabelStyles.subtitle,
          {backgroundColor: pillColor},
        ]}>
        {subtitle}
      </Text>
    </View>
  );
}

/**
 * The default props for the IconLabel component.
 */
IconLabel.defaultProps = {
  showIcon: true,
  subtitle: '',
};

export default IconLabel;
