/**
*
* DetailPageLayout Test
*
*/


import React from 'react';
import {render} from '@testing-library/react-native';

import DetailPageLayout from '../DetailPageLayout';

test('DetailPageLayout', () => {
  const tree = renderer
    .create(
      <DetailPageLayout />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
