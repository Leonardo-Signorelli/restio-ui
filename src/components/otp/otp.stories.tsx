import React from "react";
import { Meta, StoryObj } from "@storybook/react-vite";
import { OTPComponent as OTP } from "./otp";
import { OTPProps } from "./otp-types";

/**
 * Meta information for the stories
 */
const meta: Meta<typeof OTP> = {
  title: "Components/OTP",
  component: OTP,
  tags: ["autodocs"],
  argTypes: {
    length: {
      control: { type: "number", min: 4, max: 8, step: 1 },
      description: "Number of OTP digits",
    },
    onChange: {
      action: "changed",
      description: "Callback when OTP value changes",
    },
    onComplete: {
      action: "completed",
      description: "Callback when OTP is fully entered",
    },
    ariaLabel: {
      control: "text",
      description: "ARIA label for accessibility",
    },
    className: {
      control: "text",
      description: "Additional CSS class",
    },
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
A customizable One-Time Password (OTP) input component with:
- Numeric-only input
- Paste support
- Keyboard navigation
- WCAG/WAI-ARIA compliance
- Value modification and overwrite
- Configurable length
        `,
      },
    },
  },
};

export default meta;

/**
 * Base template for stories
 */
const Template: StoryObj<OTPProps> = {
  render: (args) => <OTP {...args} />,
};

/**
 * Default OTP with 6 digits
 */
export const Default = {
  ...Template,
  args: {
    length: 6,
  },
};

/**
 * OTP with 4 digits
 */
export const FourDigits = {
  ...Template,
  args: {
    length: 4,
  },
  name: "4-Digit OTP",
};

/**
 * OTP with 8 digits
 */
export const EightDigits = {
  ...Template,
  args: {
    length: 8,
  },
  name: "8-Digit OTP",
};

/**
 * OTP with custom ARIA label
 */
export const WithCustomAriaLabel = {
  ...Template,
  args: {
    ariaLabel: "Please enter your verification code",
  },
  name: "With Custom ARIA Label",
};
