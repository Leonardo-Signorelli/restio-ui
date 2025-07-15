import { useState } from "react";
import "./elevationStories.css";

export default {
  title: "Design System/Elevation",
};

const elevationTokens = [
  "--rst-elevation-1",
  "--rst-elevation-2",
  "--rst-elevation-3",
  "--rst-elevation-4",
];

const ElevationSwatch = ({ name }: { readonly name: string }) => (
  <div className="token-swatch">
    <div
      className="elevation-box"
      style={{
        width: "96px",
        height: "64px",
        backgroundColor: "var(--white)",
        boxShadow: `var(${name})`,
        borderRadius: "var(--rst-radius-md)",
      }}
    />
    <div className="elevation-label">{name}</div>
  </div>
);

export const Elevation = () => {
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

      <h3>Elevation Tokens (Shadows)</h3>
      <div className="swatch-grid">
        {elevationTokens.map((token) => (
          <ElevationSwatch key={token} name={token} />
        ))}
      </div>
    </div>
  );
};
