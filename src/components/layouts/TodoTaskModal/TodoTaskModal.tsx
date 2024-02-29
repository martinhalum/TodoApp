/**
 *
 * TodoTaskModal
 *
 */

import React, {useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import Button from '@atoms/Button';
import PillBox from '@molecules/PillBox';

import {MainTheme} from 'theme';
import SubtaskModalLayoutStyles from './styles';

import type {PropsType} from './types';
import {DEFAULT_PRIORITY, PILLBOX_SELECTION} from './config';
import DatePicker from 'react-native-date-picker';
import {format} from 'date-fns';

/**
 * Renders a modal for creating a new task.
 *
 * @param {Object} props - The component props.
 * @param {string} props.leftButtonLabel - The label for the left button in the header.
 * @param {function} props.leftButtonHandler - The event handler for the left button click.
 * @param {string} props.label - The label for the header.
 * @param {string} props.rightButtonLabel - The label for the right button in the header.
 * @param {function} props.rightButtonHandler - The event handler for the right button click.
 *
 * @returns A React-Native element that represents the rendered modal layout for a subtask.
 */
function TodoTaskModal({
  leftButtonLabel,
  leftButtonHandler,
  label,
  rightButtonLabel,
  rightButtonHandler,
}: PropsType): React.ReactElement {
  const dateNow = new Date();
  const [open, setOpen] = useState(false);
  const [taskTitle, setTaskTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dateDue, setDateDue] = useState('');
  const [priority, setPriority] = useState(DEFAULT_PRIORITY);

  const handleRightButton = () => {
    const data = {
      id: Math.random(),
      title: taskTitle,
      description: description,
      dateDue: dateDue,
      prio: priority.value,
    };
    rightButtonHandler(data);
    setTaskTitle('');
  };

  const handleSelectPriority = selectedItem => {
    setPriority(selectedItem);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={SubtaskModalLayoutStyles.container}>
        <View style={SubtaskModalLayoutStyles.headerWrapper}>
          <TouchableOpacity onPress={leftButtonHandler}>
            <Text style={SubtaskModalLayoutStyles.navButton}>
              {leftButtonLabel}
            </Text>
          </TouchableOpacity>
          <Text style={SubtaskModalLayoutStyles.headerLabel}>{label}</Text>
          <TouchableOpacity
            testID="Done"
            onPress={handleRightButton}
            disabled={taskTitle === ''}>
            <Text style={SubtaskModalLayoutStyles.navButton}>
              {rightButtonLabel}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={SubtaskModalLayoutStyles.bodyContainer}>
          <View>
            <Text style={SubtaskModalLayoutStyles.inputLabel}>Title</Text>
            <TextInput
              testID="TitleInput"
              style={SubtaskModalLayoutStyles.inputStyle}
              onChangeText={text => setTaskTitle(text)}
              placeholder="Enter Task Title"
              value={taskTitle}
            />
          </View>
          <View>
            <Text style={SubtaskModalLayoutStyles.inputLabel}>Description</Text>
            <TextInput
              testID="descriptionInput"
              style={SubtaskModalLayoutStyles.descriptionStyle}
              onChangeText={text => setDescription(text)}
              placeholder="Enter Task Title"
              value={description}
              multiline={true}
            />
          </View>
          <View>
            <Text style={SubtaskModalLayoutStyles.inputLabel}>Date Due</Text>
            <Button
              label={dateDue || 'Select Date'}
              rightIcon="calendar"
              customColor={MainTheme.colors.nonPrioCard}
              textColor={MainTheme.colors.dateLabel}
              onPress={() => setOpen(true)}
              leftAlign
            />
            <DatePicker
              modal
              open={open}
              mode="date"
              date={dateNow}
              onConfirm={date => {
                const due = format(date, 'MMMM dd');
                setOpen(false);
                setDateDue(due);
              }}
              onCancel={() => {
                setOpen(false);
              }}
            />
          </View>
          <View>
            <Text style={SubtaskModalLayoutStyles.inputLabel}>Priority</Text>
            <PillBox
              selectedItem={priority}
              setSelectedItem={handleSelectPriority}
              data={PILLBOX_SELECTION}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default TodoTaskModal;
