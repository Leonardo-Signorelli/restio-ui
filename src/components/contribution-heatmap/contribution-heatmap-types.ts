export type ContributionCell = {
  day: string;    // iso format YYYY-MM-DD
  count: number;  // cell value
};

export type ContributionMatrix = ContributionCell[][]; // datatable

export interface ContributionHeatmapProps {
  data: ContributionMatrix;
  bands: number; // bands number
  color: string; // principal color ( okchl )
}
