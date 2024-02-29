/**
 * Zustand store hook for managing application state.
 *
 * @returns The Zustand store object.
 *
 */
import {create} from 'zustand';

import {SubtaskType, TodoType} from '@organisms/CardGroup/types';

import {AppContextType} from './types';
import {getItem, setItem} from 'storage';

const useAppStore = create<AppContextType>()(set => ({
  todoTasks: [],
  selectedItem: {
    id: 0,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    description:
      'Nam rutrum, dui non ornare convallis, purus tortor condimentum justo, non varius augue est ac ante. Ut euismod tempus ornare. Phasellus interdum, velit in sagittis sollicitudin, erat dui tempus ex, at congue ligula dui a enim. Pellentesque urna nisl, vulputate sed condimentum vel, auctor eget ante. Fusce eleifend odio euismod fringilla rhoncus.',
    dateDue: 'September 21',
    prio: 'High',
  },
  setSelectedItem: selectedItem => set({selectedItem: selectedItem}),
  fetchStorage: async () => {
    try {
      const response = await getItem();

      if (response) {
        set({todoTasks: JSON.parse(response)});
      }
    } catch (error) {
      console.error(error);
    }
  },
  addTasks: (data?: TodoType) => {
    set(state => {
      const newTodoData = state.todoTasks;

      if (data !== undefined) {
        newTodoData.push({
          ...data,
        });
      }

      setItem(JSON.stringify(newTodoData));

      return {todoTasks: newTodoData};
    });
  },
  addSubTasks: (details?: TodoType, data?: string) => {
    const newSubTask = details?.subtask === undefined ? [] : details.subtask;

    if (data !== undefined && details !== undefined) {
      newSubTask.push({
        id: newSubTask.length,
        title: data,
        done: false,
      });

      details.subtask = newSubTask;
    }

    set(state => {
      state.todoTasks.forEach((value, index) => {
        const {id} = value;

        if (details?.id === id) {
          state.todoTasks[index] = details;
        }
      });

      setItem(JSON.stringify(state.todoTasks));

      return {todoTasks: state.todoTasks};
    });
  },
  updateTasks: (data?: TodoType) => {
    set(state => {
      const newTasks = [...state.todoTasks];
      if (data !== undefined) {
        data.prio = 'Done';

        newTasks.forEach((value, index) => {
          if (value.id === data.id) {
            newTasks[index] = data;
          }
        });
      }

      setItem(JSON.stringify(newTasks));
      return {todoTasks: newTasks};
    });
  },
  updateSubTasks: (
    details?: TodoType,
    subtasks?: SubtaskType[],
    data?: SubtaskType,
  ) => {
    if (subtasks !== undefined && data !== undefined && details !== undefined) {
      data.done = true;

      subtasks.forEach((value, index) => {
        if (data.id === value.id) {
          subtasks[index] = data;
        }
      });

      details.subtask = subtasks;
    }

    set(state => {
      state.todoTasks.forEach((value, index) => {
        const {id} = value;

        if (details?.id === id) {
          state.todoTasks[index] = details;
        }
      });

      setItem(JSON.stringify(state.todoTasks));

      return {todoTasks: state.todoTasks};
    });
  },
}));

export default useAppStore;
