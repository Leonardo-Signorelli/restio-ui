import {Option}  from '../../types/global-types'
export interface ButtonGroupProps {
  options: Option[];
  value?: string; // valore attivo (controllato)
  defaultValue?: string; // valore attivo iniziale (non controllato)
  onChange?: (value: string) => void;
  variant?: "base" | "primary" | "secondary";
  size?: "small" | "medium" | "large";
  alignContent?: "center" | "left" | "right";
  disabled?: boolean;
}