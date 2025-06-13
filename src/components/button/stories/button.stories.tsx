import { Button } from "../button";
import { Meta, StoryObj } from "@storybook/react-vite";
import { ButtonProps } from "../button-types";

const meta: Meta<ButtonProps> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "ghost"],
    },
    children: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<ButtonProps>;

export const Default: Story = {
  args: {
    value: "Button",
  },
};
