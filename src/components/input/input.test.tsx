import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Input } from "./input";

describe("Input component", () => {
  it("renders with label and placeholder", () => {
    render(<Input value="" onChange={() => {}} label="Username" placeholder="Enter username" />);

    expect(screen.getByLabelText("Username")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter username")).toBeInTheDocument();
  });

  it("calls onChange when input value changes", () => {
    const handleChange = vi.fn();
    render(<Input value="" onChange={handleChange} ariaLabel="input" />);

    const input = screen.getByLabelText("input");
    fireEvent.change(input, { target: { value: "test" } });

    expect(handleChange).toHaveBeenCalledWith("test");
  });

  it("renders leading and trailing icons if provided", () => {
    render(<Input value="" onChange={() => {}} leadingIcon="user" trailingIcon="check" ariaLabel="with-icons" />);

    const icons = screen.getAllByRole("application"); // Assuming Icon component uses role="img"
    expect(icons.length).toBe(2);
  });

  it("renders helper text when provided", () => {
    render(<Input value="" onChange={() => {}} helperText="This is a helper" ariaLabel="input-helper" />);

    expect(screen.getByText("This is a helper")).toBeInTheDocument();
  });

  it("respects the disabled state", () => {
    render(<Input value="test" onChange={() => {}} disabled ariaLabel="disabled-input" />);

    expect(screen.getByLabelText("disabled-input")).toBeDisabled();
  });

  it("calls onKeyDown when key is pressed", () => {
    const handleKeyDown = vi.fn();
    render(<Input value="test" onChange={() => {}} onKeyDown={handleKeyDown} ariaLabel="key-input" />);

    const input = screen.getByLabelText("key-input");
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

    expect(handleKeyDown).toHaveBeenCalled();
  });
});
