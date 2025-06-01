import "@testing-library/jest-dom"

// styles
import "./src/styles/token.css"
import "./src/styles/globals.css"
import { configure } from "@testing-library/dom"

configure({
  testIdAttribute: "smp-id",
})
