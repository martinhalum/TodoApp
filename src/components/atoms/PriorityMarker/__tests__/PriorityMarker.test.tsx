/**
 *
 * PriorityMarker Test
 *
 */

import React from 'react';
import {render} from '@testing-library/react-native';

import PriorityMarker from '../PriorityMarker';

describe('PriorityMarker', () => {
  // Renders a priority marker with a label and isPrio set to true.
  it('should render a priority marker with a label and isPrio set to true', () => {
    const {getByText, getByTestId} = render(
      <PriorityMarker label="High Priority" isPrio={true} />,
    );

    const priorityMarker = getByTestId('priority-marker');
    const label = getByText('High Priority');

    expect(priorityMarker).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(priorityMarker).toHaveStyle(
      'backgroundColor: MainTheme.colors.prioPill',
    );
    expect(label).toHaveStyle('color: MainTheme.colors.submitLabel');
  });
});
