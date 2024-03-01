/**
 *
 * CardGroup Styles
 *
 */

import {StyleSheet} from 'react-native';
import {MainTheme} from 'theme';

const CardGroupStyles = StyleSheet.create({
  emptyContainer: {
    alignItems: 'center',
  },
  wrapper: {
    marginTop: 20,
  },
  emptyLabel: {
    color: MainTheme.colors.buttonBorder,
    fontWeight: '600',
  },
  totalContainer: {
    marginTop: 10,
    width: '100%',
    alignItems: 'flex-end',
  },
  totalLabel: {
    fontWeight: '600',
  },
});

export default CardGroupStyles;
