"use client";

import React, { useState, useEffect } from "react";
import type { IconProps } from "./icon-types";
import styles from "./icon.module.css";

export const Icon: React.FC<IconProps> = React.memo(({ icon, disabled, state }) => {
  const [svgContent, setSvgContent] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const internalSvgPath = `assets/svg/${icon}.svg`;

  const iconClass = {
    icon: `${state ? styles[`rst-icon-state-${state}`] : ""} ${styles["rst-icon"]}`,
  };

  useEffect(() => {
    const fetchSvg = async () => {
      try {
        setIsLoading(true);
        setError(false);

        const response = await fetch(internalSvgPath);

        if (!response.ok) {
          throw new Error(`Failed to fetch SVG: ${response.status}`);
        }

        const svgText = await response.text();

        // Validate that the content is actually SVG
        if (!svgText.trim().startsWith("<svg")) {
          throw new Error("Invalid SVG content");
        }

        // Modify SVG to match ReactSVG behavior
        let modifiedSvg = svgText;

        // Set fixed dimensions to 1rem (matching original)
        modifiedSvg = modifiedSvg.replace(/<svg([^>]*)>/, (match, attributes) => {
          let newAttributes = attributes;
          // Remove existing width/height and add our own
          newAttributes = newAttributes.replace(/width="[^"]*"/g, "");
          newAttributes = newAttributes.replace(/height="[^"]*"/g, "");
          newAttributes += ` width="1rem" height="1rem"`;

          // Add role and aria-disabled
          newAttributes += ` role="application"`;
          if (disabled) {
            newAttributes += ` aria-disabled="true"`;
          }

          // Add className
          if (iconClass.icon) {
            const hasClass = newAttributes.includes("class=");
            if (hasClass) {
              newAttributes = newAttributes.replace(/class="([^"]*)"/, `class="$1 ${iconClass.icon}"`);
            } else {
              newAttributes += ` class="${iconClass.icon}"`;
            }
          }

          return `<svg${newAttributes}>`;
        });

        setSvgContent(modifiedSvg);
      } catch (err) {
        setError(true);
        console.error("Failed to load SVG:", err);
      } finally {
        setIsLoading(false);
      }
    };

    if (icon) {
      fetchSvg();
    }
  }, [icon, disabled, iconClass.icon, internalSvgPath]);

  if (isLoading) {
    return (
      <svg width="1rem" height="1rem" role="application" aria-disabled={disabled} className={iconClass.icon}>
        {/* Loading placeholder */}
        <rect width="100%" height="100%" fill="currentColor" opacity="0.3" />
      </svg>
    );
  }

  if (error) {
    return (
      <svg width="1rem" height="1rem" role="application" aria-disabled={disabled} className={iconClass.icon}>
        {/* Error placeholder */}
        <rect width="100%" height="100%" fill="none" stroke="currentColor" strokeWidth="1" />
        <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontSize="0.5rem">
          X!X
        </text>
      </svg>
    );
  }

  return <div dangerouslySetInnerHTML={{ __html: svgContent }} style={{ display: "inline-block", lineHeight: 0 }} />;
});

Icon.displayName = "Icon";
