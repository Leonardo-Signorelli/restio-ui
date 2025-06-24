import { Option } from "../../types/global-types";

export interface MultiSelectProps {
  value: string;
  options: Option[];
  multiActiveIndex?: string[];
  onClick?: (value: string) => void;
  onChange?: (value: string) => void;
}
