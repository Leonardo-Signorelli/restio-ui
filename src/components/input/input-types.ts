import { RefObject } from "react";
import { Size } from "../../types/global-types";

export interface InputProps {
    /**
     * Value of the input field
     */
    value: string
    /**
     * Leading icon to display before the input field
     */
    leadingIcon?: string;
    
    /**
     * Trailing icon to display after the input field
     */
    trailingIcon?: string;
    
    /**
     * Placeholder text for the input field
     */
    placeholder?: string;
    
    /**
     * ARIA label for the input field
     */
    ariaLabel?: string;
    
    /**
     * Callback triggered when the input value changes
     * @param value - The current value of the input field
     */
    onChange?: (value: string) => void;


    onKeyDown?: (e: React.KeyboardEvent) => void;

    anchorName?: string; // Anchor name variable

    /**
     * Label of the field
     */
    label?: string

    helperText?: string;

    ref?: RefObject<HTMLInputElement | null>;

    /**
     * Manage disabled state
     */
    disabled?: boolean

        /**
     * Manage disabled state
     */
    size?: Size
}