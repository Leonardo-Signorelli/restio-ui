import React, { useState, useId } from "react";
import { List } from "../list/list";
import { SelectProps } from "./select-types";
import { Option } from "./../../types/global-types";
import { Button } from "../button/button";

export const Select: React.FC<SelectProps> = ({ value, onChange, options, multiActiveIndex }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const [activeIndex, setActiveIndex] = useState<string[]>([value]);

  const listboxId = useId();

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

  return (
    <div role="combobox" aria-expanded={isOpen} aria-controls={listboxId} aria-owns={listboxId} data-component="combobox">
      <Button
        value={value || "Select an option"}
        anchorName="--input-anchor"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Aria-label"
        trailingVisual="expand"
      ></Button>
      {isOpen && (
        <List
          id={listboxId}
          options={options}
          selectedIndex={selectedIndex}
          activeIndex={multiActiveIndex || activeIndex}
          onClick={selectOption}
          onKeyDown={handleListKeyDown}
        ></List>
      )}
    </div>
  );
};

export default Select;
