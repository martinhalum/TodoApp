import {SubtaskType, TodoType} from '@organisms/CardGroup/types';

export type AppContextType = {
  todoTasks: TodoType[];
  selectedItem: TodoType;
  setSelectedItem: (data: TodoType) => void;
  fetchStorage: () => void;
  addTasks: (data?: TodoType) => void;
  addSubTasks: (data?: TodoType, input?: any) => void;
  updateTasks: (data?: TodoType) => void;
  updateSubTasks: (
    task?: TodoType,
    data?: SubtaskType[],
    input?: SubtaskType,
  ) => void;
};
