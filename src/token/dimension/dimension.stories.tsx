import "./dimensionStories.css";

export default {
  title: "Design System/dimension",
};

const dimensionTokens = [
  "--rst-space-0",
  "--rst-space-1",
  "--rst-space-2",
  "--rst-space-3",
  "--rst-space-4",
  "--rst-space-5",
  "--rst-space-6",
  "--rst-space-8",
  "--rst-space-10",
];

const dimensionSwatch = ({ name }: { readonly name: string }) => {
  return (
    <div className="token-swatch">
      <div
        className="dimension-box"
        style={{ height: `var(${name})`, width: `var(${name})` }}
      />
      <div className="dimension-label">{name}</div>
      <div className="dimension-value">
        {getComputedStyle(document.documentElement).getPropertyValue(name)}
      </div>
    </div>
  );
};

export const dimension = () => {
  return (
    <div className={"theme-wrapper"}>
      <h3>dimension Tokens</h3>
      <div className="swatch-grid">
        {dimensionTokens.map((token) => (
          <dimensionSwatch key={token} name={token} />
        ))}
      </div>
    </div>
  );
};
