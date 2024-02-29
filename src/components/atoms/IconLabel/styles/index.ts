/**
 *
 * IconLabel Styles
 *
 */

import {StyleSheet} from 'react-native';
import {MainTheme} from 'theme';

const subtitle = {
  marginLeft: 4,
  fontSize: 12,
};

const IconLabelStyles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    marginTop: 16,
    alignItems: 'center',
  },
  subtitle: {
    ...subtitle,
  },
  nonPrioSub: {
    ...subtitle,
    color: MainTheme.colors.nonPrioLabel,
  },
});

export default IconLabelStyles;
