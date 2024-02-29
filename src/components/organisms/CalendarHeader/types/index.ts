/**
 *
 * CalendarHeader Types
 *
 */

export type WeekType = {
  dayLabel: String;
  dateLabel: String;
};

export type PropsType = {
  testId?: string;
  monthTitle: String;
  weekData: WeekType[];
  currentDate: String;
};
