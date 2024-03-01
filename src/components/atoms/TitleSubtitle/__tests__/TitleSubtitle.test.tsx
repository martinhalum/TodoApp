/**
 *
 * TitleSubtitle Test
 *
 */

import React from 'react';
import {render} from '@testing-library/react-native';

import TitleSubtitle from '../TitleSubtitle';

describe('TitleSubtitle', () => {
  // Renders a title with no subtitle when no subtitle is provided.
  it('should render a title with no subtitle when no subtitle is provided', () => {
    const {getByText, queryByTestId} = render(
      <TitleSubtitle title="Test Title" subtitle="Test Subtitle" />,
    );

    const titleElement = getByText('Test Title');
    const subtitleElement = queryByTestId('subtitle');

    expect(titleElement).toBeInTheDocument();
    expect(subtitleElement).not.toBeInTheDocument();
  });
});
