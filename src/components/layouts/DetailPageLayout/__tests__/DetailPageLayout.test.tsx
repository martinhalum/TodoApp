/**
 *
 * DetailPageLayout Test
 *
 */

import React from 'react';
import {render, screen} from '@testing-library/react-native';

import DetailPageLayout from '../DetailPageLayout';

describe('DetailPageLayout', () => {
  // Renders a detail page layout with the correct task details.
  it('should render the task details correctly', () => {
    const details = {
      title: 'Task 1',
      dateDue: 'September 30',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      subtask: [
        {id: 1, title: 'Subtask 1', done: false},
        {id: 2, title: 'Subtask 2', done: true},
        {id: 3, title: 'Subtask 3', done: false},
      ],
      prio: 2,
    };

    const setShowModal = jest.fn();

    render(<DetailPageLayout details={details} setShowModal={setShowModal} />);

    // Assert that the task title is rendered correctly
    expect(screen.getByText('Task 1')).toBeInTheDocument();

    // Assert that the task subtitle is rendered correctly
    expect(screen.getByText('September 30')).toBeInTheDocument();

    // Assert that the task description is rendered correctly
    expect(
      screen.getByText(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      ),
    ).toBeInTheDocument();

    // Assert that the subtasks are rendered correctly
    expect(screen.getByText('Subtask 1')).toBeInTheDocument();
    expect(screen.getByText('Subtask 2')).toBeInTheDocument();
    expect(screen.getByText('Subtask 3')).toBeInTheDocument();

    // Assert that the "Add a subtask" button is rendered correctly
    expect(screen.getByText('Add a subtask')).toBeInTheDocument();

    // Assert that the "Done" button is rendered correctly
    expect(screen.getByText('Done')).toBeInTheDocument();
  });

  // Handles cases where there are no subtasks or description.
  it('should handle cases with no subtasks or description', () => {
    const details = {
      title: 'Task 1',
      dateDue: 'September 30',
      description: undefined,
      subtask: undefined,
      prio: 2,
    };

    const setShowModal = jest.fn();

    render(<DetailPageLayout details={details} setShowModal={setShowModal} />);

    // Assert that the task title is rendered correctly
    expect(screen.getByText('Task 1')).toBeInTheDocument();

    // Assert that the task subtitle is rendered correctly
    expect(screen.getByText('September 30')).toBeInTheDocument();

    // Assert that the task description is not rendered
    expect(screen.queryByText('Description')).not.toBeInTheDocument();
    expect(
      screen.queryByText(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      ),
    ).not.toBeInTheDocument();

    // Assert that the subtasks are not rendered
    expect(screen.queryByText('Subtasks')).not.toBeInTheDocument();

    // Assert that the "Add a subtask" button is rendered correctly
    expect(screen.getByText('Add a subtask')).toBeInTheDocument();

    // Assert that the "Done" button is rendered correctly
    expect(screen.getByText('Done')).toBeInTheDocument();
  });
});
