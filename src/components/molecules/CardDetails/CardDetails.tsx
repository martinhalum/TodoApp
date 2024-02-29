/**
 *
 * CardDetails
 *
 */

import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import Card from '@atoms/Card';
import TitleSubtitle from '@atoms/TitleSubtitle';
import PriorityMarker from '@atoms/PriorityMarker';

import useAppStore from 'providers/AppProvider';

import {StackParamList} from '@navigation/stack/types';

import {SUBTITLE, TITLE} from './config';

import type {PropsType} from './types';

/**
 * Represents a card with details of a todo task.
 * Displays the priority marker, title, subtitle, and an optional icon.
 * Handles navigation to the detail page when the card is pressed.
 *
 * @param {Object} props - The component props.
 * @param {todoData} props.todoData - An object that contains the to-do list to be displayed.
 *
 * @returns A React-Native element that represents the rendered `CardDetails` component
 */
function CardDetails({todoData}: PropsType): React.ReactElement {
  const navigation = useNavigation<StackNavigationProp<StackParamList>>();
  const {setSelectedItem} = useAppStore();
  const {title, dateDue, prio} = todoData;
  const isDone = prio === 'Done';

  /**
   * Handles the onPress event of the card.
   * Sets the selected item and navigates to the detail page.
   */
  const onPressHandler = () => {
    setSelectedItem(todoData);
    navigation.navigate('DetailPage');
  };

  return (
    <Card isPrio={!isDone} onPress={onPressHandler}>
      <PriorityMarker label={prio} isPrio={!isDone} />
      <TitleSubtitle
        title={title}
        subtitle={dateDue}
        whiteFont={isDone}
        showIcon
      />
    </Card>
  );
}

CardDetails.defaultProps = {
  title: TITLE,
  subtitle: SUBTITLE,
};

export default CardDetails;
