/**
 *
 * HomePageLayout Styles
 *
 */

import {StyleSheet} from 'react-native';

import {MainTheme} from 'theme';

const HomePageLayoutStyles = StyleSheet.create({
  wrapper: {
    height: '100%',
  },
  container: {
    paddingHorizontal: 22,
    paddingBottom: 150,
    backgroundColor: MainTheme.colors.background,
    zIndex: 0,
  },
  spacer: {
    bottom: 100,
  },
});

export default HomePageLayoutStyles;
