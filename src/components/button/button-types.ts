import { Size } from "../../types/global-types";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
anchorName?: string;
alignContent?: 'start' | 'center';
leadingVisual?: string;
trailingVisual?: string;
loading?: boolean;
size?: Size;
variant?: "base" | "primary" | "danger" | "invisible" | "link"
disabled?: boolean
}