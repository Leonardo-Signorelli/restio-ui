/**
 * OTP Component Props
 */
export interface OTPProps {
  /**
   * Length of the OTP code (number of input fields)
   * @default 6
   */
  length?: number;
  
  /**
   * Callback triggered when OTP value changes
   * @param value - The current OTP value
   */
  onChange?: (value: string) => void;
  
  /**
   * Callback triggered when OTP is completely filled
   * @param value - The complete OTP value
   */
  onComplete?: (value: string) => void;
  
  /**
   * ARIA label for the OTP container
   * @default 'One-time password input'
   */
  ariaLabel?: string;
  
  /**
   * Class name for the container
   */
  className?: string;
}