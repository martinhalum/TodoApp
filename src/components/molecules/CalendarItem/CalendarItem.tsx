/**
 *
 * CalendarItem
 *
 */

import React from 'react';
import {Text, View} from 'react-native';

import CalendarItemStyles from './styles';

import type {PropsType} from './types';

/**
 * Renders a view with two text components for displaying the day and date labels.
 * The component applies different styles based on the value of `isCurrent`.
 *
 * @param {Object} props - The component props.
 * @param {string} props.dayLabel - The label for the day.
 * @param {string} props.dateLabel - The label for the date.
 * @param {boolean} props.isCurrent - Indicates if the calendar item is the current item.
 *
 * @returns A React-Native element representing the rendered `CalendarItem` component.
 */
function CalendarItem({
  dayLabel,
  dateLabel,
  isCurrent,
}: PropsType): React.ReactElement {
  return (
    <View
      style={
        isCurrent
          ? CalendarItemStyles.currentContainerStyle
          : CalendarItemStyles.containerStyle
      }>
      <Text
        style={
          isCurrent
            ? CalendarItemStyles.currentDayLabelStyle
            : CalendarItemStyles.dayLabelStyle
        }>
        {dayLabel}
      </Text>
      <Text
        style={
          isCurrent
            ? CalendarItemStyles.currentDateLabelStyle
            : CalendarItemStyles.dateLabelStyle
        }>
        {dateLabel}
      </Text>
    </View>
  );
}

export default CalendarItem;
