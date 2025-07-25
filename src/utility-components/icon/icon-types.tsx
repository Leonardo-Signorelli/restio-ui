import { State } from "../../types/global-types";

export interface IconProps {
  /**
   * Path to the SVG icon file
   */
  icon: string;

  /**
   * Manage disabled state
   */
  disabled?: boolean;

  /**
   * Manage disabled state
   */
  state?: State;
}
