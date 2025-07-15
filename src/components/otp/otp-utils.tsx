/**
 * Focuses the input at the specified index in the ref array.
 * @param refs - Array of input element references.
 * @param index - Index of the input to focus.
 */
export function focusInput(
  refs: Array<HTMLInputElement | null>,
  index: number
) {
  const input = refs[index];
  if (input) input.focus();
}

/**
 * Processes a pasted string and returns an array of characters to fill the OTP input.
 * Only numeric digits are retained.
 * @param pasted - The pasted string.
 * @param length - The length of the OTP input.
 * @returns An array of characters to set as input values.
 */
export function processPastedValue(pasted: string, length: number): string[] {
  const clean = pasted.replace(/\D/g, "");
  return Array.from({ length }, (_, i) => clean[i] || "");
}
