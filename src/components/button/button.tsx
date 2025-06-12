import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  readonly variant?: "primary" | "secondary" | "ghost";
  readonly anchorName?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  value,
  anchorName,
  ...props
}) => {
  const buttonStyle = {
    button: anchorName ? { anchorName } : undefined,
  };

  return (
    <button
      className={`button button--${variant}`}
      style={buttonStyle}
      {...props}
    >
      {value}
    </button>
  );
};
