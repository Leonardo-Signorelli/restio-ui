// __tests__/Label.test.tsx

import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Label } from "./label";

describe("Label", () => {
  it("renders the label text", () => {
    render(<Label id="username" label="Username" />);
    expect(screen.getByText("Username")).toBeInTheDocument();
  });

  it("sets the correct htmlFor attribute", () => {
    render(<Label id="email" label="Email Address" />);
    expect(screen.getByText("Email Address")).toHaveAttribute("for", "email");
  });

  it("sets aria-disabled when disabled", () => {
    render(<Label id="name" label="Name" disabled />);
    expect(screen.getByText("Name")).toHaveAttribute("aria-disabled", "true");
  });

  it("does not set aria-disabled when not disabled", () => {
    render(<Label id="age" label="Age" />);
    expect(screen.getByText("Age")).not.toHaveAttribute("aria-disabled");
  });

  it("matches snapshot", () => {
    const { container } = render(<Label id="snapshot" label="Snapshot Test" disabled />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
