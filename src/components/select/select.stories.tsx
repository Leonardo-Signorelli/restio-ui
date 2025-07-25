import type { Meta, ReactRenderer, StoryObj } from "@storybook/react-vite";
import { useArgs } from "storybook/preview-api";
import { ArgsStoryFn } from "storybook/internal/types";
import { Select } from "./select";
import { SelectProps } from "./select-types";

const meta = {
  title: "Components/Select Multi-Single",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const ControlledSelect: ArgsStoryFn<ReactRenderer, SelectProps> = ({ ...args }) => {
  const [currentArgs, updateArgs] = useArgs();

  const handleChange = (value: string | string[]) => {
    updateArgs({ value });
  };

  return <Select {...args} value={currentArgs.value} onChange={handleChange} />;
};

export const Default: Story = {
  args: {
    value: "option1",
    options: [{ value: "option1" }, { value: "option2" }, { value: "option3" }],
  },
  render: ControlledSelect,
};

export const FullSelect: Story = {
  args: {
    value: "option1",
    helperText: "The list of options helps you choose one",
    label: "Option Selector",
    options: [{ value: "option1" }, { value: "option2" }, { value: "option3" }],
  },
  render: ControlledSelect,
};

export const Disabled: Story = {
  args: {
    value: "option1",
    helperText: "The list of options helps you choose one",
    label: "Option Selector",
    disabled: true,
    options: [{ value: "option1" }, { value: "option2" }],
  },
  render: ControlledSelect,
};

export const MultipleSelect: Story = {
  args: {
    value: ["option1", "option3"],
    multiple: true,
    helperText: "Select multiple options",
    label: "Multi Option Selector",
    options: [{ value: "option1" }, { value: "option2" }, { value: "option3" }, { value: "option4" }],
  },
  render: ControlledSelect,
};
