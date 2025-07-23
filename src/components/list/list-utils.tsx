import React from "react";
import { useMemo } from "react";

/**
 * Restituisce un elemento con parti della stringa `text` evidenziate in <strong>
 * se corrispondono alla `query`.
 */
export function highlightMatch(text: string, query: string): React.ReactNode {
  if (!query) return text;

  const lowerText = text.toLowerCase();
  const lowerQuery = query.toLowerCase();
  const matchIndex = lowerText.indexOf(lowerQuery);

  if (matchIndex === -1) return text;

  const before = text.slice(0, matchIndex);
  const match = text.slice(matchIndex, matchIndex + query.length);
  const after = text.slice(matchIndex + query.length);

  return (
    <span>
      {before}
      <strong>{match}</strong>
      {after}
    </span>
  );
}

export function useFilteredOptions(options: { value: string }[], filter: string) {
  return useMemo(() => {
    return filter ? options.filter((o) => o.value.toLowerCase().includes(filter.toLowerCase())) : options;
  }, [options, filter]);
}
