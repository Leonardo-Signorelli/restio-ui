import React from "react";
import { ListProps } from "./list-types";

/**
 * Restituisce un elemento con parti della stringa `text` evidenziate in <strong>
 * se corrispondono alla `query`.
 */
export function highlightMatch(text: string, query: string): React.ReactNode {
  if (!query) return text;

  const lowerText = text.toLowerCase();
  const lowerQuery = query.toLowerCase();
  const matchIndex = lowerText.indexOf(lowerQuery);

  if (matchIndex === -1) return text;

  const before = text.slice(0, matchIndex);
  const match = text.slice(matchIndex, matchIndex + query.length);
  const after = text.slice(matchIndex + query.length);

  return (
    <span>
      {before}
      <strong>{match}</strong>
      {after}
    </span>
  );
}

export const getFullOptions = (options: ListProps["options"], filterValue: string, onCreate?: ListProps["onCreate"]) => {
  const filtered = options.filter((opt) => opt.value.toLowerCase().includes(filterValue.toLowerCase()));
  const hasExactMatch = filtered.some((opt) => opt.value.toLowerCase() === filterValue.toLowerCase());

  const showCreateItem = onCreate && filterValue && !hasExactMatch;
  const full = showCreateItem ? [...filtered, { value: `__create__${filterValue}` }] : filtered;

  return {
    filteredOptions: filtered,
    fullOptions: full,
    showCreateItem,
  };
};

export const handleKeyNavigation = ({
  e,
  localSelectedIndex,
  setLocalSelectedIndex,
  filteredOptions,
  fullOptions,
  onClick,
  onCreate,
  onKeyDown,
}: {
  e: React.KeyboardEvent;
  localSelectedIndex: number;
  setLocalSelectedIndex: (i: number) => void;
  filteredOptions: ListProps["options"];
  fullOptions: ListProps["options"];
  onClick?: ListProps["onClick"];
  onCreate?: ListProps["onCreate"];
  onKeyDown?: ListProps["onKeyDown"];
}) => {
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
