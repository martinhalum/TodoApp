/**
 *
 * Card Styles
 *
 */

import {StyleSheet} from 'react-native';
import {MainTheme} from 'theme';

const Container = {
  borderRadius: 16,
  paddingTop: 17,
  paddingBottom: 42,
  paddingHorizontal: 16,
  minHeight: 168,
};

const CardStyles = StyleSheet.create({
  prioContainer: {
    ...Container,
    backgroundColor: MainTheme.colors.primary,
  },
  nonPrioContainer: {
    ...Container,
    backgroundColor: MainTheme.colors.nonPrioCard,
  },
});

export default CardStyles;
