import React, { useState } from "react";
import { Button } from "../button/button";
import { ButtonGroupProps } from "./button-group-types";
import styles from "./button-group.module.css";

export const ButtonGroup: React.FC<ButtonGroupProps> = ({ options, value, onChange, size = "medium", disabled = false }) => {
  const [internalValue, setInternalValue] = useState(value || options[0].value);

  const activeValue = value ?? internalValue;

  const handleClick = (val: string) => {
    if (!value) {
      setInternalValue(val);
    }
    onChange?.(val);
  };

  return (
    <div className={styles["rst-button-group"]}>
      {options.map((option) => (
        <Button
          key={option.value}
          value={option.value}
          leadingVisual={option.leadingVisual}
          variant={option.value === activeValue ? "primary" : "base"}
          size={size}
          disabled={disabled || option.disabled}
          onClick={() => handleClick(option.value)}
        />
      ))}
    </div>
  );
};
