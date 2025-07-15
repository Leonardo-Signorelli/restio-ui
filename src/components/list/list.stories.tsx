import type { Meta, StoryObj } from "@storybook/react-vite";
import { List } from "./list";
import { Option } from "../../types/global-types";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/List",
  component: List,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockedOptions: Option[] = [
  {
    value: "option1",
  },
  {
    value: "option2",
  },
  {
    value: "option3",
  },
];

export const Default: Story = {
  args: {
    options: mockedOptions,
  },
};
