/**
*
* PillBox Test
*
*/


import React from 'react';
import {render} from '@testing-library/react-native';

import PillBox from '../PillBox';

test('PillBox', () => {
  const tree = renderer
    .create(
      <PillBox />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
