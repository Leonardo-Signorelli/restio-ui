import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react-vite";
import { ButtonGroup } from "./button-group";

const meta: Meta<typeof ButtonGroup> = {
  title: "Components/ButtonGroup",
  component: ButtonGroup,
  tags: ["autodocs"],
  args: {
    options: [{ value: "apple" }, { value: "banana" }, { value: "cherry" }],
    variant: "base",
    size: "medium",
    alignContent: "center",
  },
};

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

export const Default: Story = {
  render: (args) => {
    const [selected, setSelected] = useState("banana");

    return (
      <ButtonGroup
        {...args}
        value={selected}
        onChange={(val) => {
          console.log("Selected:", val);
          setSelected(val);
        }}
      />
    );
  },
};

export const Disabled: Story = {
  render: (args) => {
    const [selected, setSelected] = useState("banana");

    return (
      <ButtonGroup
        {...args}
        value={selected}
        disabled
        onChange={(val) => {
          console.log("Selected:", val);
          setSelected(val);
        }}
      />
    );
  },
};
