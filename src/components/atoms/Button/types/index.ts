/**
 *
 * Button Types
 *
 */

export type PropsType = {
  label: string;
  leftAlign?: boolean;
  leftIcon?: string;
  rightIcon?: string;
  customColor?: string;
  textColor?: string;
  type?: 'primary' | 'secondary' | 'outlined' | 'submit';
  disabled?: boolean;
  onPress?: () => void;
};
