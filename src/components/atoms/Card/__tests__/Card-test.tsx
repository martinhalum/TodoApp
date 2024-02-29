/**
*
* Card Test
*
*/


import React from 'react';
import {render} from '@testing-library/react-native';

import Card from '../Card';

test('Card', () => {
  const tree = renderer
    .create(
      <Card />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
