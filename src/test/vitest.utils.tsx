import "@testing-library/jest-dom";
import { vi } from "vitest";

// Mock SVG elements for jsdom
Object.defineProperty(window, "SVGSVGElement", {
  writable: true,
  value: class SVGSVGElement extends Element {
    constructor() {
      super();
    }
  },
});

// Mock other SVG-related elements if needed
Object.defineProperty(window, "SVGElement", {
  writable: true,
  value: class SVGElement extends Element {
    constructor() {
      super();
    }
  },
});

// Mock the svg-injector if you're using it
vi.mock("@tanem/svg-injector", () => ({
  SVGInjector: vi.fn(),
  default: vi.fn(),
}));

// Alternative: Mock your Icon component entirely
vi.mock("@/components/icon", () => ({
  Icon: ({ name, ...props }: any) => <div data-testid={`icon-${name}`} role="img" aria-label={name} {...props} />,
}));
