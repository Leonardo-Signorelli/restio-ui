import React from "react";
import { ReactSVG } from "react-svg";
import { IconProps } from "./icon-types";

export const Icon: React.FC<IconProps> = React.memo(({ icon }) => {
  const internalSvgPath = `assets/svg/${icon}.svg`;

  return (
    <>
      <ReactSVG
        src={internalSvgPath}
        wrapper="svg"
        role="application"
        width={"1rem"}
        height={"1rem"}
        tabIndex={0}
      />
    </>
  );
});
