import {SubtaskType, TodoType} from '@organisms/CardGroup/types';

export type AppContextType = {
  todoTasks: TodoType[];
  selectedItem: TodoType;
  setSelectedItem: (data: TodoType, key?: string) => void;
  fetchStorage: (key?: string) => void;
  addTasks: (data?: TodoType, key?: string) => void;
  addSubTasks: (data?: TodoType, input?: any, key?: string) => void;
  updateTasks: (data?: TodoType, key?: string) => void;
  deleteTask: (id: number, key?: string) => void;
  updateSubTasks: (
    task?: TodoType,
    data?: SubtaskType[],
    input?: SubtaskType,
    key?: string,
  ) => void;
};
