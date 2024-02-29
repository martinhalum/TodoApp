/**
 *
 * TodoTaskModal Types
 *
 */

export type PropsType = {
  leftButtonLabel: string;
  leftButtonHandler: () => void;
  label: string;
  rightButtonLabel: string;
  rightButtonHandler: (data?: any) => void;
};
