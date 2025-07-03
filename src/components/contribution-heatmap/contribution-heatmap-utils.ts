import { ContributionData, Period } from "./contribution-heatmap-types";

/**
 * Calcola shade basata su count rispetto a maxCount e numero di bande.
 */
export function getShade(
  count: number,
  maxCount: number,
  bands: number,
  baseColor: string
): string {
  if (count <= 0) {
    return "oklch(95% 0 0)"; // colore neutro per celle vuote
  }

  const ratio = Math.min(count / maxCount, 1);
  const band = Math.ceil(ratio * bands);
  const lightness = 75 - band * (50 / bands); // da 75% a 25% approx

  return baseColor.replace(/oklch\([^%]+%/, `oklch(${lightness}%`);
}

export function generateHeatmapData(
  period: Period = 'year',
  startDateStr?: string
): ContributionData {
  const today = startDateStr ? new Date(startDateStr) : new Date();

  const start =
    period === 'month'
      ? startOfMonth(today)
      : period === 'quarter'
      ? startOfQuarter(today)
      : startOfYear(today);

  const numDays =
    period === 'month'
      ? 30
      : period === 'quarter'
      ? 90
      : 365;

  const days: { day: string; count: number }[] = [];

  for (let i = 0; i < numDays; i++) {
    const date = addDays(start, i);
    days.push({
      day: format(date),
      count: Math.floor(Math.random() * 10), // stub temporaneo
    });
  }

  // Raggruppa in colonne da 7 (settimane)
  const columns: ContributionData = [];
  for (let i = 0; i < days.length; i += 7) {
    columns.push(days.slice(i, i + 7));
  }

  return columns;
}

export function startOfMonth(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

export function startOfQuarter(date: Date): Date {
  const quarter = Math.floor(date.getMonth() / 3);
  return new Date(date.getFullYear(), quarter * 3, 1);
}

export function startOfYear(date: Date): Date {
  return new Date(date.getFullYear(), 0, 1);
}

export function addDays(date: Date, amount: number): Date {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + amount);
  return newDate;
}

export function format(date: Date): string {
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}