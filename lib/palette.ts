/**
 * Shared B12 pastel palette — used by Nav (client) and Footer (server).
 * Must live outside any `'use client'` module so SSR can read it.
 */
export const B12_PASTELS = [
  "#A7E8D4", // soft teal
  "#CFC8F7", // soft violet
  "#F5E6B8", // soft amber
  "#F5B89E", // soft coral
  "#F3C4E2", // soft pink
] as const;
