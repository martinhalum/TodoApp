/**
 *
 * CalendarHeader
 *
 */

import React from 'react';
import {Text, View} from 'react-native';

import CalendarItem from '@molecules/CalendarItem';

import {DEFAULT_DATE, DEFAULT_MONTH, DEFAULT_WEEK} from './config';

import CalendarHeaderStyles from './styles';

import type {PropsType} from './types';

/**
 * Renders a header for a calendar with the month title and a row of calendar items representing each day of the week.
 *
 * @component
 * @example
 * <CalendarHeader
 *   monthTitle="September"
 *   weekData={[
 *     { dayLabel: 'Sun', dateLabel: '17' },
 *     { dayLabel: 'Mon', dateLabel: '18' },
 *     { dayLabel: 'Tue', dateLabel: '19' },
 *     { dayLabel: 'Wed', dateLabel: '20' },
 *     { dayLabel: 'Thu', dateLabel: '21' },
 *     { dayLabel: 'Fri', dateLabel: '22' },
 *     { dayLabel: 'Sun', dateLabel: '23' },
 *   ]}
 *   currentDate="19"
 * />
 */
function CalendarHeader({
  testId,
  monthTitle,
  weekData,
  currentDate,
}: PropsType): React.ReactElement {
  return (
    <View testID={testId} style={CalendarHeaderStyles.Container}>
      <Text style={CalendarHeaderStyles.HeadingLabel}>{monthTitle}</Text>
      <View style={CalendarHeaderStyles.ItemContainer}>
        {weekData.map((value, index) => {
          const {dayLabel, dateLabel} = value;

          return (
            <CalendarItem
              key={index.toString()}
              dayLabel={dayLabel}
              dateLabel={dateLabel}
              isCurrent={dateLabel === currentDate}
            />
          );
        })}
      </View>
    </View>
  );
}

/**
 * The title of the month to be displayed in the header. Defaults to 'September'.
 */
CalendarHeader.defaultProps = {
  monthTitle: DEFAULT_MONTH,
  weekData: DEFAULT_WEEK,
  currentDate: DEFAULT_DATE,
};

export default CalendarHeader;
