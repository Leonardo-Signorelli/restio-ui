// ContributionHeatmap.tsx

import React from "react";
import styles from "./contribution-heatmap.module.css";
import { ContributionHeatmapProps } from "./contribution-heatmap-types";
import { getShade } from "./contribution-heatmap-utils";

export const ContributionHeatmap: React.FC<ContributionHeatmapProps> = ({
  data,
  bands,
  color,
}) => {
  const maxCount = React.useMemo(() => {
    return Math.max(...data.flat().map((cell) => cell.count));
  }, [data]);

  console.log(data);

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
      {data.map((column, colIdx) => (
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
