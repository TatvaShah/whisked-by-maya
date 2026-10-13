import {
  Cormorant_Garamond,
  Dancing_Script,
  DM_Serif_Display,
  Fraunces,
  Great_Vibes,
  Inter,
  Jost,
  Nunito,
  Outfit,
  Playfair_Display,
} from "next/font/google";
import type { FontKey } from "./types";

// next/font needs static calls, so every option is declared here.
// Only the selected fonts get their class applied; preload is off to keep pages light.
const fraunces = Fraunces({ subsets: ["latin"], display: "swap", preload: false });
const playfair = Playfair_Display({ subsets: ["latin"], display: "swap", preload: false });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600", "700"], display: "swap", preload: false });
const dmSerif = DM_Serif_Display({ subsets: ["latin"], weight: "400", display: "swap", preload: false });
const outfit = Outfit({ subsets: ["latin"], display: "swap", preload: false });
const inter = Inter({ subsets: ["latin"], display: "swap", preload: false });
const nunito = Nunito({ subsets: ["latin"], display: "swap", preload: false });
const jost = Jost({ subsets: ["latin"], display: "swap", preload: false });
const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400", display: "swap", preload: false });
const dancing = Dancing_Script({ subsets: ["latin"], display: "swap", preload: false });

export const fonts: Record<FontKey, { style: { fontFamily: string } }> = {
  fraunces,
  playfair,
  cormorant,
  dmSerif,
  outfit,
  inter,
  nunito,
  jost,
  greatVibes,
  dancing,
};
