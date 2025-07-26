import { vi } from "vitest";

// Mock react-svg
vi.mock("../../icon/icon", () => ({
  Icon: ({ icon }: { readonly icon: string }) => <span data-testid="icon">{icon}</span>,
}));
vi.mock("@tanem/svg-injector", () => ({
  default: () => Promise.resolve(),
}));
