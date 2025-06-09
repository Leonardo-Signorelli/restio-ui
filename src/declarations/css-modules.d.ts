/**
 * Dichiarazione globale per i moduli CSS.
 * Questo file NON deve contenere import o export.
 */
declare module '*.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}