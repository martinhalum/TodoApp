/**
*
* DetailPage Test
*
*/


import React from 'react';
import renderer from 'react-test-renderer';

import DetailPage from '../DetailPage';

test('DetailPage', () => {
  const tree = renderer
    .create(
      <DetailPage />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
