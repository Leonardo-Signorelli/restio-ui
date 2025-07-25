import { State } from "../../types/global-types";

export interface HelperTextProps {
  /**
   * The value of the helperText
   */
  helperText: string;

  /**
   * The id for the htmlFor field
   */
  id: string;

  /**
   * Manage disabled state
   */
  disabled?: boolean;

  /**
   * Manage disabled state
   */
  state?: State;
}
