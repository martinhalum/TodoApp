/**
 *
 * CalendarHeader Styles
 *
 */

import {StyleSheet} from 'react-native';
import {MainTheme} from 'theme';

const CalendarHeaderStyles = StyleSheet.create({
  Container: {
    marginHorizontal: 12,
    marginTop: 22,
    marginBottom: 24,
  },
  HeadingLabel: {
    fontWeight: '600',
    fontSize: 24,
    color: MainTheme.colors.dateHeader,
    marginLeft: 7,
    marginBottom: 7,
  },
  ItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default CalendarHeaderStyles;
