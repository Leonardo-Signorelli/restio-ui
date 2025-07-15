export type ContributionCell = {
  day: string;    // iso format YYYY-MM-DD
  count: number;  // cell value
};

export type ContributionMatrix = ContributionCell[][]; // datatable

export type Period = 'month' | 'quarter' | 'year';


export type ContributionData = ContributionCell[][];

export interface ContributionHeatmapProps {
  data: ContributionData;
  bands: number;
  color: string;
  period?: Period;
  startDate?: string;
}
