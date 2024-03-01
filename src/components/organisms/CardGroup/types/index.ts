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
  prio: number;
};

export type PropsType = {
  cardData: TodoType[];
  filter?: string;
  showLength?: boolean;
};
