/**
 *
 * SubtaskModalLayout
 *
 */

import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import SubtaskModalLayoutStyles from '@layouts/TodoTaskModal/styles';
import type {PropsType} from './types';

/**
 * Renders a modal layout for a subtask.
 *
 * @component
 *
 * @param {Object} props - The input props.
 * @param {string} props.leftButtonLabel - The label for the left navigation button.
 * @param {function} props.leftButtonHandler - The event handler for the left navigation button click.
 * @param {string} props.label - The label for the header.
 * @param {string} props.rightButtonLabel - The label for the right navigation button.
 * @param {function} props.rightButtonHandler - The event handler for the right navigation button click.
 *
 * @returns A React-Native element that represents the rendered modal layout for a subtask.
 */
function SubtaskModalLayout({
  leftButtonLabel,
  leftButtonHandler,
  label,
  rightButtonLabel,
  rightButtonHandler,
}: PropsType): React.ReactElement {
  const [subtaskTitle, setSubTaskTitle] = useState('');

  const handleRightButton = () => {
    rightButtonHandler(subtaskTitle);
    setSubTaskTitle('');
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={'padding'}
        style={SubtaskModalLayoutStyles.subtaskContainer}>
        <View style={SubtaskModalLayoutStyles.headerWrapper}>
          <TouchableOpacity onPress={leftButtonHandler}>
            <Text style={SubtaskModalLayoutStyles.navButton}>
              {leftButtonLabel}
            </Text>
          </TouchableOpacity>
          <Text style={SubtaskModalLayoutStyles.headerLabel}>{label}</Text>
          <TouchableOpacity
            onPress={handleRightButton}
            disabled={subtaskTitle === ''}>
            <Text style={SubtaskModalLayoutStyles.navButton}>
              {rightButtonLabel}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={SubtaskModalLayoutStyles.subtaskBodyContainer}>
          <Text style={SubtaskModalLayoutStyles.inputLabel}>Title</Text>
          <TextInput
            style={SubtaskModalLayoutStyles.inputStyle}
            onChangeText={text => setSubTaskTitle(text)}
            placeholder="Subtask Title"
            value={subtaskTitle}
          />
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

export default SubtaskModalLayout;
