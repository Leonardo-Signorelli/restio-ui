import { useState } from "react";
import "./elevation.css";

export default {
  title: "Design System/Elevation",
};

const elevationTokens = [
  "--elevation-1",
  "--elevation-2",
  "--elevation-3",
  "--elevation-4",
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
        borderRadius: "var(--radius-md)",
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
