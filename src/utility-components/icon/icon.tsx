import React from "react";
import { ReactSVG } from "react-svg";
import { IconProps } from "./icon-types";
import styles from "./icon.module.css";

export const Icon: React.FC<IconProps> = React.memo(({ icon, disabled }) => {
  const internalSvgPath = `assets/svg/${icon}.svg`;

  const iconClass = {
    icon: styles["rst-icon"],
  };

  return (
    <>
      <ReactSVG
        src={internalSvgPath}
        wrapper="svg"
        role="application"
        width={"1rem"}
        height={"1rem"}
        // tabIndex={0}
        aria-disabled={disabled}
        className={iconClass.icon}
      />
    </>
  );
});
