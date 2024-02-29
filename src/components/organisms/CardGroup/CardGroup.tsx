/**
 *
 * CardGroup
 *
 */

import React from 'react';
import {Text, View} from 'react-native';

import CardDetails from '@molecules/CardDetails';

import CardGroupStyles from './styles';
import type {PropsType} from './types';

/**
 * Renders a group of `CardDetails` components based on the provided `cardData` prop.
 * Handles the case when there are no tasks to display.
 *
 * @param {PropsType} props - The component props.
 * @param {Array} props.cardData - An array of objects representing the data for each card.
 * @returns A React-Native component that renders a group of CardDetails components.
 */
function CardGroup({cardData}: PropsType): React.ReactElement {
  return (
    <View testID="card-group">
      {cardData.map((value, index) => {
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
