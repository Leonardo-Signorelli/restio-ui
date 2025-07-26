import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { ButtonGroup } from "./button-group";
import { ButtonGroupProps } from "./button-group-types";

const options: ButtonGroupProps["options"] = [{ value: "apple" }, { value: "banana" }, { value: "cherry" }];

describe("ButtonGroup", () => {
  it("renders all buttons", () => {
    render(<ButtonGroup options={options} />);
    expect(screen.getByText("apple")).toBeInTheDocument();
    expect(screen.getByText("banana")).toBeInTheDocument();
    expect(screen.getByText("cherry")).toBeInTheDocument();
  });

  it("calls onChange when a button is clicked", () => {
    const handleChange = vi.fn();
    render(<ButtonGroup options={options} onChange={handleChange} />);
    const cherryButton = screen.getByText("cherry");

    fireEvent.click(cherryButton);
    expect(handleChange).toHaveBeenCalledWith("cherry");
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("does not call onChange for disabled buttons", () => {
    const handleChange = vi.fn();
    const disabledOptions = [...options, { value: "disabled", disabled: true }];
    render(<ButtonGroup options={disabledOptions} onChange={handleChange} />);

    const disabledButton = screen.getByText("disabled");
    expect(disabledButton).toBeDisabled();

    fireEvent.click(disabledButton);
    expect(handleChange).not.toHaveBeenCalled();
  });

  it("handles disabled prop at group level", () => {
    render(<ButtonGroup options={options} disabled />);
    const anyButton = screen.getByText("banana");
    expect(anyButton).toBeDisabled();
  });
});
