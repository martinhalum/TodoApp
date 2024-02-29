/**
*
* SubtaskModalLayout Test
*
*/


import React from 'react';
import {render} from '@testing-library/react-native';

import SubtaskModalLayout from '../SubtaskModalLayout';

test('SubtaskModalLayout', () => {
  const tree = renderer
    .create(
      <SubtaskModalLayout />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
