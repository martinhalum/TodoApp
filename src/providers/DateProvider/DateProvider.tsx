/**
 * Zustand store hook for managing the calendar state.
 *
 * @returns The Zustand store object.
 *
 */
import {create} from 'zustand';
import {format, getDate, startOfISOWeek} from 'date-fns';

import {DateTypes} from './types';
import {WeekType} from '@organisms/CalendarHeader/types';

import {DAY_NAME, DEFAULT_WEEK} from './config';

const useDateStore = create<DateTypes>()(set => ({
  currentDate: '',
  currentMonth: '',
  currentWeek: DEFAULT_WEEK,
  initDone: false,
  initDate: () => {
    const nowDate = new Date();
    const date = getDate(nowDate);
    const monthName = format(nowDate, 'MMMM');
    const startOfWeek = startOfISOWeek(nowDate).getDate() - 1;
    const weekData: WeekType[] = [];

    for (let ctr = 0; ctr < 7; ctr++) {
      weekData.push({
        dayLabel: DAY_NAME[ctr],
        dateLabel: (startOfWeek + ctr).toString(),
      });
    }

    set({currentDate: date.toString()});
    set({currentMonth: monthName});
    set({currentWeek: weekData});
    set({initDone: true});
  },
}));

export default useDateStore;
