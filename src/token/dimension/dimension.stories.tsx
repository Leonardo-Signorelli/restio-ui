import "./dimensionStories.css";

export default {
  title: "Design System/dimension",
};

const dimensionTokens = [
  "--space-0",
  "--space-1",
  "--space-2",
  "--space-3",
  "--space-4",
  "--space-5",
  "--space-6",
  "--space-8",
  "--space-10",
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
