import type { Meta, ReactRenderer, StoryObj } from "@storybook/react-vite";
import { useArgs } from "storybook/preview-api";
import { ArgsStoryFn } from "storybook/internal/types";
import { Select } from "./select";

const meta = {
  title: "Components/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const ControlledCombobox: ArgsStoryFn<ReactRenderer, SelectProps> = ({
  ...args
}) => {
  const [, setArgs] = useArgs();

  const handleChange = (value: string, optionalDisplayValue?: string) => {
    setArgs({
      bindValue: value,
      optionalDisplayValue: optionalDisplayValue,
    });
  };

  return <Select {...args} onChange={handleChange} />;
};

export const Default: Story = {
  args: {
    options: [
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
    ],
  },
  render: ControlledCombobox,
};
