/**
 *
 * DetailPageLayout Styles
 *
 */

import {StyleSheet} from 'react-native';
import {MainTheme} from 'theme';

const DetailPageLayoutStyles = StyleSheet.create({
  headerContainer: {
    paddingTop: 16,
    paddingHorizontal: 16,
    backgroundColor: MainTheme.colors.primary,
  },
  bodyContainer: {
    marginTop: 'auto',
    height: '75%',
    borderTopLeftRadius: 36,
    borderTopRightRadius: 36,
    paddingTop: 30,
    paddingHorizontal: 30,
    backgroundColor: MainTheme.colors.background,
  },
  bodyWrapper: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  spacer: {
    bottom: 30,
  },
  descriptionWrapper: {
    marginBottom: 35,
  },
  descriptionLabel: {
    color: MainTheme.colors.dateHeader,
    fontSize: 16,
    fontWeight: 'bold',
  },
  descriptionBody: {
    color: MainTheme.colors.dateHeader,
  },
  subtaskLabel: {
    color: MainTheme.colors.dateHeader,
    marginBottom: 16,
  },
  submitContainer: {
    marginTop: 30,
    paddingBottom: 30,
  },
});

export default DetailPageLayoutStyles;
