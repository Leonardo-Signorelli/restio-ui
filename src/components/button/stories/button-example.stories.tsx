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

export const Variant: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "1rem" }}>
      <Button {...args} variant="base">
        Base Button
      </Button>
      <Button {...args} variant="invisible">
        Invisible Button
      </Button>
      <Button {...args} variant="primary">
        Primary Button
      </Button>
      <Button {...args} variant="danger">
        Danger Button
      </Button>
      <Button {...args} variant="link">
        Link Button
      </Button>
    </div>
  ),
  args: {
    value: "Button",
  },
};

export const Sizing: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "1rem" }}>
      <Button {...args} size="small">
        Small Button
      </Button>
      <Button {...args} size="medium">
        Medium Button
      </Button>
      <Button {...args} size="large">
        Large Button
      </Button>
    </div>
  ),
  args: {
    value: "Button",
  },
};

export const VisualIcon: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "1rem" }}>
      <Button {...args} leadingVisual="check">
        Leading Visual
      </Button>
      <Button {...args} trailingVisual="check">
        Trailing Visual
      </Button>
    </div>
  ),
  args: {
    value: "Button",
  },
};
