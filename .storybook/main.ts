import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  framework: "@storybook/react-vite",
  staticDirs: ['../public'],
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
    typescript: {
    check: true,
    reactDocgen: 'react-docgen-typescript',
  },
  "addons": [
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest"
  ],
};
export default config;