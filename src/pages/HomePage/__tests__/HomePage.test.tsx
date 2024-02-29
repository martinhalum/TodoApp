import '@testing-library/jest-dom';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import HomePage from '../HomePage';

describe('HomePage', () => {
  // Renders home page layout with calendar header and todo task cards
  it('should render home page layout with calendar header and todo task cards', async () => {
    // Render component
    const {getByTestId} = render(<HomePage />);

    // Assert
    await waitFor(() => {
      expect(getByTestId('calendar-header')).toBeTruthy();
      expect(getByTestId('card-group')).toBeTruthy();
    });
  });

  // Opens modal when "Add" button is pressed
  it('should open modal when "Add" button is pressed', async () => {
    // Render component
    const {getByTestId} = render(<HomePage />);

    // Trigger event
    fireEvent.press(getByTestId('Add'));

    // Assert
    await waitFor(() => {
      expect(getByTestId('modal')).toBeTruthy();
    });
  });

  // // Adds and saves new task when "Done" button is pressed
  // it('should add and save new task when "Done" button is pressed', () => {
  //   // Mock dependencies
  //   const addTasksMock = jest.fn();

  //   // Render component
  //   const {getByTestId} = render(<HomePage />);

  //   // Trigger event
  //   fireEvent.press(getByTestId('Add'));
  //   fireEvent.changeText(getByTestId('TitleInput'), 'New Task');
  //   fireEvent.press(getByTestId('Done'));

  //   // Assert
  //   expect(addTasksMock).toHaveBeenCalledWith({
  //     id: expect.any(Number),
  //     title: 'New Task',
  //     description: '',
  //     dateDue: '',
  //     prio: 'High',
  //   });
  //   expect(getByTestId('modal')).not.toBeTruthy();
  // });

  //   // Handles empty task title when "Done" button is pressed
  //   it('should handle empty task title when "Done" button is pressed', () => {
  //     // Mock dependencies
  //     const addTasksMock = jest.fn();

  //     // Render component
  //     const {getByTestId, getByText} = render(<HomePage />);

  //     // Trigger event
  //     fireEvent.press(getByText('Add'));
  //     fireEvent.press(getByText('Done'));

  //     // Assert
  //     expect(addTasksMock).not.toHaveBeenCalled();
  //     expect(getByTestId('modal')).toBeInTheDocument();
  //   });

  //   // Handles no task title when "Done" button is pressed
  //   it('should handle no task title when "Done" button is pressed', () => {
  //     // Mock dependencies
  //     const addTasksMock = jest.fn();

  //     // Render component
  //     const {getByTestId, getByText, getByPlaceholderText} = render(<HomePage />);

  //     // Trigger event
  //     fireEvent.press(getByText('Add'));
  //     fireEvent.changeText(getByPlaceholderText('Enter Task Title'), '');
  //     fireEvent.press(getByText('Done'));

  //     // Assert
  //     expect(addTasksMock).not.toHaveBeenCalled();
  //     expect(getByTestId('modal')).toBeInTheDocument();
  //   });
});
