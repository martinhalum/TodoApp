/**
 *
 * Button Test
 *
 */

import '@testing-library/jest-dom';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';

import Button from '../Button';
import FilledButton from '../FilledButton';

describe('Button', () => {
  it('should render a primary FilledButton with label and onPress function', () => {
    const onPress = jest.fn();
    const tree = render(
      <Button label="Test" type="primary" onPress={onPress} />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render an outlined Button with label and onPress function', () => {
    const onPress = jest.fn();
    const tree = render(
      <Button label="Test" type="outlined" onPress={onPress} />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render a submit Button with label and onPress function', () => {
    const onPress = jest.fn();
    const tree = render(
      <Button label="Test" type="submit" onPress={onPress} />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render a FilledButton with undefined leftIcon and rightIcon', () => {
    const onPress = jest.fn();
    const tree = render(
      <Button label="Test" type="primary" onPress={onPress} />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render a FilledButton with undefined customColor and textColor', () => {
    const onPress = jest.fn();
    const tree = render(
      <Button label="Test" type="primary" onPress={onPress} />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render a FilledButton with undefined type', () => {
    const onPress = jest.fn();
    const tree = render(<Button label="Test" onPress={onPress} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('FilledButton', () => {
  it('should render button with label and onPress function', () => {
    const label = 'Submit';
    const onPress = jest.fn();

    const screen = render(<FilledButton label={label} onPress={onPress} />);

    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveAttribute('disabled', null);
    fireEvent(screen.getByRole('button'), 'submit');
    expect(onPress).toHaveBeenCalled();
  });
});
