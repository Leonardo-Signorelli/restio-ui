export interface OtpInputProps {
  /** Number of input fields for the OTP */
  length?: number;
  /** Callback fired on OTP value change */
  onChange?: (value: string) => void;
  /** Automatically focus the first input */
  autoFocus?: boolean;
}