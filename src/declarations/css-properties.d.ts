import 'react';

declare module 'react' {
  interface CSSProperties {
    // Per le variabili CSS custom (soluzione precedente)
    [key: `--${string}`]: string | number;

    // Aggiungi qui le nuove proprietà non standard che vuoi usare.
    // Usiamo '?' per indicare che la proprietà è opzionale.
    anchorName?: string;
    
    // Se userai altre proprietà dell'API, puoi aggiungerle qui:
    // positionFallback?: string; 
  }
}