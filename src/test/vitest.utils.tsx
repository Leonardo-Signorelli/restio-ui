import "@testing-library/jest-dom";
import { vi } from "vitest";
import React from "react";

// Mock react-svg library
vi.mock("react-svg", () => ({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ReactSVG: ({ src, role, "aria-disabled": ariaDisabled, ...props }: any) => {
    // Extract icon name from src path
    const iconName = src?.split("/").pop()?.replace(".svg", "") || "unknown";

    return React.createElement("div", {
      "data-testid": `icon-${iconName}`,
      role: role || "img",
      "aria-label": iconName,
      "aria-disabled": ariaDisabled,
      ...props,
    });
  },
}));

// Mock SVG elements for jsdom (backup in case other libraries need it)
Object.defineProperty(window, "SVGSVGElement", {
  writable: true,
  value: class SVGSVGElement extends Element {
    constructor() {
      super();
    }
  },
});

Object.defineProperty(window, "SVGElement", {
  writable: true,
  value: class SVGElement extends Element {
    constructor() {
      super();
    }
  },
});
