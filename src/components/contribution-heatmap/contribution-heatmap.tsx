// ContributionHeatmap.tsx

import React from "react";
import styles from "./contribution-heatmap.module.css";
import { ContributionHeatmapProps } from "./contribution-heatmap-types";
import { generateHeatmapData, getShade } from "./contribution-heatmap-utils";

export const ContributionHeatmap: React.FC<ContributionHeatmapProps> = ({
  data,
  bands,
  color,
  period,
  startDate,
}) => {
  const heatmapData = React.useMemo(() => {
    return data ?? generateHeatmapData(period, startDate);
  }, [data, period, startDate]);

  const maxCount = React.useMemo(() => {
    return Math.max(...heatmapData.flat().map((cell) => cell.count));
  }, [heatmapData]);

  const contributionHeatmapClass = {
    grid: styles["rst-grid"],
    column: styles["rst-column"],
    cell: styles["rst-cell"],
  };

  return (
    <div
      className={`${contributionHeatmapClass.grid}`}
      style={{ gridTemplateColumns: `repeat(${data.length}, auto)` }}
    >
      {heatmapData.map((column, colIdx) => (
        <div key={colIdx} className={contributionHeatmapClass.column}>
          {column.map((cell, rowIdx) => {
            const bgColor = getShade(cell.count, maxCount, bands, color);
            return (
              <div
                key={rowIdx}
                className={contributionHeatmapClass.cell}
                title={`${cell.day}: ${cell.count}`}
                style={{ backgroundColor: bgColor }}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};
