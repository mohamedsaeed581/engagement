/** Base path for static assets (GitHub Pages subpath support) */
export function assetPath(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}

export function formatCountdown(value: number): string {
  return String(Math.max(0, value)).padStart(2, "0");
}
