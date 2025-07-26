import React, { useId } from "react";
import { Icon } from "../../utility-components/icon/icon";
import { InputProps } from "./input-types";
import styles from "./input.module.css";
import { Label } from "../../utility-components/label/label";
import { HelperText } from "../../utility-components/helper-text/helper-text";

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
  disabled,
  size,
}) => {
  const inputId = useId();
  const helperId = `${inputId}-helper`;

  const inputClass = {
    fieldWrapper: styles["rst-inputField-wrapper"],
    inputWrapper: `${styles["rst-input-wrapper"]}  ${size ? styles[`rst-input-${size}`] : ""}`,
    input: `${styles["rst-input"]}`,
  };

  const inputStyle = {
    fieldWrapper: anchorName ? { anchorName } : undefined,
  };

  const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    onChange?.(event.target.value);
  };

  return (
    <div className={inputClass.fieldWrapper}>
      {label && <Label label={label} id={inputId} disabled={disabled}></Label>}

      <span className={inputClass.inputWrapper} style={inputStyle}>
        {leadingIcon && <Icon icon={leadingIcon} disabled={disabled} />}
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
          disabled={disabled}
        />
        {trailingIcon && <Icon icon={trailingIcon} />}
      </span>

      {helperText && <HelperText helperText={helperText} id={helperId} disabled={disabled} />}
    </div>
  );
};
