import { Icon } from "../icon/icon";
import { HelperTextProps } from "./helper-text-types";
import styles from "./helper-text.module.css";

export const HelperText: React.FC<HelperTextProps> = ({ id, helperText, disabled, state }) => {
  const computedIcon = state == "success" ? "check" : state == "warning" ? "warning" : "error";

  const helperTextClass = {
    helperText: `${state ? styles[`rst-helper-text-${state}`] : ""} ${styles["rst-helper-text"]}`,
  };

  return (
    <span id={id} aria-live="polite" className={helperTextClass.helperText} aria-disabled={disabled}>
      {state && <Icon icon={computedIcon} state={state} disabled={disabled}></Icon>}
      {helperText}
    </span>
  );
};
