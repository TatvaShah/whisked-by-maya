// Shape of site.config.ts. Every optional field that is empty hides its section.

export type ThemePresetName = "bakery-pastel" | "warm-food" | "floral-elegant";

export type ThemeColors = {
  bg: string; // page background
  surface: string; // cards and alternate bands
  ink: string; // headings
  text: string; // body copy
  muted: string; // secondary copy
  accent: string; // buttons and highlights
  accentInk: string; // text on accent
  soft: string; // soft tint band
  line: string; // borders
};

export type FontKey =
  | "fraunces"
  | "playfair"
  | "cormorant"
  | "dmSerif"
  | "outfit"
  | "inter"
  | "nunito"
  | "jost"
  | "greatVibes"
  | "dancing";

export type ThemeConfig = {
  preset: ThemePresetName;
  colors?: Partial<ThemeColors>; // override any preset color
  fonts?: { display?: FontKey; body?: FontKey; script?: FontKey };
  radius?: "soft" | "round" | "sharp";
};

export type Img = {
  src: string; // path under /public (preferred) or https URL
  alt: string;
  width?: number;
  height?: number;
};

export type MenuItem = {
  name: string;
  description?: string;
  price?: string; // free text, e.g. "$65" or "From $40"
  image?: Img;
  tag?: string; // e.g. "Best seller"
  href?: string; // IG post for this item
};

export type MenuGroup = { title: string; note?: string; items: MenuItem[] };

export type GalleryItem = Img & { caption?: string; href?: string };

export type Reel = {
  src: string; // local mp4 under /public
  poster?: string;
  title?: string;
  caption?: string;
  href?: string; // original IG reel
};

export type Review = { quote: string; author?: string; source?: string };

export type Faq = { q: string; a: string };

export type Link = { label: string; href: string };

export type SiteConfig = {
  name: string;
  shortName?: string;
  tagline: string;
  category: string; // human readable, e.g. "Custom celebration cakes"
  schemaType?: string; // schema.org type: Bakery, FoodEstablishment, Florist, BeautySalon, LocalBusiness
  area?: string; // city or area served, e.g. "Mississauga"
  siteUrl?: string; // e.g. "https://littlebakes.vercel.app"; falls back to Vercel env

  theme: ThemeConfig;
  logo?: string; // PNG or JPG under /public; used for header and favicon
  showNameWithLogo?: boolean;

  hero: {
    variant?: "split" | "full" | "centered";
    eyebrow?: string;
    headline: string;
    subhead?: string;
    images?: Img[]; // first is main; split variant shows up to 3
    primaryCta?: Link; // defaults to DM CTA
    secondaryCta?: Link;
  };

  highlights?: string[]; // short badges under the hero

  about?: { title?: string; body: string[]; image?: Img };

  menu?: {
    label?: string; // nav and eyebrow label, default "Menu" (use "Services" for non-food)
    title?: string;
    intro?: string;
    variant?: "cards" | "list";
    groups: MenuGroup[];
    footnote?: string;
  };

  gallery?: { title?: string; intro?: string; items: GalleryItem[] };

  reels?: { title?: string; intro?: string; items: Reel[] };

  instagram: {
    handle: string; // without @
    embeds?: string[]; // post or reel URLs to embed with the official iframe
    embedsTitle?: string;
  };

  order: {
    label?: string; // nav and eyebrow label, default "How to order" (e.g. "How to book")
    headerCtaLabel?: string; // header DM button, default "DM to order" (e.g. "DM to book")
    title?: string;
    intro?: string;
    steps?: string[];
    dmMessage: string; // prefilled note copied before opening IG DM
    links?: Link[]; // order form, Uber Eats, booking page, etc.
    note?: string; // e.g. "Please order 7 days ahead"
  };

  reviews?: { title?: string; items: Review[] };

  faq?: Faq[];

  contact?: {
    title?: string; // default "Contact and pickup"
    area?: string;
    address?: string; // only if public; adds a map
    hours?: { days: string; time: string }[];
    phone?: string;
    email?: string;
    socials?: Link[]; // TikTok, Facebook, Linktree...
  };

  seo: {
    title: string; // full default title
    description: string;
    keywords?: string[];
    ogPhoto?: string; // optional PNG or JPG in /public shown on the generated 1200x630 share card
  };
};
