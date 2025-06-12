
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
anchorName?: string;
alignContent?: 'start' | 'center';
leadingVisual?: React.ElementType;
trailingVisual?: React.ElementType;
loading?:boolean;
size?: "small" | "medium" | "large";
variant?: "base" | "primary" | "danger" | "invisible" | "link" // change the visual style
disabled?: boolean
}