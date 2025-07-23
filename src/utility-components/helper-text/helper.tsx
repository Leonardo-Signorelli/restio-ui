import { HelperTextProps } from "./helper-text-types";
import styles from "./helper-text.module.css";

export const HelperText: React.FC<HelperTextProps> = ({ id, helperText, disabled }) => {
  const helperTextClass = {
    helperText: styles["rst-helper-text"],
  };
  return (
    <span id={id} aria-live="polite" className={helperTextClass.helperText} aria-disabled={disabled}>
      {helperText}
    </span>
  );
};
