/**
 *
 * TitleSubtitle
 *
 */

import React from 'react';
import {Text, View} from 'react-native';

import IconLabel from '@atoms/IconLabel';

import TitleSubtitleStyles from './styles';

import type {PropsType} from './types';

/**
 * Renders a title and an optional subtitle.
 * Applies different styles based on the `whiteFont` prop.
 * Conditionally renders the `IconLabel` component based on the presence of a subtitle.
 *
 * @param title - The string to be displayed on the title.
 * @param subtitle - The string to be displayed on the subtitle.
 * @param whiteFont -Determines the text color of the Texts.
 * @param showIcon - Determines wether to show or hide the subtitleIcon
 * @returns A React element representing the priority marker component.
 */
function TitleSubtitle({
  title,
  subtitle,
  whiteFont,
  showIcon,
}: PropsType): React.ReactElement {
  return (
    <View>
      <Text
        style={
          whiteFont
            ? TitleSubtitleStyles.nonPrioTitleStyle
            : TitleSubtitleStyles.prioTitleStyle
        }>
        {title}
      </Text>
      {subtitle !== undefined && (
        <IconLabel
          subtitle={subtitle}
          showIcon={showIcon}
          whiteFont={whiteFont}
        />
      )}
    </View>
  );
}

export default TitleSubtitle;
