/**
 *
 * CardGroup
 *
 */

import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';

import CardDetails from '@molecules/CardDetails';

import CardGroupStyles from './styles';
import type {PropsType, TodoType} from './types';

/**
 * Renders a group of `CardDetails` components based on the provided `cardData` prop.
 * Handles the case when there are no tasks to display.
 *
 * @param {PropsType} props - The component props.
 * @param {Array} props.cardData - An array of objects representing the data for each card.
 * @returns A React-Native component that renders a group of CardDetails components.
 */
function CardGroup({
  cardData,
  filter,
  showLength,
}: PropsType): React.ReactElement {
  const [filteredData, setFilteredData] = useState(cardData);

  useEffect(() => {
    const newData: TodoType[] = [];
    if (filter === 'all') {
      setFilteredData(cardData);
    } else if (filter === 'ongoing') {
      cardData.forEach(value => {
        if (value.prio !== 0) {
          newData.push(value);
        }
      });
      setFilteredData(newData);
    } else {
      cardData.forEach(value => {
        if (value.prio === 0) {
          newData.push(value);
        }
      });
      setFilteredData(newData);
    }
  }, [cardData, filter]);

  return (
    <View testID="card-group">
      {showLength && (
        <View style={CardGroupStyles.totalContainer}>
          <Text style={CardGroupStyles.totalLabel}>
            Total: {filteredData.length}
          </Text>
        </View>
      )}
      {filteredData.map((value, index) => {
        return (
          <View key={index.toString()} style={CardGroupStyles.wrapper}>
            <CardDetails todoData={value} />
          </View>
        );
      })}
      {cardData.length === 0 && (
        <View style={CardGroupStyles.emptyContainer}>
          <Text style={CardGroupStyles.emptyLabel}>No Tasks Yet</Text>
        </View>
      )}
    </View>
  );
}

export default CardGroup;
