import { site } from "@/site.config";
import { fonts } from "./fonts";
import { presets, radiusScale } from "./themes";
import type { SiteConfig } from "./types";

export { site };
export const CLAUDAURA_URL = "https://www.claudaura.ca";

export function getSiteUrl() {
  if (site.siteUrl) return site.siteUrl.replace(/\/$/, "");
  const prod = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (prod) return `https://${prod}`;
  const host = process.env.VERCEL_URL;
  if (host) return `https://${host}`;
  return "http://localhost:3000";
}

export const igHandle = site.instagram.handle.replace(/^@/, "");
export const igUrl = `https://www.instagram.com/${igHandle}/`;
export const igDmUrl = `https://ig.me/m/${igHandle}`;

export function resolveTheme(cfg: SiteConfig = site) {
  const p = presets[cfg.theme.preset] ?? presets["bakery-pastel"];
  const colors = { ...p.colors, ...(cfg.theme.colors ?? {}) };
  const f = { ...p.fonts, ...(cfg.theme.fonts ?? {}) };
  const r = radiusScale[cfg.theme.radius ?? p.radius];
  const vars: Record<string, string> = {
    "--c-bg": colors.bg,
    "--c-surface": colors.surface,
    "--c-ink": colors.ink,
    "--c-text": colors.text,
    "--c-muted": colors.muted,
    "--c-accent": colors.accent,
    "--c-accent-ink": colors.accentInk,
    "--c-soft": colors.soft,
    "--c-line": colors.line,
    "--f-display": fonts[f.display].style.fontFamily,
    "--f-body": fonts[f.body].style.fontFamily,
    "--f-script": fonts[f.script].style.fontFamily,
    "--r-card": r.card,
    "--r-pill": r.pill,
    "--r-media": r.media,
  };
  return { colors, vars };
}

export const has = <T,>(arr?: T[] | null): arr is T[] => Array.isArray(arr) && arr.length > 0;

export function isRasterForOg(path?: string) {
  return !!path && /\.(png|jpe?g)$/i.test(path) && path.startsWith("/");
}

// Build guard: fail the build if any copy in the config contains two hyphens in a row.
function walk(v: unknown, path: string, out: string[]) {
  if (typeof v === "string") {
    if (/^(https?:|\/)/.test(v)) return;
    if (v.includes("--")) out.push(path);
  } else if (Array.isArray(v)) v.forEach((x, i) => walk(x, `${path}[${i}]`, out));
  else if (v && typeof v === "object") Object.entries(v).forEach(([k, x]) => walk(x, `${path}.${k}`, out));
}
const bad: string[] = [];
walk(site, "site", bad);
if (bad.length) throw new Error(`Double hyphen found in site.config.ts copy at: ${bad.join(", ")}`);

export function businessJsonLd() {
  const url = getSiteUrl();
  const c = site.contact;
  const sameAs = [igUrl, ...(c?.socials ?? []).map((s) => s.href)];
  return {
    "@context": "https://schema.org",
    "@type": site.schemaType ?? "LocalBusiness",
    name: site.name,
    description: site.seo.description,
    url,
    ...(site.logo ? { logo: `${url}${site.logo}` } : {}),
    ...(site.hero.images?.[0]?.src?.startsWith("/") ? { image: `${url}${site.hero.images[0].src}` } : {}),
    ...(c?.email ? { email: c.email } : {}),
    ...(c?.phone ? { telephone: c.phone } : {}),
    ...(site.area || c?.address
      ? {
          address: {
            "@type": "PostalAddress",
            ...(c?.address ? { streetAddress: c.address } : {}),
            ...(site.area ? { addressLocality: site.area } : {}),
            addressRegion: "ON",
            addressCountry: "CA",
          },
        }
      : {}),
    ...(site.area ? { areaServed: [site.area, "Greater Toronto Area"] } : {}),
    sameAs,
  };
}
