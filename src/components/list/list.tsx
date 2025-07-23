import { useEffect, useRef, useState } from "react";
import { ListProps } from "./list-types";
import { Input } from "../input/input";
import { useVirtualListScroll } from "../../hooks/useVirtualListScroll";
import { Icon } from "../../utility-components/icon/icon";
import style from "./list.module.css";
import { highlightMatch, useFilteredOptions } from "./list-utils";

export const List: React.FC<ListProps> = ({
  id,
  options,
  ref,
  selectedIndex = null, // current outline element
  activeIndex = [], // active element
  width,
  onClick,
  onKeyDown,
  onCreate,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [filterValue, setFilterValue] = useState<string>("");
  const listItemHeight: number = 24;
  const [localSelectedIndex, setLocalSelectedIndex] = useState<number>(selectedIndex !== null ? selectedIndex : -1);

  useEffect(() => {
    inputRef.current?.focus(); // Focus on mount
  }, []);

  // Filter the options based on filter value
  const filteredOptions = useFilteredOptions(options, filterValue);
  const hasExactMatch = filteredOptions.some((opt) => opt.value.toLowerCase() === filterValue.toLowerCase());

  const showCreateItem = onCreate && filterValue && !hasExactMatch;
  const fullOptions = showCreateItem ? [...filteredOptions, { value: `__create__${filterValue}` }] : filteredOptions;

  // Use our virtual scroll hook
  const { virtualItems, containerProps, innerProps, scrollToIndex } = useVirtualListScroll({
    items: fullOptions,
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
    if (localSelectedIndex >= 0 && localSelectedIndex < filteredOptions.length) {
      scrollToIndex(localSelectedIndex);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localSelectedIndex, filteredOptions]);

  const handleKeyNavigation = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();

      let newIndex = localSelectedIndex;

      if (e.key === "ArrowDown") {
        newIndex = localSelectedIndex < filteredOptions.length - 1 ? localSelectedIndex + 1 : 0;
      } else if (e.key === "ArrowUp") {
        newIndex = localSelectedIndex > 0 ? localSelectedIndex - 1 : filteredOptions.length - 1;
      }

      setLocalSelectedIndex(newIndex);
    } else if (e.key === "Enter") {
      const item = fullOptions[localSelectedIndex];
      if (item?.value.startsWith("__create__")) {
        onCreate?.(item.value.replace("__create__", ""));
      } else if (item) {
        onClick?.(item);
      }
    } else if (e.key === "Escape") {
      e.preventDefault();
      e.stopPropagation();
    }
    onKeyDown?.(e);
  };

  const handleListKeyDown = handleKeyNavigation;

  // Handle class for list
  const listClass = {
    wrapper: `${style["rst-list"]}`,
    input: `${style["rst-list-input"]}`,
    container: `${style["rst-list-container"]}`,
    virtualScroll: `${style["rst-list-virtualScroll"]}`,
    listItem: `${style["rst-list-listItem"]}`,
    listItemCreate: `${style["rst-list-listItem-create"]}`,
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
        <Input value={filterValue} placeholder="Search..." onChange={setFilterValue} onKeyDown={handleKeyNavigation} ref={inputRef} />
      </div>

      <div
        {...containerProps}
        className={listClass.container}
        tabIndex={0}
        role="listbox"
        aria-label="List"
        onKeyDown={handleListKeyDown}
        aria-activedescendant={localSelectedIndex >= 0 && localSelectedIndex < filteredOptions.length ? filteredOptions[localSelectedIndex]?.value : undefined}
      >
        <div {...innerProps} className={listClass.virtualScroll}>
          {filteredOptions.length === 0 && !onCreate ? (
            <div className={style["rst-list-noElements"]}>No elements</div>
          ) : (
            <>
              {virtualItems.map(({ item, index, offsetTop }) => {
                const isCreateItem = item.value.startsWith("__create__");
                const displayValue = isCreateItem ? item.value.replace("__create__", "") : item.value;
                const isActive = activeIndex.includes(item.value);
                return (
                  <li
                    key={index}
                    role="option"
                    id={item.value}
                    aria-selected={localSelectedIndex === index ? "true" : "false"}
                    tabIndex={-1}
                    className={`${listClass.listItem} ${localSelectedIndex === index ? "selected-item" : ""}`}
                    aria-label={displayValue}
                    style={{
                      height: `${listItemHeight}px`,
                      lineHeight: `calc(${listItemHeight}px - 2*2px)`,
                      transform: `translateY(${offsetTop}px)`,
                    }}
                    onClick={() => {
                      if (isCreateItem) {
                        onCreate?.(displayValue);
                      } else {
                        onClick?.(item);
                        setLocalSelectedIndex(index);
                      }
                    }}
                  >
                    {isCreateItem ? (
                      <span className={listClass.listItemCreate}>
                        <Icon icon="plus" /> <strong>{displayValue}</strong>
                      </span>
                    ) : (
                      <>
                        {highlightMatch(displayValue, filterValue)}
                        {isActive && <Icon icon="check" />}
                      </>
                    )}
                  </li>
                );
              })}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
