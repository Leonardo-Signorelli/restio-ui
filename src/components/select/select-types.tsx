import { Option } from "../../types/global-types";

export interface SelectProps {
  /**
   * Active value of the select
   */
  value: string;
  /**
   * List of possible options
   */
  options: Option[];
  /**
   * List of selected index
   */
  multiActiveIndex?: string[];
  /**
   * Label of the field
   */
  label?: string;
  /**
   * HelperText under the field
   */
  helperText?: string;
  /**
   * Manage disabled state
   */
  disabled?: boolean;
  onClick?: (value: string) => void;
  onChange?: (value: string) => void;
}
