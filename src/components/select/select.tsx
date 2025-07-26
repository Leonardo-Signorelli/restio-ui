// Select.tsx
import React, { useState, useId } from "react";
import { List } from "../list/list";
import { SelectProps } from "./select-types";
import { Option } from "./../../types/global-types";
import { Button } from "../button/button";
import { Label } from "../../utility-components/label/label";
import { HelperText } from "../../utility-components/helper-text/helper-text";
import styles from "./select.module.css";

export const Select: React.FC<SelectProps> = ({ value, onChange, options, multiActiveIndex, label, helperText, disabled, multiple = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const [activeIndex, setActiveIndex] = useState<string[]>(Array.isArray(value) ? value : [value]);

  const listboxId = useId();
  const helperId = `${listboxId}-helper`;
  const anchorName = `--anchor-${listboxId.replace(/[^a-zA-Z0-9-_]/g, "")}`;

  const selectOption = (option: Option) => {
    if (multiple) {
      const current = Array.isArray(value) ? [...value] : [];
      const exists = current.includes(option.value);
      const newValues = exists ? current.filter((v) => v !== option.value) : [...current, option.value];

      onChange?.(newValues);
      setActiveIndex(newValues);
    } else {
      onChange?.(option.value);
      const index = options.findIndex((o) => o.value === option.value);
      setSelectedIndex(index);
      setActiveIndex([option.value]);
      setIsOpen(false);
    }
  };

  const handleListKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsOpen(false);
      setSelectedIndex(-1);
    }
  };

  const selectClass = {
    fieldWrapper: styles["rst-field-select-wrapper"],
    selectWrapper: styles["rst-select-wrapper"],
  };

  const getDisplayValue = () => {
    if (multiple && Array.isArray(value)) {
      const labels = options.filter((o) => value.includes(o.value)).map((o) => o.value);
      return labels.length > 0 ? labels.join(", ") : "Select options";
    } else {
      const selected = options.find((o) => o.value === value);
      return selected?.value || "Select an option";
    }
  };

  return (
    <div
      role="combobox"
      aria-expanded={isOpen}
      aria-controls={listboxId}
      aria-owns={listboxId}
      aria-disabled={disabled}
      data-component="combobox"
      className={selectClass.fieldWrapper}
    >
      {label && <Label label={label} id={listboxId} disabled={disabled} />}
      <span className={selectClass.selectWrapper}>
        <Button
          value={getDisplayValue()}
          anchorName={anchorName}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle Select"
          trailingVisual="expand"
          disabled={disabled}
        />
        {isOpen && (
          <List
            id={listboxId}
            options={options}
            activeIndex={multiActiveIndex || activeIndex}
            onClick={selectOption}
            onKeyDown={handleListKeyDown}
            anchorName={anchorName}
            selectedIndex={selectedIndex}
            multiple={multiple}
          />
        )}
      </span>
      {helperText && <HelperText helperText={helperText} id={helperId} disabled={disabled} />}
    </div>
  );
};

export default Select;
