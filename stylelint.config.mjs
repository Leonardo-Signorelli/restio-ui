export default {
  extends: ["stylelint-config-standard"],
  rules: {
    "selector-max-id": 0,
    "declaration-block-no-duplicate-properties": true,
    "no-duplicate-selectors": true,
    "selector-max-specificity": "0,4,0",
    "declaration-block-no-redundant-longhand-properties": true,
    "custom-property-pattern": [
      "^rst-[a-zA-Z0-9]+(-[a-zA-Z0-9_]+)*$",
      {
        message: (name) =>
          `Expected custom property name "${name}" to have a token pattern`,
      },
    ],
    "selector-class-pattern": [
      "^rst-[a-zA-Z0-9]+(-[a-zA-Z0-9_]+)*$",
      {
        message: (name) =>
          `Expected selector class "${name}" to have a token pattern`,
      },
    ],
    "declaration-property-value-disallowed-list": {
      message: "Background property values must not contain any whitespace.",
      background: ["/^((?!\\s).)*$/"],
    },
    "order/properties-order": [
      // Positioning
      "position",
      "top",
      "right",
      "bottom",
      "left",
      "z-index",

      // Box Model
      "width",
      "height",
      "padding",
      "padding-top",
      "padding-left",
      "padding-right",
      "padding-bottom",
      "margin",
      "border",
      "border-top",
      "border-left",
      "border-right",
      "border-bottom",
      "outline",
      "outline-offset",

      // Layout
      "display",
      "flex",
      "flex-grow",
      "flex-shrink",
      "flex-basis",
      "grid",
      "grid-template-columns",
      "grid-template-rows",
      "gap",
      "justify-content",
      "align-items",
      "align-self",

      // Typography
      "font",
      "font-size",
      "font-weight",
      "font-family",
      "line-height",
      "color",
      "text-align",

      // Visual
      "background",
      "box-shadow",
      "opacity",
      "visibility",
    ],
  },
  ignoreFiles: ["dist/**/*.css", "**/*.scss"],
};
