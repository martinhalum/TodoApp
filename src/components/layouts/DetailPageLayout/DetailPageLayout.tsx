/**
 *
 * DetailPageLayout
 *
 */

import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';

import Button from '@atoms/Button';
import NavButtons from '@atoms/NavButtons';
import TitleSubtitle from '@atoms/TitleSubtitle';
import ButtonGroup from '@molecules/ButtonGroup';

import useAppStore from 'providers/AppProvider';
import {StackParamList} from '@navigation/stack/types';

import DetailPageLayoutStyles from './styles';

import type {PropsType} from './types';

/**
 * Renders a detail page layout for a specific task.
 * Displays the task's title, subtitle, description, subtasks, and a "Done" button.
 * Provides functionality to update the task's status and navigate back to the previous page.
 *
 * @param details - An object containing the details of the task, including title, dateDue, description, subtask, and prio.
 * @param setShowModal - A function to show a modal for adding a subtask.
 *
 * @returns A React-Native element representing the detail page layout for a specific task.
 */
function DetailPageLayout({
  details,
  setShowModal,
}: PropsType): React.ReactElement {
  const navigation = useNavigation<NavigationProp<StackParamList>>();
  const {updateTasks} = useAppStore();

  /**
   * Updates the task's status and navigates back to the previous page.
   */
  const onPressDone = () => {
    updateTasks(details);
    navigation.goBack();
  };

  return (
    <>
      <View style={DetailPageLayoutStyles.headerContainer}>
        <NavButtons onLeftPress={() => navigation.goBack()} />
        <TitleSubtitle
          title={details.title}
          subtitle={details.dateDue}
          showIcon
          whiteFont={false}
        />
      </View>
      <View style={DetailPageLayoutStyles.bodyContainer}>
        <ScrollView
          contentContainerStyle={DetailPageLayoutStyles.bodyWrapper}
          contentInset={DetailPageLayoutStyles.spacer}
          showsVerticalScrollIndicator={false}>
          <View style={DetailPageLayoutStyles.descriptionWrapper}>
            <Text style={DetailPageLayoutStyles.descriptionLabel}>
              Description
            </Text>
            <Text style={DetailPageLayoutStyles.descriptionBody}>
              {details.description}
            </Text>
          </View>
          <View>
            <Text style={DetailPageLayoutStyles.subtaskLabel}>Subtasks</Text>
            <ButtonGroup task={details} data={details.subtask} />
            <Button
              label="Add a subtask"
              type="outlined"
              onPress={setShowModal}
              disabled={
                details.subtask?.length === 3 || details.prio === 'Done'
              }
            />
          </View>
          <View style={DetailPageLayoutStyles.submitContainer}>
            {details.prio !== 'Done' && (
              <Button label="Done" type="submit" onPress={onPressDone} />
            )}
          </View>
        </ScrollView>
      </View>
    </>
  );
}

export default DetailPageLayout;
