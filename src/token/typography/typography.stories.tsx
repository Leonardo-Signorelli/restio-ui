import "./typographyStories.css";
import "./typography.css";

export default {
  title: "Design System/Typography",
};

const TypographySample = ({
  className,
  label,
}: {
  readonly className: string;
  readonly label: string;
}) => (
  <div className="typography-sample">
    <div className={className}>{label}</div>
  </div>
);

export const Typography = () => (
  <div className="theme-wrapper">
    <h3>Typography Tokens</h3>
    <TypographySample className="display" label="Display Title" />
    <TypographySample className="heading" label="Heading Title" />
    <TypographySample className="body" label="Body Text" />
    <TypographySample className="label" label="Label" />
    <TypographySample className="code" label="const a = 1;" />
  </div>
);
