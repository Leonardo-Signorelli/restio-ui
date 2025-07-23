import { LabelProps } from "./label-types";
import styles from "./label.module.css";

export const Label: React.FC<LabelProps> = ({ label, id, disabled }) => {
  const labelClass = {
    label: styles["rst-label"],
  };

  return (
    <label htmlFor={id} className={labelClass.label} aria-disabled={disabled}>
      {label}
    </label>
  );
};
