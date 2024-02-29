/**
 *
 * Button Styles
 *
 */

import {StyleSheet} from 'react-native';
import {MainTheme} from 'theme';

const container = {
  padding: 14,
  borderRadius: 8,
  minHeight: 52,
};

const ButtonStyles = StyleSheet.create({
  primaryContainer: {
    ...container,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: MainTheme.colors.primary,
  },
  secondaryContainer: {
    ...container,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: MainTheme.colors.secondary,
  },
  outlinedContainer: {
    ...container,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'transparent',
    borderWidth: 0.5,
    borderColor: MainTheme.colors.buttonBorder,
  },
  outlinedLabel: {
    color: MainTheme.colors.buttonBorderText,
  },
  submitContainer: {
    ...container,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: MainTheme.colors.submitBackground,
  },
  submitLabel: {
    color: MainTheme.colors.submitLabel,
    fontSize: 18,
    fontWeight: '600',
  },
  iconContainer: {
    borderRadius: 15,
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ButtonStyles;
