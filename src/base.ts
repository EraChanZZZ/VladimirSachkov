// Prefix an internal path with the site's base URL so links work whether the
// site is served from the domain root ('/') or a project subpath
// ('/VladimirSachkov/'). import.meta.env.BASE_URL is set from `base` in astro.config.
export const withBase = (p: string) =>
  import.meta.env.BASE_URL.replace(/\/$/, '') + (p.startsWith('/') ? p : `/${p}`);
