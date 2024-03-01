import React from 'react';
import {render} from '@testing-library/react-native';
import Card from '../Card';
import CardStyles from '../styles';

/**
 *
 * Card Test
 *
 */
describe('Card', () => {
  // Renders a touchable card container with default styles and props.
  it('should render a touchable card container with default styles and props', () => {
    const {getByTestId} = render(<Card children={undefined} />);
    const cardContainer = getByTestId('card-container');

    expect(cardContainer).toBeInTheDocument();
    expect(cardContainer).toHaveStyle(CardStyles.prioContainer);
    expect(cardContainer).toHaveStyle(CardStyles.nonPrioContainer);
    expect(cardContainer).toHaveAttribute('onPress', undefined);
    expect(cardContainer).toHaveAttribute('onLongPress', undefined);
  });

  // Renders a touchable card container with children as null.
  it('should render a touchable card container with children as null', () => {
    const {getByTestId} = render(<Card>{null}</Card>);
    const cardContainer = getByTestId('card-container');

    expect(cardContainer).toBeInTheDocument();
    expect(cardContainer).toHaveStyle(CardStyles.prioContainer);
    expect(cardContainer).toHaveStyle(CardStyles.nonPrioContainer);
    expect(cardContainer).toHaveAttribute('onPress', undefined);
    expect(cardContainer).toHaveAttribute('onLongPress', undefined);
  });
});
