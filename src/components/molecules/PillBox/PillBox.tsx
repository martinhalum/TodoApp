/**
 *
 * PillBox
 *
 */

import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import PillBoxStyles from './styles';

import type {PropsType} from './types';

/**
 * Renders a pill box UI element.
 *
 * @param {Object} props - The component props.
 * @param {PillBoxType} props.selectedItem - The currently selected item.
 * @param {PillBoxType[]} props.data - An array of `PillBoxType` objects representing the data to be rendered in the pill box.
 * @param {(data: PillBoxType) => void} props.setSelectedItem - A function to set the selected item.
 *
 * @returns A React-Native element representing the PillBox component.
 */
function PillBox({
  selectedItem,
  data,
  setSelectedItem,
}: PropsType): React.ReactElement {
  return (
    <View style={PillBoxStyles.container}>
      {data.map(item => {
        const isSelected = selectedItem.value === item.value;
        return (
          <TouchableOpacity
            key={item.value}
            style={
              isSelected
                ? PillBoxStyles.activeButton
                : PillBoxStyles.inactiveButton
            }
            onPress={() => setSelectedItem(item)}>
            <Text
              style={
                isSelected
                  ? PillBoxStyles.activeLabel
                  : PillBoxStyles.inactiveLabel
              }>
              {item.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default PillBox;
