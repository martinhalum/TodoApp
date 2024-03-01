/* eslint-disable react/react-in-jsx-scope */
/**
 *
 * TodoTaskModal Test
 *
 */

import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react-native';
import TodoTaskModal from '../TodoTaskModal';

describe('TodoTaskModal', () => {
  // Renders a modal layout with a header and input fields.
  it('should render a modal layout with a header and input fields', () => {
    const props = {
      leftButtonLabel: 'Cancel',
      leftButtonHandler: jest.fn(),
      label: 'Create Task',
      rightButtonLabel: 'Save',
      rightButtonHandler: jest.fn(),
    };

    render(<TodoTaskModal {...props} />);

    expect(screen.getByText('Cancel')).toBeInTheDocument();
    expect(screen.getByText('Create Task')).toBeInTheDocument();
    expect(screen.getByText('Save')).toBeInTheDocument();
    expect(screen.getByTestId('TitleInput')).toBeInTheDocument();
    expect(screen.getByTestId('descriptionInput')).toBeInTheDocument();
    expect(screen.getByText('Date Due')).toBeInTheDocument();
    expect(screen.getByText('Priority')).toBeInTheDocument();
  });

  // Displays an error message if the 'Title' input field is empty and the user tries to submit.
  it('should display an error message when the "Title" input field is empty and the user tries to submit', () => {
    const props = {
      leftButtonLabel: 'Cancel',
      leftButtonHandler: jest.fn(),
      label: 'Create Task',
      rightButtonLabel: 'Save',
      rightButtonHandler: jest.fn(),
    };

    render(<TodoTaskModal {...props} />);

    fireEvent.click(screen.getByText('Save'));

    expect(screen.getByText('Title is required')).toBeInTheDocument();
  });
});
