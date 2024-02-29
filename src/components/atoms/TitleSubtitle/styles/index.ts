/**
 *
 * TitleSubtitle Styles
 *
 */

import {StyleSheet} from 'react-native';
import {MainTheme} from 'theme';

const TitleStyle = {
  fontSize: 18,
  marginTop: 30,
};

const TitleSubtitleStyles = StyleSheet.create({
  prioTitleStyle: {
    ...TitleStyle,
    fontWeight: '800',
  },
  nonPrioTitleStyle: {
    ...TitleStyle,
    fontWeight: '800',
    color: MainTheme.colors.nonPrioLabel,
  },
});

export default TitleSubtitleStyles;
