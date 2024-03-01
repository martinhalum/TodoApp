/**
 *
 * HomePage
 *
 */

import React, {useEffect, useState} from 'react';
import {Modal, SafeAreaView} from 'react-native';

import HomePageLayout from '@layouts/HomePageLayout';
import TodoTaskModal from '@layouts/TodoTaskModal';

import useAppStore from '@providers/AppProvider';
import useUserStore from '@providers/UserProvider';

import HomePageStyles from './styles';

/**
 * Renders the layout for the home page of a task management app.
 * Includes a calendar header and a card group displaying the user's todo tasks.
 * Also includes a modal for adding new tasks.
 *
 * @returns The rendered home page layout with the calendar header, todo task cards, and a modal for adding new tasks.
 *
 * @example
 * ```
 * <HomePage />
 * ```
 */
function HomePage(): React.ReactElement {
  const {addTasks, fetchStorage} = useAppStore();
  const {user, initialize} = useUserStore(state => ({
    user: state.user,
    initialize: state.initialize,
  }));
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchStorage(user?.id);
  }, [fetchStorage, initialize, user?.id]);

  /**
   * Handles saving a new task.
   * Sets the `showModal` state to false and calls the `addTasks` function with the new task data.
   *
   * @param data - The data of the new task to be saved.
   */
  const saveTodoTaskHandler = (data: any) => {
    setShowModal(false);
    addTasks(data, user?.id);
  };

  return (
    <SafeAreaView style={HomePageStyles.Container}>
      <HomePageLayout onPressAdd={() => setShowModal(true)} />
      <Modal
        testID="modal"
        animationType="slide"
        transparent={true}
        visible={showModal}>
        <TodoTaskModal
          leftButtonLabel="Cancel"
          leftButtonHandler={() => setShowModal(false)}
          label="New Task"
          rightButtonLabel="Done"
          rightButtonHandler={saveTodoTaskHandler}
        />
      </Modal>
    </SafeAreaView>
  );
}

export default HomePage;
