/**
 *
 * NavButtons Test
 *
 */

import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';

import NavButtons from '../NavButtons';

describe('NavButtons', () => {
  // Renders two buttons wrapped in a View
  it('should render two buttons wrapped in a View', () => {
    // Arrange
    const onLeftPress = jest.fn();
    const onRightPress = jest.fn();

    // Act
    const screen = render(
      <NavButtons onLeftPress={onLeftPress} onRightPress={onRightPress} />,
    );

    // Assert
    expect(screen.getByTestId('leftButton')).toBeTruthy();
    expect(screen.getByTestId('rightButton')).toBeTruthy();
    expect(screen.getByTestId('wrapper')).toBeTruthy();
  });

  // Optional onLeftPress and onRightPress callbacks can be provided
  it('should execute onLeftPress callback when left button is pressed', () => {
    // Arrange
    const onLeftPress = jest.fn();
    const onRightPress = jest.fn();

    // Act
    const screen = render(
      <NavButtons onLeftPress={onLeftPress} onRightPress={onRightPress} />,
    );
    fireEvent.press(screen.getByTestId('leftButton'));

    // Assert
    expect(onLeftPress).toHaveBeenCalled();
  });

  // onLeftPress and onRightPress are not provided
  it('should not execute onLeftPress or onRightPress callbacks when buttons are pressed', () => {
    // Arrange
    const onLeftPress = jest.fn();
    const onRightPress = jest.fn();

    // Act
    const screen = render(<NavButtons />);
    fireEvent.press(screen.getByTestId('leftButton'));
    fireEvent.press(screen.getByTestId('rightButton'));

    // Assert
    expect(onLeftPress).not.toHaveBeenCalled();
    expect(onRightPress).not.toHaveBeenCalled();
  });

  // onLeftPress and onRightPress are null
  it('should not execute onLeftPress or onRightPress callbacks when buttons are pressed', () => {
    // Arrange
    const onLeftPress = jest.fn();
    const onRightPress = jest.fn();

    // Act
    const screen = render(
      <NavButtons onLeftPress={null} onRightPress={null} />,
    );
    fireEvent.press(screen.getByTestId('leftButton'));
    fireEvent.press(screen.getByTestId('rightButton'));

    // Assert
    expect(onLeftPress).not.toHaveBeenCalled();
    expect(onRightPress).not.toHaveBeenCalled();
  });

  // onLeftPress and onRightPress are not functions
  it('should not execute onLeftPress or onRightPress callbacks when buttons are pressed', () => {
    // Arrange
    const onLeftPress = jest.fn();
    const onRightPress = jest.fn();

    // Act
    const screen = render(
      <NavButtons onLeftPress={123} onRightPress={'abc'} />,
    );
    fireEvent.press(screen.getByTestId('leftButton'));
    fireEvent.press(screen.getByTestId('rightButton'));

    // Assert
    expect(onLeftPress).not.toHaveBeenCalled();
    expect(onRightPress).not.toHaveBeenCalled();
  });
});
