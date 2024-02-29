/**
 *
 * Card Types
 *
 */

import {ReactNode} from 'react';

export type PropsType = {
  onPress?: () => void;
  isPrio?: boolean;
  children: ReactNode;
};
