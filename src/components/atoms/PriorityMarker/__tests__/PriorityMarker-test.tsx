/**
*
* PriorityMarker Test
*
*/


import React from 'react';
import {render} from '@testing-library/react-native';

import PriorityMarker from '../PriorityMarker';

test('PriorityMarker', () => {
  const tree = renderer
    .create(
      <PriorityMarker />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
