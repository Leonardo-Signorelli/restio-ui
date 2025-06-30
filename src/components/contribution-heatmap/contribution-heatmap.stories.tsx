// ContributionHeatmap.stories.tsx

import type { Meta, StoryObj } from "@storybook/react-vite";
import { ContributionHeatmap } from "./contribution-heatmap";
import { ContributionHeatmapProps } from "./contribution-heatmap-types";

// dati di esempio
const exampleData = Array.from({ length: 12 }, (_, colIdx) =>
  Array.from({ length: 7 }, (_, rowIdx) => ({
    day: `2025-06-${String(colIdx * 7 + rowIdx + 1).padStart(2, "0")}`,
    count: Math.floor(Math.random() * 10),
  }))
);

const meta: Meta<ContributionHeatmapProps> = {
  title: "Components/Contribution Heatmap",
  component: ContributionHeatmap,
  argTypes: {
    bands: { control: { type: "number", min: 1, max: 10 } },
    color: { control: "text" },
    data: { control: false },
    period: { control: "select", options: ["month", "quarter", "year"] },
  },
};

export default meta;
type Story = StoryObj<ContributionHeatmapProps>;

export const Default: Story = {
  args: {
    data: exampleData,
    bands: 4,
    color: "oklch(62% 0.18 132)",
  },
};

export const MoreBands: Story = {
  args: {
    data: exampleData,
    bands: 6,
    color: "oklch(62% 0.18 132)",
  },
};

export const DifferentColor: Story = {
  args: {
    data: exampleData,
    bands: 4,
    color: "oklch(60% 0.2 260)", // viola
  },
};
