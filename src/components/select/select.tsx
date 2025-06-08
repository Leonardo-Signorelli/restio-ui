import React, { useState, useId } from "react";
import { Input } from "../input/input";
import { List } from "../list/list";

export const Select: React.FC<SelectProps> = ({
  value,
  //   onChange,
  options = [],
  multiActiveIndex,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [comboOptions, setComboOptions] = useState<[]>(options);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  //   const [activeIndex, setActiveIndex] = useState<string[]>([value]);

  const listboxId = useId();

  //   useClickOutside(targetRef, () => setIsOpen(false));

  //   useFocusTrap(isOpen, targetRef);

  //   const selectOption = (option: DataCellOption) => {
  //     onChange?.(option.id, option.label);
  //     const index = comboOptions.findIndex((o) => o.id === option.id);
  //     setSelectedIndex(index);
  //     setActiveIndex([option.id]);
  //     setIsOpen(false);
  //   };

  const handleListKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsOpen(false);
      setSelectedIndex(-1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      //   handleTextfieldClick();
      setIsOpen(true);
    }
  };

  //   const handleTextfieldClick = () => {
  //     if (fun && onOptionsRequest) {
  //       onOptionsRequest(fun, undefined).then((data) => {
  //         setComboOptions(data);
  //         setSelectedIndex(data.length > 0 ? 0 : -1);
  //         setIsOpen(true);
  //       });
  //     }
  //   };

  return (
    <div
      role="combobox"
      aria-expanded={isOpen}
      aria-controls={listboxId}
      aria-owns={listboxId}
      data-component="combobox"
    >
      <Input
        value={value}
        onKeyDown={handleKeyDown}
        anchorName="--input-anchor"
      />
      {isOpen && (
        <List
          id={listboxId}
          options={comboOptions}
          selectedIndex={selectedIndex}
          //   activeIndex={multiActiveIndex || activeIndex}
          //   onClick={selectOption}
          onKeyDown={handleListKeyDown}
        ></List>
      )}
    </div>
  );
};

export default Select;
