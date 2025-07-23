import { vi } from "vitest";

// Mock react-svg
vi.mock("../../utility-components/icon/icon", () => ({
  Icon: () => <span data-testid="icon" role="application" />,
}));
