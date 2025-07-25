import React from "react";
import { ReactSVG } from "react-svg";
import { IconProps } from "./icon-types";
import styles from "./icon.module.css";

export const Icon: React.FC<IconProps> = React.memo(({ icon, disabled, state }) => {
  const internalSvgPath = `assets/svg/${icon}.svg`;

  const iconClass = {
    icon: `${state ? styles[`rst-icon-state-${state}`] : ""} ${styles["rst-icon"]}`,
  };

  return (
    <>
      <ReactSVG src={internalSvgPath} wrapper="svg" role="application" width={"1rem"} height={"1rem"} aria-disabled={disabled} className={iconClass.icon} />
    </>
  );
});
