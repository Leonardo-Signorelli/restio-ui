import { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
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
  render: (args) => {
    const [value, setValue] = useState(args.value ?? "");

    return <Input {...args} value={value} onChange={setValue} />;
  },
  args: {
    value: "Default input",
    leadingIcon: "check",
    trailingIcon: "close",
  },
};

export const FullInput: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.value ?? "");

    return <Input {...args} value={value} onChange={setValue} />;
  },
  args: {
    value: "Default input",
    leadingIcon: "check",
    trailingIcon: "close",
    helperText: "Helper text down here",
    label: "Label",
    placeholder: "Write something...",
  },
};

export const Disabled: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.value ?? "");

    return <Input {...args} value={value} onChange={setValue} />;
  },
  args: {
    value: "Default input",
    leadingIcon: "check",
    trailingIcon: "close",
    helperText: "Helper text down here",
    label: "Label",
    placeholder: "Write something...",
    disabled: true,
  },
};
