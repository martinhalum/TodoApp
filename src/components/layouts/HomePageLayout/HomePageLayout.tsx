/**
 *
 * HomePageLayout
 *
 */

import React, {useEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';

import CalendarHeader from '@organisms/CalendarHeader';
import CardGroup from '@organisms/CardGroup';
import PillBox from '@molecules/PillBox';
import Footer from '@organisms/Footer';

import useDateStore from '@providers/DateProvider';
import useAppStore from 'providers/AppProvider';

import HomePageLayoutStyles from './styles';
import type {PropsType} from './types';
import {PILLBOX_SELECTION, DEFAULT_SELECTION} from './config';

/**
 * Renders the layout for the home page of an application.
 *
 * @param onPressAdd - Function that handles the action when the add button in the footer is pressed.
 * @returns A React-Native element representing the layout of the home page.
 */
function HomePageLayout({
  onPressAdd,
  todoTasksData,
}: PropsType): React.ReactElement {
  const [sort, setSort] = useState(DEFAULT_SELECTION);
  const {currentMonth, currentDate, currentWeek, initDone, initDate} =
    useDateStore();
  const {todoTasks} = useAppStore();

  const handleSelectSort = selectedItem => {
    setSort(selectedItem);
  };

  useEffect(() => {
    if (!initDone) {
      initDate();
    }
  }, [initDone, initDate]);

  return (
    <View style={HomePageLayoutStyles.wrapper}>
      <ScrollView
        style={HomePageLayoutStyles.container}
        contentInset={HomePageLayoutStyles.spacer}
        showsVerticalScrollIndicator={false}>
        <CalendarHeader
          testId="calendar-header"
          monthTitle={currentMonth}
          currentDate={currentDate}
          weekData={currentWeek}
        />
        <PillBox
          selectedItem={sort}
          setSelectedItem={handleSelectSort}
          data={PILLBOX_SELECTION}
        />
        <CardGroup cardData={todoTasksData || todoTasks} />
      </ScrollView>
      <Footer onPressAdd={onPressAdd} />
    </View>
  );
}

export default HomePageLayout;
