import {WeekType} from '@organisms/CalendarHeader/types';

export type DateTypes = {
  currentDate: string;
  currentMonth: string;
  currentWeek: WeekType[];
  initDone: boolean;
  initDate: () => void;
};
