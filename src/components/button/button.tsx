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
    styles.button,
    styles[`button--${variant}`],
    styles[`button--${size}`],
    isLoading ? styles["button--loading"] : "",
    disabled ? styles["button--disabled"] : "",
    styles[`button--${alignContent}`],
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      className={buttonClassNames}
      disabled={isLoading || disabled}
      {...props}
      style={{ anchorName: anchorName }}
    >
      {leadingVisual && <Icon icon={"left"}></Icon>}
      {value}
      {trailingVisual && (
        <span className={styles.button__trailingVisual}>
          {React.createElement(trailingVisual)}
        </span>
      )}
    </button>
  );
};
