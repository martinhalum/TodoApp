/**
 *
 * CalendarItem Styles
 *
 */

import {StyleSheet} from 'react-native';
import {MainTheme} from 'theme';

const CalendarItemStyles = StyleSheet.create({
  currentContainerStyle: {
    height: 65,
    width: 40,
    backgroundColor: MainTheme.colors.activeDate,
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  containerStyle: {
    height: 65,
    width: 40,
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  currentDayLabelStyle: {
    color: MainTheme.colors.activeDateLabel,
    fontSize: 12,
    fontWeight: '400',
    textAlign: 'center',
  },
  currentDateLabelStyle: {
    color: MainTheme.colors.activeDateLabel,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  dayLabelStyle: {
    color: MainTheme.colors.dateLabel,
    fontSize: 12,
    fontWeight: '400',
    textAlign: 'center',
  },
  dateLabelStyle: {
    color: MainTheme.colors.dateLabel,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CalendarItemStyles;
