/**
 *
 * IconLabel Test
 *
 */

import React from 'react';
import {render} from '@testing-library/react-native';

import IconLabel from '../IconLabel';

describe('IconLabel', () => {
  // Renders a label with default props
  it('should render a label with default props', () => {
    const {getByText} = render(<IconLabel />);
    const label = getByText('');
    expect(label).toBeInTheDocument();
  });
});
