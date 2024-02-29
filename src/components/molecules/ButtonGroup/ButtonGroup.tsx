/**
 *
 * ButtonGroup
 *
 */

import React from 'react';
import {View} from 'react-native';

import Button from '@atoms/Button';

import ButtonGroupStyles from './styles';
import type {PropsType} from './types';
import useAppStore from 'providers/AppProvider/AppProvider';
import {SubtaskType} from 'components/organisms/CardGroup/types';

/**
 * Renders a group of buttons based on the provided data.
 * Each button represents a subtask and its appearance is determined by the `done` property of the subtask object.
 *
 * @component
 * @example
 * ```tsx
 * <ButtonGroup task={taskData} data={subtaskData} />
 * ```
 *
 * @param {Object} props - The component props.
 * @param {Object} props.task - An object representing the main task.
 * @param {Array} props.data - An array of objects representing the subtasks.
 *
 * @returns  A React-Native element representing the rendered ButtonGroup component.
 */
function ButtonGroup({task, data}: PropsType): React.ReactElement {
  const {updateSubTasks} = useAppStore();

  /**
   * Handles the button press event for a subtask.
   * Calls the `updateSubTasks` function with the `task`, `data`, and the selected subtask.
   *
   * @param {Object} value - The selected subtask.
   */
  const handleDone = (value: SubtaskType) => {
    updateSubTasks(task, data, value);
  };

  return (
    <>
      {data !== undefined &&
        data.map((value, index) => {
          const {title, done} = value;
          return (
            <View
              key={index.toString()}
              style={ButtonGroupStyles.buttonsContainer}>
              <Button
                label={title}
                leftIcon={done ? 'check' : undefined}
                type={done ? 'secondary' : 'primary'}
                textColor={done ? 'black' : 'white'}
                onPress={() => handleDone(value)}
                disabled={done}
              />
            </View>
          );
        })}
    </>
  );
}

export default ButtonGroup;
