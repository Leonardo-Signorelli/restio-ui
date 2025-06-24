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