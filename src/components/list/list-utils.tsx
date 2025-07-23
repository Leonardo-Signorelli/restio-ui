import React from "react";
import { ListProps } from "./list-types";

/**
 * Highlights the part of the `text` that matches the `query` using a <strong> tag.
 *
 * @param text - The original string to search in.
 * @param query - The substring to highlight if found in the text.
 * @returns A React node with the matched part wrapped in <strong>, or the plain text if no match.
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

/**
 * Filters the provided options based on the filter string, and appends a "create new item" option
 * if the filter does not exactly match any existing option and `onCreate` is provided.
 *
 * @param options - The list of selectable options.
 * @param filterValue - The string used to filter the options.
 * @param onCreate - Optional callback used to enable the "create" feature.
 * @returns An object containing the filtered options, the final options (possibly including a create item),
 *          and a flag indicating whether the create item is shown.
 */
export const getFullOptions = (options: ListProps["options"], filterValue: string, onCreate?: ListProps["onCreate"]) => {
  const filtered = options.filter((opt) => opt.value.toLowerCase().includes(filterValue.toLowerCase()));
  const hasExactMatch = filtered.some((opt) => opt.value.toLowerCase() === filterValue.toLowerCase());

  const showCreateItem = Boolean(onCreate && filterValue && !hasExactMatch);
  const full = showCreateItem ? [...filtered, { value: `__create__${filterValue}` }] : filtered;

  return {
    filteredOptions: filtered,
    fullOptions: full,
    showCreateItem,
  };
};

/**
 * Handles keyboard navigation within a list component, including arrow navigation, selection (Enter),
 * and escape behavior. Also triggers `onClick`, `onCreate`, or `onKeyDown` as needed.
 *
 * @param params - An object containing the keyboard event and relevant list control functions and data.
 * @param params.e - The keyboard event.
 * @param params.localSelectedIndex - The current selected index in the list.
 * @param params.setLocalSelectedIndex - Setter to update the selected index.
 * @param params.filteredOptions - The options shown after filtering.
 * @param params.fullOptions - The full list of options (may include "create new" entry).
 * @param params.onClick - Callback when an item is selected.
 * @param params.onCreate - Callback when a "create new" action is triggered.
 * @param params.onKeyDown - Optional additional key down handler.
 */
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
