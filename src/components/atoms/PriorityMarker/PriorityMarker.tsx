/**
 *
 * PriorityMarker
 *
 */

import React from 'react';
import {Text, View} from 'react-native';

import PriorityMarkerStyles from './styles';
import type {PropsType} from './types';

/**
 * Renders a priority marker with a label.
 *
 * @param label - The label to be displayed on the priority marker.
 * @param isPrio - Determines the background color and text color of the priority marker.
 * @returns A React element representing the priority marker component.
 */
function PriorityMarker({label, isPrio}: PropsType): React.ReactElement {
  return (
    <View
      style={
        isPrio
          ? PriorityMarkerStyles.prioWrapper
          : PriorityMarkerStyles.nonPrioWrapper
      }>
      <Text
        style={
          isPrio
            ? PriorityMarkerStyles.label
            : PriorityMarkerStyles.nonPrioLabel
        }>
        {label}
      </Text>
    </View>
  );
}

export default PriorityMarker;
