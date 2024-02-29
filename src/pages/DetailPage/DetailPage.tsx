/**
 *
 * DetailPage
 *
 */

import React, {useState} from 'react';
import {Modal, SafeAreaView} from 'react-native';

import DetailPageLayout from '@layouts/DetailPageLayout';
import SubtaskModalLayout from '@layouts/SubtaskModalLayout';
import useAppStore from '../../providers/AppProvider/AppProvider';

import DetailPageStyles from './styles';

/**
 * Renders a detail page layout for a task, including a header, body, and a modal for adding subtasks.
 *
 * @returns The rendered detail page layout.
 */
function DetailPage(): React.ReactElement {
  const [showModal, setShowModal] = useState(false);
  const {addSubTasks, selectedItem} = useAppStore();

  /**
   * Sets the showModal state variable to true, showing the modal for adding subtasks.
   */
  const showModalHandler = () => {
    setShowModal(true);
  };

  /**
   * Calls the addSubTasks function with the selectedItem and provided subtask data, and sets the showModal state variable to false.
   *
   * @param data - The data of the subtask to be saved.
   */
  const saveSubtaskHandler = (data: any) => {
    addSubTasks(selectedItem, data);
    setShowModal(false);
  };

  return (
    <SafeAreaView style={DetailPageStyles.container}>
      <DetailPageLayout
        details={selectedItem}
        setShowModal={showModalHandler}
      />

      <Modal animationType="slide" transparent={true} visible={showModal}>
        <SubtaskModalLayout
          leftButtonLabel="Cancel"
          leftButtonHandler={() => setShowModal(false)}
          label="Add a subtask"
          rightButtonLabel="Done"
          rightButtonHandler={saveSubtaskHandler}
        />
      </Modal>
    </SafeAreaView>
  );
}

export default DetailPage;
