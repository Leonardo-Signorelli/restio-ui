// __tests__/HelperText.test.tsx

import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { HelperText } from "./helper-text";

describe("HelperText", () => {
  it("renders the helper text", () => {
    render(<HelperText id="test-id" helperText="This is help" />);
    expect(screen.getByText("This is help")).toBeInTheDocument();
  });

  it("renders correct icon for 'success' state", () => {
    render(<HelperText id="test-id" helperText="Success" state="success" />);
    expect(screen.getByTestId("icon")).toHaveTextContent("check");
  });

  it("renders correct icon for 'warning' state", () => {
    render(<HelperText id="test-id" helperText="Warning" state="warning" />);
    expect(screen.getByTestId("icon")).toHaveTextContent("warning");
  });

  it("renders correct icon for any other state (e.g., 'danger')", () => {
    render(<HelperText id="test-id" helperText="Error" state="danger" />);
    expect(screen.getByTestId("icon")).toHaveTextContent("error");
  });

  it("sets correct aria attributes", () => {
    render(<HelperText id="test-id" helperText="Accessible help" disabled />);
    const span = screen.getByText("Accessible help");
    expect(span).toHaveAttribute("aria-live", "polite");
    expect(span).toHaveAttribute("aria-disabled", "true");
  });

  it("does not render icon when state is undefined", () => {
    render(<HelperText id="test-id" helperText="No icon here" />);
    expect(screen.queryByTestId("icon")).not.toBeInTheDocument();
  });
});
