import { useState } from "react";
import "./colorStories.css";

export default {
  title: "Design System/Colors",
};

const colorGroups = {
  Backgrounds: [
    "--rst-bgColor-default",
    "--rst-bgColor-0",
    "--rst-bgColor-primary",
  ],
  Interactive: [
    "--rst-interactive-default",
    "--rst-interactive-hover",
    "--rst-interactive-active",
    "--rst-interactive-disabled",
  ],
  Borders: [
    "--rst-border-default",
    "--rst-border-muted",
    "--rst-border-subtle",
    "--rst-border-primary",
  ],
  Solid: [
    "--rst-solid-neutral",
    "--rst-solid-primary",
    "--rst-solid-positive",
    "--rst-solid-warning",
    "--rst-solid-danger",
  ],
  Text: [
    "--rst-text-on-bg",
    "--rst-text-muted",
    "--rst-text-on-primary",
    "--rst-text-disabled",
  ],
  Shadows: [
    "--rst-overlay-low",
    "--rst-overlay-mid",
    "--rst-overlay-high",
    "--shadow-soft",
    "--shadow-medium",
    "--shadow-hard",
  ],
};

const ColorSwatch = ({ name }: { readonly name: string }) => (
  <div className="token-swatch">
    <div className="color-box" style={{ backgroundColor: `var(${name})` }} />
    <div className="color-label">{name}</div>
  </div>
);

export const Colors = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark theme-wrapper" : "theme-wrapper"}>
      <div className="toggle-container">
        <label>
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode((prev) => !prev)}
          />
          Dark Mode
        </label>
      </div>

      {Object.entries(colorGroups).map(([groupName, tokens]) => (
        <div key={groupName}>
          <h3>{groupName}</h3>
          <div className="swatch-grid">
            {tokens.map((token) => (
              <ColorSwatch key={token} name={token} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
