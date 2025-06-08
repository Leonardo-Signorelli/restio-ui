import "./spacingStories.css";

export default {
  title: "Design System/Spacing",
};

const spacingTokens = [
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

const SpacingSwatch = ({ name }: { readonly name: string }) => {
  return (
    <div className="token-swatch">
      <div
        className="spacing-box"
        style={{ height: `var(${name})`, width: `var(${name})` }}
      />
      <div className="spacing-label">{name}</div>
      <div className="spacing-value">
        {getComputedStyle(document.documentElement).getPropertyValue(name)}
      </div>
    </div>
  );
};

export const Spacing = () => {
  return (
    <div className={"theme-wrapper"}>
      <h3>Spacing Tokens</h3>
      <div className="swatch-grid">
        {spacingTokens.map((token) => (
          <SpacingSwatch key={token} name={token} />
        ))}
      </div>
    </div>
  );
};
