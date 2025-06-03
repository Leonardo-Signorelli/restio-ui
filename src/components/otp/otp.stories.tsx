import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react-vite";
import { OtpInput } from "./otp";

const meta: Meta<typeof OtpInput> = {
  title: "Components/OtpInput",
  component: OtpInput,
  tags: ["autodocs"],
  args: {
    length: 6,
    autoFocus: true,
  },
};

export default meta;
type Story = StoryObj<typeof OtpInput>;

/**
 * Default story: OTP input with 6 fields, with a simple display of the current value.
 */
export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState("");
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          alignItems: "center",
        }}
      >
        <OtpInput {...args} onChange={setValue} />
        <p aria-live="polite">
          Current OTP value: <strong>{value}</strong>
        </p>
      </div>
    );
  },
};

/**
 * 4-digit OTP story for short PINs.
 */
export const FourDigits: Story = {
  args: {
    length: 4,
    autoFocus: false,
  },
  render: (args) => {
    const [value, setValue] = useState("");
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          alignItems: "center",
        }}
      >
        <OtpInput {...args} onChange={setValue} />
        <p aria-live="polite">
          PIN: <strong>{value}</strong>
        </p>
      </div>
    );
  },
};
