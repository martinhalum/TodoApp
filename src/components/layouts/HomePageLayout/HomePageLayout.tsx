/**
 *
 * HomePageLayout
 *
 */

import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';

// import CalendarHeader from '@organisms/CalendarHeader';
import Header from '@atoms/Header';
import PillBox from '@molecules/PillBox';
import CardGroup from '@organisms/CardGroup';
import Footer from '@organisms/Footer';

// import useDateStore from '@providers/DateProvider';
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
function HomePageLayout({onPressAdd}: PropsType): React.ReactElement {
  const {todoTasks} = useAppStore();
  // const {currentMonth, currentDate, currentWeek, initDone, initDate} =
  //   useDateStore();

  const [filter, setFilter] = useState(DEFAULT_SELECTION);

  const handleSelectFilter = selectedItem => {
    setFilter(selectedItem);
  };

  const sortData = data => {
    return data.sort((a, b) => {
      // First, sort by 'prio' in descending order
      if (b.prio !== a.prio) {
        return b.prio - a.prio;
      } else {
        // If 'prio' is the same, sort by 'title' in ascending order
        return a.title.localeCompare(b.title);
      }
    });
  };

  // useEffect(() => {
  //   if (!initDone) {
  //     initDate();
  //   }
  // }, [initDone, initDate]);

  return (
    <View style={HomePageLayoutStyles.wrapper}>
      <ScrollView
        style={HomePageLayoutStyles.container}
        contentInset={HomePageLayoutStyles.spacer}
        showsVerticalScrollIndicator={false}>
        {/* <CalendarHeader
          testId="calendar-header"
          monthTitle={currentMonth}
          currentDate={currentDate}
          weekData={currentWeek}
        /> */}
        <Header label="FastTask" />
        <PillBox
          selectedItem={filter}
          setSelectedItem={handleSelectFilter}
          data={PILLBOX_SELECTION}
        />
        <CardGroup
          cardData={sortData(todoTasks)}
          filter={filter.value}
          showLength
        />
      </ScrollView>
      <Footer onPressAdd={onPressAdd} />
    </View>
  );
}

export default HomePageLayout;
