import React, { useRef, useState, useEffect } from "react";
import "./otp.css";
import { OtpInputProps } from "./otp-types";
import { focusInput, processPastedValue } from "./otp-utils";

/**
 * OTP Input component for entering one-time passwords or PIN codes.
 * Accessible and keyboard-friendly.
 */
export const OtpInput: React.FC<OtpInputProps> = ({
  length = 6,
  onChange,
  autoFocus = true,
}) => {
  const [values, setValues] = useState<string[]>(Array(length).fill(""));
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  /**
   * Handles value change of a single input.
   */
  const handleChange = (val: string, index: number) => {
    const cleanVal = val.replace(/\D/g, "").charAt(0);
    if (!cleanVal) return;

    const newValues = [...values];
    newValues[index] = cleanVal;
    setValues(newValues);
    onChange?.(newValues.join(""));

    // 👇 Vai avanti anche se il valore è identico
    const nextIndex = Math.min(index + 1, length - 1);
    if (index !== length - 1) {
      focusInput(inputsRef.current, nextIndex);
    }
  };

  /**
   * Handles keyboard navigation and deletion.
   */
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    const key = e.key;

    if (key === "Backspace") {
      e.preventDefault();
      if (values[index]) {
        const newValues = [...values];
        newValues[index] = "";
        setValues(newValues);
        onChange?.(newValues.join(""));
      } else if (index > 0) {
        focusInput(inputsRef.current, index - 1);
      }
    }

    if (key === "ArrowLeft" && index > 0) {
      e.preventDefault();
      focusInput(inputsRef.current, index - 1);
    }

    if (key === "ArrowRight" && index < length - 1) {
      e.preventDefault();
      focusInput(inputsRef.current, index + 1);
    }
  };

  /**
   * Handles input focus and ensures content selection.
   */
  const handleFocus = (index: number) => {
    const input = inputsRef.current[index];
    if (input) {
      setTimeout(() => {
        input.select();
      }, 0);
    }
  };

  /**
   * Handles pasting a full OTP into the inputs.
   */
  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("Text");
    const newValues = processPastedValue(pasted, length);
    setValues(newValues);
    onChange?.(newValues.join(""));

    const nextIndex = Math.min(pasted.length, length - 1);
    focusInput(inputsRef.current, nextIndex);
  };

  /**
   * Auto-focus on first input if enabled.
   */
  useEffect(() => {
    if (autoFocus) {
      focusInput(inputsRef.current, 0);
    }
  }, [autoFocus]);

  return (
    <div className="otp-container" role="group" aria-label="Enter OTP code">
      {Array.from({ length }).map((_, i) => (
        <input
          key={i}
          ref={(el) => {
            inputsRef.current[i] = el;
          }}
          type="text"
          inputMode="numeric"
          autoComplete="one-time-code"
          aria-label={`Digit ${i + 1}`}
          className="otp-input"
          maxLength={1}
          value={values[i]}
          onChange={(e) => handleChange(e.target.value, i)}
          onKeyDown={(e) => handleKeyDown(e, i)}
          onPaste={handlePaste}
          onFocus={() => handleFocus(i)}
        />
      ))}
    </div>
  );
};
