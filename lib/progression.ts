
export function nextLoadSuggestion(lastTwoRPE: number[], lastLoadKg: number | null) {
  if (lastLoadKg == null) return null
  const high = Math.max(...lastTwoRPE)
  const low = Math.min(...lastTwoRPE)
  if (high >= 9) return Math.round(lastLoadKg * 0.95 * 10) / 10
  if (low <= 7 && high <=7) return Math.round(lastLoadKg * 1.025 * 10) / 10
  return lastLoadKg
}
