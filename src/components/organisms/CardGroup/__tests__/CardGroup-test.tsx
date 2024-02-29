/**
*
* CardGroup Test
*
*/


import React from 'react';
import {render} from '@testing-library/react-native';

import CardGroup from '../CardGroup';

test('CardGroup', () => {
  const tree = renderer
    .create(
      <CardGroup />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
