/**
*
* CalendarItem Test
*
*/


import React from 'react';
import {render} from '@testing-library/react-native';

import CalendarItem from '../CalendarItem';

test('CalendarItem', () => {
  const tree = renderer
    .create(
      <CalendarItem />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
