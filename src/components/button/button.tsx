import React from "react";
import { ButtonProps } from "./button-types";
import styles from "./button.module.css"; // Importa il modulo CSS
import { Icon } from "../../utility-components/icon/icon";

export const Button: React.FC<ButtonProps> = ({
  variant = "base",
  size = "medium",
  loading = false,
  disabled = false,
  value,
  alignContent = "center",
  anchorName,
  leadingVisual,
  trailingVisual,
  ...props
}) => {
  const isLoading = loading || disabled;

  const buttonClassNames = [
    styles[`rst-button`],
    styles[`rst-button-${variant}`],
    styles[`rst-button-${size}`],
    isLoading ? styles["rst-button-loading"] : "",
    disabled ? styles["rst-button-disabled"] : "",
    styles[`rst-button-${alignContent}`],
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={buttonClassNames} disabled={isLoading || disabled} {...props} style={{ anchorName: anchorName }}>
      {leadingVisual && <Icon icon={leadingVisual} disabled={disabled}></Icon>}
      {value}
      {trailingVisual && <Icon icon={trailingVisual} disabled={disabled}></Icon>}
    </button>
  );
};
