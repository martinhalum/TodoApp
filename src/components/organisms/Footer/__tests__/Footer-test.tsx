/**
*
* Footer Test
*
*/


import React from 'react';
import {render} from '@testing-library/react-native';

import Footer from '../Footer';

test('Footer', () => {
  const tree = renderer
    .create(
      <Footer />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
