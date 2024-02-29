/**
 *
 * Card
 *
 */

import React from 'react';
import {TouchableOpacity} from 'react-native';

import CardStyles from './styles';

import type {PropsType} from './types';

/**
 * Represents a card component that renders a touchable card container with customizable styles and an optional onPress event handler.
 */
function Card({onPress, isPrio, children}: PropsType): React.ReactElement {
  return (
    <TouchableOpacity
      style={isPrio ? CardStyles.prioContainer : CardStyles.nonPrioContainer}
      onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
}

/**
 * Default props for the Card component.
 */
Card.defaultProps = {
  isPrio: true,
};

export default Card;
