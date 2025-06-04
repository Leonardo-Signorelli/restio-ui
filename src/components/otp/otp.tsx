import React, {
  useState,
  useRef,
  useEffect,
  KeyboardEvent,
  ClipboardEvent,
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
  const [otp, setOtp] = useState<string[]>(Array(length).fill(""));
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const focusInput = (index: number) => {
    inputRefs.current[index]?.focus();
    inputRefs.current[index]?.select();
  };

  const handleInput = (e: React.FormEvent<HTMLInputElement>, index: number) => {
    const value = e.currentTarget.value;

    if (!/^\d*$/.test(value)) return;

    // Forza l'aggiornamento anche se il valore è lo stesso
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    const otpValue = newOtp.join("");
    onChange?.(otpValue);

    if (value && index < length - 1) {
      focusInput(index + 1);
    }

    if (otpValue.length === length) {
      onComplete?.(otpValue);
    }
  };

  const handleChange = (value: string, index: number) => {
    console.log(value);
    if (!/^\d*$/.test(value)) return;

    // Se il valore è uguale a quello già presente ma non vuoto,
    // forziamo lo spostamento al campo successivo
    if (value === otp[index] && value !== "") {
      if (index < length - 1) {
        focusInput(index + 1);
      }
      return;
    }

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    const otpValue = newOtp.join("");
    onChange?.(otpValue);

    // Move to next field when a digit is entered
    if (value && index < length - 1) {
      focusInput(index + 1);
    }

    if (otpValue.length === length) {
      onComplete?.(otpValue);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    // Prevent cursor movement when arrow keys are pressed
    if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(e.key)) {
      e.preventDefault();
    }

    if (e.key === "Backspace") {
      if (!otp[index] && index > 0) {
        // Move to previous input on backspace if current is empty
        focusInput(index - 1);
      } else if (otp[index]) {
        // Clear current input but stay there
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);
        onChange?.(newOtp.join(""));
      }
    } else if (e.key === "ArrowLeft" && index > 0) {
      // Move left
      focusInput(index - 1);
    } else if (e.key === "ArrowRight" && index < length - 1) {
      // Move right
      focusInput(index + 1);
    } else if (e.key === "Delete" && index < length - 1) {
      // Move to next input on delete
      focusInput(index + 1);
    }
  };

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text/plain").replace(/\D/g, "");
    if (!pasteData) return;

    const newOtp = [...otp];
    let pasteIndex = 0;

    for (let i = 0; i < length && pasteIndex < pasteData.length; i++) {
      newOtp[i] = pasteData[pasteIndex];
      pasteIndex++;
    }

    setOtp(newOtp);
    const otpValue = newOtp.join("");
    onChange?.(otpValue);

    if (otpValue.length === length) {
      onComplete?.(otpValue);
    }

    // Focus the last filled input
    const lastFilledIndex = Math.min(pasteData.length - 1, length - 1);
    focusInput(lastFilledIndex);
  };

  const handleFocus = (index: number) => {
    inputRefs.current[index]?.select();
  };

  useEffect(() => {
    focusInput(0);
  }, []);

  useEffect(() => {
    const filledIndex = otp.findIndex((value) => value === "");
    if (filledIndex !== -1 && filledIndex !== 0) {
      focusInput(filledIndex);
    }
  }, [otp]);

  return (
    <div
      className={`otp-container ${className}`}
      aria-label={ariaLabel}
      role="group"
    >
      {otp.map((value, index) => (
        <input
          key={index}
          ref={(el) => (inputRefs.current[index] = el as HTMLInputElement)}
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={1}
          value={value}
          onChange={(e) => handleChange(e.target.value, index)}
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
