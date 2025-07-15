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
  },
  ignoreFiles: ["dist/**/*.css", "**/*.scss"],
};
