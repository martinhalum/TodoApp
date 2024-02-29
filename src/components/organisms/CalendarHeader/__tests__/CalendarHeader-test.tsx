/**
*
* CalendarHeader Test
*
*/


import React from 'react';
import {render} from '@testing-library/react-native';

import CalendarHeader from '../CalendarHeader';

test('CalendarHeader', () => {
  const tree = renderer
    .create(
      <CalendarHeader />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
