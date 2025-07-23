import { Option } from "../../types/global-types";

export interface ListProps {
  id?: string;
  options: Option[];
  ref?: React.Ref<HTMLElement | null>;
  showFilter?: boolean;
  selectedIndex?: number;
  activeIndex?: string[];
  width?: number;
  onClick?: (option: Option) => void;
  onKeyDown?: (e: React.KeyboardEvent) => void;
  /**
   * Callback to create a new option
   * @param value option value
   * @returns
   */
  onCreate?: (value: string) => void;
}
