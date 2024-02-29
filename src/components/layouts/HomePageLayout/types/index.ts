/**
 *
 * HomePageLayout Types
 *
 */

import {TodoType} from 'components/organisms/CardGroup/types';

export type PropsType = {
  onPressAdd: () => void;
  todoTasksData?: TodoType[];
};
