import "./motion.css";

export default {
  title: "Design System/Motion",
};

const motionTokens = [
  "--ease-in-out",
  "--ease-out",
  "--ease-in",
  "--duration-fast",
  "--duration-base",
  "--duration-slow",
];

const isEasing = (name: string) => name.startsWith("--ease");
const isDuration = (name: string) => name.startsWith("--duration");

const MotionSwatch = ({ name }: { readonly name: string }) => {
  const value = getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();

  return (
    <div className="token-swatch motion-swatch">
      <div className="motion-label">{name}</div>
      <div className="motion-value">{value}</div>

      {isEasing(name) && (
        <div
          className="motion-box"
          style={{
            animationTimingFunction: `var(${name})`,
            animationDuration: `1s`,
          }}
        />
      )}

      {isDuration(name) && (
        <div
          className="motion-box"
          style={{
            animationTimingFunction: `ease-in-out`,
            animationDuration: `var(${name})`,
          }}
        />
      )}
    </div>
  );
};

export const Motion = () => {
  return (
    <div className="theme-wrapper">
      <h3>Motion Tokens (Easing & Duration)</h3>
      <div className="swatch-grid motion-grid">
        {motionTokens.map((token) => (
          <MotionSwatch key={token} name={token} />
        ))}
      </div>
    </div>
  );
};
