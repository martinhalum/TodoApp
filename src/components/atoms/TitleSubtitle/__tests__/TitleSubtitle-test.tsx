/**
*
* TitleSubtitle Test
*
*/


import React from 'react';
import {render} from '@testing-library/react-native';

import TitleSubtitle from '../TitleSubtitle';

test('TitleSubtitle', () => {
  const tree = renderer
    .create(
      <TitleSubtitle />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
