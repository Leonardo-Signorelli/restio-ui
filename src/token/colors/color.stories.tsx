import { useState } from "react";
import "./colorStories.css";

export default {
  title: "Design System/Colors",
};

const colorGroups = {
  Backgrounds: [
    "--bgColor-default",
    "--bgColor-subtle",
    "--bgColor-muted",
    "--bgColor-primary",
  ],
  Interactive: [
    "--interactive-default",
    "--interactive-hover",
    "--interactive-active",
    "--interactive-disabled",
  ],
  Borders: [
    "--border-default",
    "--border-muted",
    "--border-subtle",
    "--border-primary",
  ],
  Solid: [
    "--solid-neutral",
    "--solid-primary",
    "--solid-positive",
    "--solid-warning",
    "--solid-danger",
  ],
  Text: [
    "--text-on-bg",
    "--text-muted",
    "--text-on-primary",
    "--text-disabled",
  ],
  Shadows: [
    "--overlay-low",
    "--overlay-mid",
    "--overlay-high",
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
