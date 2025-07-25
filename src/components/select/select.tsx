import React, { useState, useId } from "react";
import { List } from "../list/list";
import { SelectProps } from "./select-types";
import { Option } from "./../../types/global-types";
import { Button } from "../button/button";
import { Label } from "../../utility-components/label/label";
import { HelperText } from "../../utility-components/helper-text/helper";
import styles from "./select.module.css";

export const Select: React.FC<SelectProps> = ({ value, onChange, options, multiActiveIndex, label, helperText, disabled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const [activeIndex, setActiveIndex] = useState<string[]>([value]);

  const listboxId = useId();
  const helperId = `${listboxId}-helper`;
  const anchorName = `--anchor-${listboxId.replace(/[^a-zA-Z0-9-_]/g, "")}`;

  const selectOption = (option: Option) => {
    onChange?.(option.value);
    const index = options.findIndex((o) => o.value === option.value);
    setSelectedIndex(index);
    setActiveIndex([option.value]);
    setIsOpen(false);
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
      {label && <Label label={label} id={listboxId} disabled={disabled}></Label>}
      <span className={selectClass.selectWrapper}>
        <Button
          value={value || "Select an option"}
          anchorName={anchorName}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Aria-label"
          trailingVisual="expand"
          disabled={disabled}
        ></Button>
        {isOpen && (
          <List
            id={listboxId}
            options={options}
            selectedIndex={selectedIndex}
            activeIndex={multiActiveIndex || activeIndex}
            onClick={selectOption}
            onKeyDown={handleListKeyDown}
            anchorName={anchorName}
          ></List>
        )}
      </span>
      {helperText && <HelperText helperText={helperText} id={helperId} disabled={disabled} />}
    </div>
  );
};

export default Select;
