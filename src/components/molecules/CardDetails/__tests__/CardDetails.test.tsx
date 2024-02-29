/**
*
* CardDetails Test
*
*/


import React from 'react';
import {render} from '@testing-library/react-native';

import CardDetails from '../CardDetails';

test('CardDetails', () => {
  const tree = renderer
    .create(
      <CardDetails />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
