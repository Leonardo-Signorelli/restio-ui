import React, { useId } from "react";
import { Icon } from "../../utility-components/icon/icon";
import { InputProps } from "./input-types";
import styles from "./input.module.css";

export const Input: React.FC<InputProps> = ({
  value,
  onChange,
  onKeyDown,
  anchorName,
  label,
  helperText,
  leadingIcon,
  trailingIcon,
  placeholder,
  ariaLabel,
  ref,
}) => {
  const inputId = useId();
  const helperId = `${inputId}-helper`;

  const inputClass = {
    fieldWrapper: styles["rst-inputField-wrapper"],
    inputWrapper: styles["rst-input-wrapper"],
    input: styles["rst-input"],
  };

  const inputStyle = {
    fieldWrapper: anchorName ? { anchorName } : undefined,
  };

  const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    onChange?.(event.target.value);
  };

  return (
    <div className={inputClass.fieldWrapper}>
      {label && <label htmlFor={inputId}>{label}</label>}

      <span className={inputClass.inputWrapper} style={inputStyle}>
        {leadingIcon && <Icon icon={leadingIcon} />}
        <input
          id={inputId}
          value={value}
          className={inputClass.input}
          placeholder={placeholder}
          onChange={onChangeHandler}
          onKeyDown={onKeyDown}
          aria-label={ariaLabel}
          aria-describedby={helperText ? helperId : undefined}
          ref={ref}
        />
        {trailingIcon && <Icon icon={trailingIcon} />}
      </span>

      {helperText && (
        <span id={helperId} aria-live="polite">
          {helperText}
        </span>
      )}
    </div>
  );
};
