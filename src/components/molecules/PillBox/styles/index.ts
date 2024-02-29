/**
 *
 * PillBox Styles
 *
 */

import {StyleSheet} from 'react-native';
import {MainTheme} from 'theme';

const button = {
  width: 110,
  height: 35,
  borderRadius: 8,
};

const PillBoxStyles = StyleSheet.create({
  container: {
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 8,
    backgroundColor: MainTheme.colors.nonPrioCard,
  },
  inactiveButton: {
    ...button,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeButton: {
    ...button,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: MainTheme.colors.primary,
  },
  activeLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: MainTheme.colors.activeDateLabel,
  },
  inactiveLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: MainTheme.colors.dateLabel,
  },
});

export default PillBoxStyles;
