import { useEffect, useRef, useState } from "react";
import { ListProps } from "./list-types";
import { Input } from "../input/input";
import { useVirtualListScroll } from "../../hooks/useVirtualListScroll";
import { Icon } from "../../utility-components/icon/icon";
import style from "./list.module.css";
import { getFullOptions, handleKeyNavigation, highlightMatch } from "./list-utils";

export const List: React.FC<ListProps> = ({
  id,
  options,
  ref,
  activeIndex = [],
  width,
  anchorName,
  onClick,
  onKeyDown,
  onCreate,
  multiple = false,
  selectedIndex = -1,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [filterValue, setFilterValue] = useState<string>("");
  const listItemHeight = 24;
  const [localSelectedIndex, setLocalSelectedIndex] = useState<number>(selectedIndex);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    setLocalSelectedIndex(selectedIndex);
  }, [selectedIndex]);

  const { filteredOptions, fullOptions } = getFullOptions(options, filterValue, onCreate);

  const { virtualItems, containerProps, innerProps, scrollToIndex } = useVirtualListScroll({
    items: fullOptions,
    itemHeight: listItemHeight,
    containerHeight: 200,
    overscan: 5,
  });

  useEffect(() => {
    if (Array.isArray(activeIndex) && activeIndex.length > 0) {
      const firstActive = filteredOptions.findIndex((o) => o.value === activeIndex[0]);
      if (firstActive !== -1) scrollToIndex(firstActive);
    }
  }, [filteredOptions, activeIndex, scrollToIndex]);

  const listClass = {
    wrapper: `${style["rst-list"]}`,
    input: `${style["rst-list-input"]}`,
    container: `${style["rst-list-container"]}`,
    virtualScroll: `${style["rst-list-virtualScroll"]}`,
    listItem: `${style["rst-list-listItem"]}`,
    listItemCreate: `${style["rst-list-listItem-create"]}`,
    noElements: `${style["rst-list-noElements"]}`,
  };

  return (
    <div id={id} ref={ref as React.Ref<HTMLDivElement>} className={listClass.wrapper} data-component="list" style={{ width, positionAnchor: anchorName }}>
      <div className={listClass.input}>
        <Input
          value={filterValue}
          placeholder="Search..."
          onChange={setFilterValue}
          onKeyDown={(e) =>
            handleKeyNavigation({
              e,
              localSelectedIndex,
              setLocalSelectedIndex,
              filteredOptions,
              fullOptions,
              onClick,
              onCreate,
              onKeyDown,
            })
          }
          ref={inputRef}
        />
      </div>

      <div
        {...containerProps}
        className={listClass.container}
        tabIndex={0}
        role="listbox"
        aria-label="List"
        aria-multiselectable={multiple}
        onKeyDown={(e) =>
          handleKeyNavigation({
            e,
            localSelectedIndex,
            setLocalSelectedIndex,
            filteredOptions,
            fullOptions,
            onClick,
            onCreate,
            onKeyDown,
          })
        }
        aria-activedescendant={localSelectedIndex >= 0 && localSelectedIndex < filteredOptions.length ? filteredOptions[localSelectedIndex]?.value : undefined}
      >
        <div {...innerProps} className={listClass.virtualScroll}>
          {filteredOptions.length === 0 && !onCreate ? (
            <div className={listClass.noElements}>No elements</div>
          ) : (
            virtualItems.map(({ item, index, offsetTop }) => {
              const isCreateItem = item.value.startsWith("__create__");
              const displayValue = isCreateItem ? item.value.replace("__create__", "") : item.value;
              const isActive = activeIndex.includes(item.value);

              return (
                <li
                  key={index}
                  role="option"
                  id={item.value}
                  aria-selected={localSelectedIndex === index}
                  tabIndex={-1}
                  className={`${listClass.listItem} ${isActive ? "selected-item" : ""}`}
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
            })
          )}
        </div>
      </div>
    </div>
  );
};
