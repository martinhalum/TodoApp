/**
*
* TodoTaskModal Test
*
*/


import React from 'react';
import {render} from '@testing-library/react-native';

import TodoTaskModal from '../TodoTaskModal';

test('TodoTaskModal', () => {
  const tree = renderer
    .create(
      <TodoTaskModal />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
