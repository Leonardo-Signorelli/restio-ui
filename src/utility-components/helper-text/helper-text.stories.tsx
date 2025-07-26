import { Meta, StoryObj } from "@storybook/react-vite";
import { HelperText } from "./helper-text";

const meta: Meta<typeof HelperText> = {
  title: "Components/HelperText",
  component: HelperText,
  tags: ["autodocs"],
  args: {
    id: "helper-text-id",
    helperText: "This is some helper text.",
  },
};

export default meta;

type Story = StoryObj<typeof HelperText>;

export const Default: Story = {};

export const SuccessState: Story = {
  args: {
    state: "success",
    helperText: "Looks good!",
  },
};

export const DangerState: Story = {
  args: {
    state: "danger",
    helperText: "There is an error in the input.",
  },
};

export const Warning: Story = {
  args: {
    state: "warning",
    helperText: "There is a warning. Keep an eye in the input.",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    helperText: "This field is disabled.",
  },
};
