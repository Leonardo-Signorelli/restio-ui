import type { Meta, StoryObj } from "@storybook/react-vite";
import { List } from "./list";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "BasicComponents/List",
  component: List,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockedOptions = [
  {
    id: "option_1",
    label: "First option",
  },
  {
    id: "option_2",
    label: "Second option",
  },
  {
    id: "option_3",
    label: "Third option",
  },
];

export const Default: Story = {
  args: {
    options: mockedOptions,
  },
};
