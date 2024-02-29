/**
 *
 * DetailPageLayout Types
 *
 */

import {TodoType} from '@organisms/CardGroup/types';

export type PropsType = {
  details: TodoType;
  setShowModal: () => void;
};
