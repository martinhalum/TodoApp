/**
 *
 * ButtonGroup Types
 *
 */

import {SubtaskType, TodoType} from 'components/organisms/CardGroup/types';

export type PropsType = {
  task?: TodoType;
  data?: SubtaskType[];
};
