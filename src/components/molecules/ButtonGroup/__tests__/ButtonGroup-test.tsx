/**
*
* ButtonGroup Test
*
*/


import React from 'react';
import {render} from '@testing-library/react-native';

import ButtonGroup from '../ButtonGroup';

test('ButtonGroup', () => {
  const tree = renderer
    .create(
      <ButtonGroup />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
