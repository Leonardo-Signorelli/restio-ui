/**
 * Label
 * HelperText
 * Input
 * Chip
 * Icon
 */

import { Icon } from "../../utility-components/icon/icon";
import { InputProps } from "./input-types";
import styles from "./input.module.css";

export const Input: React.FC<InputProps> = ({
  value,
  leadingIcon,
  trailingIcon,
  onKeyDown,
  anchorName,
  label,
  helperText,
}) => {
  const inputClass = {
    fieldWrapper: `${styles["rst-inputField-wrapper"]}`,
    inputWrapper: `${styles["rst-input-wrapper"]}`,
    input: `${styles["rst-input"]}`,
  };
  //   ${styles[section.horizontal ? "smp-layout-section-horizontal" : "smp-layout-section-vertical"]} ${gridTemplateClass}

  return (
    <span className={inputClass.fieldWrapper}>
      {label && <label>{label}</label>}
      <span className={inputClass.inputWrapper}>
        {leadingIcon && <Icon icon={leadingIcon} />}
        <input
          value={value}
          className={inputClass.input}
          onKeyDown={onKeyDown}
          style={{ anchorName: `${anchorName}` }}
        />
        {trailingIcon && <Icon icon={trailingIcon} />}
      </span>
      {helperText && <span>{helperText}</span>}
    </span>
  );
};
