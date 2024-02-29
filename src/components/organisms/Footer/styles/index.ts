/**
 *
 * Footer Styles
 *
 */

import {StyleSheet} from 'react-native';
import {MainTheme} from 'theme';

const FooterStyles = StyleSheet.create({
  container: {
    backgroundColor: MainTheme.colors.background,
    maxHeight: 60,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    shadowColor: 'black',
    shadowOpacity: 0.3,
    elevation: 15,
    zIndex: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  icon: {
    color: MainTheme.colors.icon,
  },
  addContainer: {
    backgroundColor: MainTheme.colors.addBg,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  addIcon: {
    color: MainTheme.colors.addIcon,
  },
});

export default FooterStyles;
