import { useEffect, useRef, useState } from "react";
import { ListProps } from "./list-types";
import { Input } from "../input/input";
import { useVirtualListScroll } from "../../hooks/useVirtualListScroll";
import { Icon } from "../../utility-components/icon/icon";
import style from "./list.module.css";

export const List: React.FC<ListProps> = ({
  id,
  options,
  ref,
  selectedIndex = null, // current outline element
  activeIndex = [], // active element
  width,
  onClick,
  onKeyDown,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [filterValue, setFilterValue] = useState<string>("");
  const listItemHeight: number = 24;
  const [localSelectedIndex, setLocalSelectedIndex] = useState<number>(
    selectedIndex !== null ? selectedIndex : -1
  );

  useEffect(() => {
    inputRef.current?.focus(); // Focus on mount
  }, []);

  // Filter the options based on filter value
  const filteredOptions = filterValue
    ? options.filter((o) =>
        o.value.toLowerCase().includes(filterValue.toLowerCase())
      )
    : options;

  const onListTextfieldChange = (value: string) => {
    setFilterValue(value);
  };

  // Use our virtual scroll hook
  const { virtualItems, containerProps, innerProps, scrollToIndex } =
    useVirtualListScroll({
      items: filteredOptions,
      itemHeight: listItemHeight,
      containerHeight: 200,
      overscan: 5,
    });

  useEffect(() => {
    if (selectedIndex !== null && selectedIndex !== localSelectedIndex) {
      setLocalSelectedIndex(selectedIndex);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedIndex]);

  useEffect(() => {
    if (
      localSelectedIndex >= 0 &&
      localSelectedIndex < filteredOptions.length
    ) {
      scrollToIndex(localSelectedIndex);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localSelectedIndex, filteredOptions]);

  const handleKeyNavigation = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();

      let newIndex = localSelectedIndex;

      if (e.key === "ArrowDown") {
        newIndex =
          localSelectedIndex < filteredOptions.length - 1
            ? localSelectedIndex + 1
            : 0;
      } else if (e.key === "ArrowUp") {
        newIndex =
          localSelectedIndex > 0
            ? localSelectedIndex - 1
            : filteredOptions.length - 1;
      }

      setLocalSelectedIndex(newIndex);
    } else if (e.key === "Enter") {
      if (
        localSelectedIndex >= 0 &&
        localSelectedIndex < filteredOptions.length
      ) {
        onClick?.(filteredOptions[localSelectedIndex]);
      }
    } else if (e.key === "Escape") {
      e.preventDefault();
      e.stopPropagation();
    }
    if (onKeyDown) {
      onKeyDown(e);
    }
  };

  // Filter text field keyboard handler
  const handleFilterKeyDown = (e: React.KeyboardEvent) => {
    handleKeyNavigation(e);
  };

  // List container keyboard handler
  const handleListKeyDown = (e: React.KeyboardEvent) => {
    handleKeyNavigation(e);
  };

  // Handle class for list
  const listClass = {
    wrapper: `${style["rst-list"]}`,
    input: `${style["rst-list-input"]}`,
    container: `${style["rst-list-container"]}`,
    virtualScroll: `${style["rst-list-virtualScroll"]}`,
    listItem: `${style["rst-list-listItem"]}`,
  };

  return (
    <div
      id={id}
      ref={ref as React.Ref<HTMLDivElement>}
      className={listClass.wrapper}
      data-component="list"
      style={{
        width: width,
      }}
    >
      <div className={listClass.input}>
        <Input
          value={filterValue}
          placeholder="Search..."
          onChange={onListTextfieldChange}
          onKeyDown={handleFilterKeyDown}
          ref={inputRef}
        />
      </div>

      <div
        {...containerProps}
        className={listClass.container}
        tabIndex={0}
        role="listbox"
        aria-label="List"
        onKeyDown={handleListKeyDown}
        aria-activedescendant={
          localSelectedIndex >= 0 && localSelectedIndex < filteredOptions.length
            ? filteredOptions[localSelectedIndex]?.value
            : undefined
        }
      >
        <div {...innerProps} className={listClass.virtualScroll}>
          {filteredOptions.length < 1 ? (
            <div className={style["rst-list-noElements"]}>No elements</div>
          ) : (
            virtualItems.map(({ item, index, offsetTop }) => {
              const isActive = activeIndex.includes(item.value);
              return (
                <li
                  key={index}
                  role="option"
                  id={item.value}
                  aria-selected={
                    localSelectedIndex === index ? "true" : "false"
                  }
                  tabIndex={-1}
                  className={`${listClass.listItem} ${localSelectedIndex === index ? "selected-item" : ""}`}
                  aria-label={item.value}
                  style={{
                    height: `${listItemHeight}px`,
                    lineHeight: `calc(${listItemHeight}px - 2*2px)`,
                    transform: `translateY(${offsetTop}px)`,
                  }}
                  onClick={() => {
                    onClick?.(item);
                    setLocalSelectedIndex(index);
                  }}
                >
                  {item.value}
                  {isActive && <Icon icon="check" />}
                </li>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};
