// list-utils.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { highlightMatch, getFullOptions, handleKeyNavigation } from "./list-utils";
import { ListProps } from "./list-types";
import { List } from "./list";
import type { KeyboardEvent } from "react";
import "@testing-library/jest-dom";

const options = [{ value: "apple" }, { value: "banana" }, { value: "orange" }];

describe("List Component", () => {
  // --- 1. Focus Management ---
  it("should focus the input on mount", () => {
    render(<List id="test-list" options={options} />);
    const input = screen.getByPlaceholderText("Search...");
    expect(document.activeElement).toBe(input);
  });

  it("should update localSelectedIndex when selectedIndex prop changes", () => {
    const { rerender } = render(<List id="test-list" options={options} selectedIndex={0} />);
    expect(screen.getAllByRole("option")[0]).toHaveAttribute("aria-selected", "true");

    rerender(<List id="test-list" options={options} selectedIndex={1} />);
    expect(screen.getAllByRole("option")[1]).toHaveAttribute("aria-selected", "true");
  });

  // --- 2. Filtering & Create Option UI ---
  it("should show 'No elements' when no options and no onCreate", () => {
    render(<List id="test-list" options={[]} />);
    expect(screen.getByText("No elements")).toBeInTheDocument();
  });

  // --- 5. Rendering & Accessibility ---
  it("should render each option with correct aria attributes and roles", () => {
    render(<List id="test-list" options={options} />);
    const optionsRendered = screen.getAllByRole("option");

    optionsRendered.forEach((option, index) => {
      expect(option).toHaveAttribute("role", "option");
      expect(option).toHaveAttribute("aria-selected", "false"); // none selected initially
      expect(option).toHaveAttribute("id", options[index].value);
    });
  });

  it("should apply selected class and aria-selected when item selected", () => {
    render(<List id="test-list" options={options} selectedIndex={1} />);
    const optionsRendered = screen.getAllByRole("option");

    expect(optionsRendered[1]).toHaveClass("selected-item");
    expect(optionsRendered[1]).toHaveAttribute("aria-selected", "true");
  });
});

describe("highlightMatch utils", () => {
  it("returns plain text when no query is provided", () => {
    expect(highlightMatch("Hello World", "")).toBe("Hello World");
  });

  it("returns plain text if no match is found", () => {
    expect(highlightMatch("Hello World", "xyz")).toBe("Hello World");
  });

  it("wraps matched text in <strong>", () => {
    const { container } = render(<>{highlightMatch("Hello World", "wor")}</>);
    expect(container.innerHTML).toBe("<span>Hello <strong>Wor</strong>ld</span>");
  });

  it("is case-insensitive", () => {
    const { container } = render(<>{highlightMatch("React", "rea")}</>);
    expect(container.innerHTML).toBe("<span><strong>Rea</strong>ct</span>");
  });
});

describe("getFullOptions utils", () => {
  const options: ListProps["options"] = [{ value: "apple" }, { value: "banana" }, { value: "orange" }];

  it("filters options by query", () => {
    const result = getFullOptions(options, "ap");
    expect(result.filteredOptions).toEqual([{ value: "apple" }]);
    expect(result.fullOptions).toEqual([{ value: "apple" }]);
    expect(result.showCreateItem).toBe(false);
  });

  it("adds create option if no exact match and onCreate is defined", () => {
    const result = getFullOptions(options, "grape", vi.fn());
    expect(result.filteredOptions).toEqual([]);
    expect(result.fullOptions).toEqual([{ value: "__create__grape" }]);
    expect(result.showCreateItem).toBe(true);
  });

  it("does not add create option if there's an exact match", () => {
    const result = getFullOptions(options, "banana", vi.fn());
    expect(result.filteredOptions).toEqual([{ value: "banana" }]);
    expect(result.fullOptions).toEqual([{ value: "banana" }]);
    expect(result.showCreateItem).toBe(false);
  });
});

describe("handleKeyNavigation utils", () => {
  const options = [{ value: "one" }, { value: "two" }, { value: "three" }];

  let selectedIndex = 1;
  const setLocalSelectedIndex = vi.fn((i: number) => {
    selectedIndex = i;
  });
  const onClick = vi.fn();
  const onCreate = vi.fn();
  const onKeyDown = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    selectedIndex = 1;
  });

  function simulateKey(key: string, full = options) {
    const event = {
      key,
      preventDefault: vi.fn(),
      stopPropagation: vi.fn(),
    } as unknown as React.KeyboardEvent;
    handleKeyNavigation({
      e: event,
      localSelectedIndex: selectedIndex,
      setLocalSelectedIndex,
      filteredOptions: options,
      fullOptions: full,
      onClick,
      onCreate,
      onKeyDown,
    });
    return event;
  }

  it("navigates down", () => {
    simulateKey("ArrowDown");
    expect(setLocalSelectedIndex).toHaveBeenCalledWith(2);
  });

  it("navigates up", () => {
    simulateKey("ArrowUp");
    expect(setLocalSelectedIndex).toHaveBeenCalledWith(0);
  });

  it("wraps to start on down at end", () => {
    selectedIndex = 2;
    simulateKey("ArrowDown");
    expect(setLocalSelectedIndex).toHaveBeenCalledWith(0);
  });

  it("calls onClick on Enter", () => {
    simulateKey("Enter");
    expect(onClick).toHaveBeenCalledWith(options[1]);
  });

  it("calls onCreate on Enter if create item is selected", () => {
    const createOptions = [{ value: "__create__NewItem" }];
    selectedIndex = 0;

    const mockEvent = {
      key: "Enter",
      preventDefault: vi.fn(),
      stopPropagation: vi.fn(),
    } as Partial<KeyboardEvent<Element>> as KeyboardEvent<Element>;

    handleKeyNavigation({
      e: mockEvent,
      localSelectedIndex: selectedIndex,
      setLocalSelectedIndex,
      filteredOptions: [],
      fullOptions: createOptions,
      onClick,
      onCreate,
      onKeyDown,
    });

    expect(onCreate).toHaveBeenCalledWith("NewItem");
  });

  it("calls onKeyDown always", () => {
    simulateKey("Escape");
    expect(onKeyDown).toHaveBeenCalled();
  });

  it("calls preventDefault and stopPropagation on Escape", () => {
    const event = simulateKey("Escape");
    expect(event.preventDefault).toHaveBeenCalled();
    expect(event.stopPropagation).toHaveBeenCalled();
  });
});
