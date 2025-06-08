import { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "./input";
import { InputProps } from "./input-types";

const meta: Meta<InputProps> = {
  title: "Components/Input",
  component: Input,
  argTypes: {},
};

export default meta;
type Story = StoryObj<InputProps>;

export const Default: Story = {
  args: {
    value: "Default input",
    leadingIcon: "search",
    trailingIcon: "close",
  },
};
