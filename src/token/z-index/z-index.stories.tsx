import { useState } from "react";
import "./z-index.css";

export default {
  title: "Design System/Z-Index",
};

const zIndexTokens = [
  "--z-base",
  "--z-dropdown",
  "--z-sticky",
  "--z-overlay",
  "--z-tooltip",
  "--z-modal",
];

const ZIndexSwatch = ({ name }: { readonly name: string }) => {
  const value = getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();
  return (
    <div className="token-swatch">
      <div className="zindex-box" />
      <div className="zindex-label">{name}</div>
      <div className="zindex-value">{value}</div>
    </div>
  );
};

export const ZIndex = () => {
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

      <h3>Z-Index Tokens</h3>
      <div className="swatch-grid">
        {zIndexTokens.map((token) => (
          <ZIndexSwatch key={token} name={token} />
        ))}
      </div>
    </div>
  );
};
