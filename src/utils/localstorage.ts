export function getItem(label: string): string | null {
  const r = localStorage.getItem(
    `${process.env.VITE_APP_PREFIX_LOCAL_STORAGE}:${label}`,
  );

  return r;
}

export function setItem(label: string, item: string | [] | {}): void {
  if (!(item instanceof String)) {
    localStorage.setItem(
      `${process.env.VITE_APP_PREFIX_LOCAL_STORAGE}:${label}`,
      JSON.stringify(item),
    );
  }
  localStorage.setItem(
    `${process.env.VITE_APP_PREFIX_LOCAL_STORAGE}:${label}`,
    item as string,
  );
}

export function removeItem(label: string): void {
  localStorage.removeItem(
    `${process.env.VITE_APP_PREFIX_LOCAL_STORAGE}:${label}`,
  );
}
