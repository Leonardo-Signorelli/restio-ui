import { Button } from "../button";
import { Meta, StoryObj } from "@storybook/react-vite";
import { ButtonProps } from "../button-types";

const meta: Meta<ButtonProps> = {
  title: "Components/Button/Multi",
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

export const Variant: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "1rem" }}>
      <Button {...args} variant="base">
        Base Button
      </Button>
      <Button {...args} variant="primary">
        Primary Button
      </Button>
      <Button {...args} variant="danger">
        Ghost Button
      </Button>
    </div>
  ),
  args: {
    value: "Button",
  },
};

export const Ghost: Story = {
  args: {
    children: "Ghost Button",
    variant: "danger",
    value: "Button",
  },
};
