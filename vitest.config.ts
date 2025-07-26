// vitest.config.ts
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    include: ["src/components/**/*.test.tsx"],
    setupFiles: ["./vitest.setup.ts"],
    globals: true,
  },
});