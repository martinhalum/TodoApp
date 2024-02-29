/**
 *
 * IconLabel Test
 *
 */

import React from 'react';
import {render} from '@testing-library/react-native';

import IconLabel from '../IconLabel';

test('IconLabel', () => {
  const tree = renderer.create(<IconLabel />).toJSON();
  expect(tree).toMatchSnapshot();
});
