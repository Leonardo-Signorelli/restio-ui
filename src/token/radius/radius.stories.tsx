import "./radiusStories.css";

export default {
  title: "Design System/Radius",
};

const radiusTokens = [
  "--radius-sm",
  "--radius-md",
  "--radius-lg",
  "--radius-full",
];

const RadiusSwatch = ({ name }: { readonly name: string }) => (
  <div className="token-swatch">
    <div
      className="radius-box"
      style={{
        width: "64px",
        height: "64px",
        backgroundColor: "var(--primary-500)",
        borderRadius: `var(${name})`,
      }}
    />
    <div className="radius-label">{name}</div>
  </div>
);

export const Radius = () => {
  return (
    <div className={"theme-wrapper"}>
      <h3>Radius Tokens</h3>
      <div className="swatch-grid">
        {radiusTokens.map((token) => (
          <RadiusSwatch key={token} name={token} />
        ))}
      </div>
    </div>
  );
};
