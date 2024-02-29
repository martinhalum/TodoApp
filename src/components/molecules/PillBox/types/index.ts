/**
 *
 * PillBox Types
 *
 */

export type PillBoxType = {
  label: string;
  value: string;
};

export type PropsType = {
  data: PillBoxType[];
  selectedItem: PillBoxType;
  setSelectedItem: (data: PillBoxType) => void;
};
