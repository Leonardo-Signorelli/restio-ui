import React, {
  useState,
  useRef,
  useEffect,
  KeyboardEvent,
  ClipboardEvent,
  useCallback,
} from "react";
import "./otp.css";
import { OTPProps } from "./otp-types";

export const OTPComponent: React.FC<OTPProps> = ({
  length = 6,
  onChange,
  onComplete,
  ariaLabel = "One-time password input",
  className = "",
}) => {
  const [otp, setOtp] = useState<string>("");
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const focusInput = useCallback(
    (index: number) => {
      if (index >= 0 && index < length) {
        inputRefs.current[index]?.focus();
        inputRefs.current[index]?.select();
      }
    },
    [length]
  );

  const handleInput = (e: React.FormEvent<HTMLInputElement>, index: number) => {
    const value = e.currentTarget.value;

    if (!/^\d*$/.test(value)) return;

    let newOtp = otp;
    if (index >= newOtp.length) {
      newOtp = newOtp.padEnd(index, "");
    }
    newOtp = newOtp.substring(0, index) + value + newOtp.substring(index + 1);
    newOtp = newOtp.substring(0, length);

    setOtp(newOtp);
    onChange?.(newOtp);

    // Sposta il focus solo se non siamo all'ultimo campo
    if (value && index < length - 1) {
      focusInput(index + 1);
    }

    if (newOtp.length === length) {
      onComplete?.(newOtp);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(e.key)) {
      e.preventDefault();

      if (e.key === "ArrowLeft" && index > 0) {
        focusInput(index - 1);
      } else if (e.key === "ArrowRight" && index < length - 1) {
        focusInput(index + 1);
      }
    }

    if (e.key === "Backspace") {
      if (!otp[index] && index > 0) {
        focusInput(index - 1);
      } else if (otp[index]) {
        const newOtp = otp.substring(0, index) + otp.substring(index + 1);
        setOtp(newOtp);
        onChange?.(newOtp);
      }
    } else if (e.key === "Delete" && index < length - 1) {
      focusInput(index + 1);
    }
  };

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text/plain").replace(/\D/g, "");
    if (!pasteData) return;

    const newOtp = pasteData.substring(0, length);
    setOtp(newOtp);
    onChange?.(newOtp);

    if (newOtp.length === length) {
      onComplete?.(newOtp);
    }

    const lastFilledIndex = Math.min(pasteData.length, length) - 1;
    focusInput(lastFilledIndex);
  };

  const handleFocus = (index: number) => {
    inputRefs.current[index]?.select();
  };

  // Focus management
  useEffect(() => {
    // Solo quando l'OTP è vuoto o non completo
    if (otp.length < length) {
      focusInput(Math.min(otp.length, length - 1));
    }
  }, [focusInput, length, otp]);

  return (
    <div
      className={`otp-container ${className}`}
      aria-label={ariaLabel}
      role="group"
    >
      {Array.from({ length }).map((_, index) => (
        <input
          key={index}
          ref={(el) => {
            inputRefs.current[index] = el as HTMLInputElement;
          }}
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={1}
          value={otp[index] || ""}
          onInput={(e) => handleInput(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onPaste={handlePaste}
          onFocus={() => handleFocus(index)}
          className="otp-input"
          aria-label={`Digit ${index + 1} of ${length}`}
          autoComplete="one-time-code"
        />
      ))}
    </div>
  );
};
