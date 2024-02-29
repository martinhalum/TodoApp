/**
 *
 * CardGroup Types
 *
 */

export type SubtaskType = {
  id: number;
  title: string;
  done: boolean;
};

export type TodoType = {
  id: number;
  title: string;
  description: string;
  dateDue: string;
  subtask?: SubtaskType[];
  prio: string;
};

export type PropsType = {
  cardData: TodoType[];
};
