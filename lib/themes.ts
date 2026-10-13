import type { FontKey, ThemeColors, ThemePresetName } from "./types";

type Preset = {
  colors: ThemeColors;
  fonts: { display: FontKey; body: FontKey; script: FontKey };
  radius: "soft" | "round" | "sharp";
};

export const presets: Record<ThemePresetName, Preset> = {
  // Cakes, cupcakes, cookies, dessert tables
  "bakery-pastel": {
    colors: {
      bg: "#fbf6f1",
      surface: "#ffffff",
      ink: "#3a2420",
      text: "#4a3430",
      muted: "#7a625b",
      accent: "#c0566e",
      accentInk: "#ffffff",
      soft: "#f6e1e3",
      line: "#ecdcd4",
    },
    fonts: { display: "fraunces", body: "outfit", script: "greatVibes" },
    radius: "round",
  },
  // Home kitchens, caterers, tiffin, street food
  "warm-food": {
    colors: {
      bg: "#fbf5ea",
      surface: "#fffdf8",
      ink: "#2b1d12",
      text: "#3d2c1f",
      muted: "#6e5a48",
      accent: "#c2501f",
      accentInk: "#ffffff",
      soft: "#f4e2c4",
      line: "#e8d8bd",
    },
    fonts: { display: "dmSerif", body: "nunito", script: "dancing" },
    radius: "soft",
  },
  // Florists, event decor, salons and beauty
  "floral-elegant": {
    colors: {
      bg: "#f7f5f0",
      surface: "#ffffff",
      ink: "#1f2a24",
      text: "#2f3a33",
      muted: "#66706a",
      accent: "#7d5a6b",
      accentInk: "#ffffff",
      soft: "#e9e4dc",
      line: "#dcd6cc",
    },
    fonts: { display: "cormorant", body: "jost", script: "greatVibes" },
    radius: "sharp",
  },
};

export const radiusScale = {
  soft: { card: "1rem", pill: "999px", media: "1.25rem" },
  round: { card: "1.75rem", pill: "999px", media: "2rem" },
  sharp: { card: "0.25rem", pill: "0.25rem", media: "0.25rem" },
};
