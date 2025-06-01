import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"


export default defineConfig({
  test: {
    // Vitest picks up the Vite config here
    environment: "jsdom",
    css: true,
  },
  plugins: [react()],
})
