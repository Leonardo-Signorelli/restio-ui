import { Option } from "../../types/global-types";

export interface SelectProps {
  /**
   * Active value of the select
   */
  value: string | string[]; // string for single, string[] for multiple
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
  /**
   * When true, it will enable the multiselection
   */
  multiple?: boolean;
  onClick?: (value: string) => void;
  onChange?: (value: string | string[]) => void;
}
