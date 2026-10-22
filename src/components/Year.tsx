// Static site: the year is fixed at build time and updates on the next deploy.
export function Year() {
  return <>{new Date().getFullYear()}</>;
}
