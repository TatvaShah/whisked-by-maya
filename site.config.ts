import type { SiteConfig } from "@/lib/types";

// The ONLY file a builder edits (plus images in /public).
// Empty or missing optional fields hide their section automatically.
// Use real facts only: the leads JSON, the IG profile, and posts. Never invent hours, prices, or reviews.
// No double hyphens anywhere in copy; the build fails if one slips in.

export const site: SiteConfig = {
  name: "Whisked by Maya",
  tagline: "Luxury floral cupcakes, cakesicles, and event gifting in Brampton.",
  category: "Luxury floral cupcakes",
  schemaType: "Bakery",
  area: "Brampton, ON",
  siteUrl: "https://whisked-by-maya.vercel.app",

  theme: {
    preset: "bakery-pastel",
    colors: { accent: "#c47880" }, // dusty rose from logo brushstroke, deepened for contrast
  },
  logo: "/images/logo.png",
  showNameWithLogo: true,

  hero: {
    variant: "split",
    eyebrow: "Brampton, Ontario",
    headline: "Why send flowers when you can send cupcakes?",
    subhead:
      "Luxury floral cupcakes, cupcake bouquets, and cakesicles for birthdays, bridal gifts, and celebrations. Message Maya to start your custom order.",
    images: [
      {
        src: "/images/post-1.jpg",
        alt: "Pink floral cupcake bouquet wrapped like fresh flowers",
        width: 1080,
        height: 1080,
      },
      {
        src: "/images/post-2.jpg",
        alt: "Pink and deep red cupcake bouquet with cream ribbon",
        width: 1080,
        height: 1080,
      },
      {
        src: "/images/post-4.jpg",
        alt: "Tiffany blue floral cupcake bouquet with gold ribbon",
        width: 1080,
        height: 1434,
      },
    ],
    secondaryCta: { label: "See the gallery", href: "#gallery" },
  },

  highlights: [
    "Luxury floral cupcakes",
    "DM to order",
    "Certified Food Handler",
    "Events and corporate gifting",
  ],

  about: {
    title: "Sweet florals, made to order",
    body: [
      "Whisked by Maya creates luxury floral cupcakes that look like a fresh bouquet and taste even better. Based in Brampton, Maya designs cupcake bouquets, cakesicles, and festive gift boxes for birthdays, bridal moments, and every celebration in between.",
      "Every arrangement is made to order. Send your date, how many servings you need, a flavour idea, and any design notes, and Maya will help bring it to life.",
    ],
    image: {
      src: "/images/post-3.jpg",
      alt: "Deep red floral cupcakes with delicate piping",
      width: 1080,
      height: 1080,
    },
  },

  menu: {
    title: "What Maya makes",
    intro: "A few favourites from recent orders. Every piece is quoted in your DM based on size, design, and date.",
    variant: "cards",
    groups: [
      {
        title: "Cupcakes and bouquets",
        items: [
          {
            name: "Luxury floral cupcakes",
            description: "Buttercream florals styled like a fresh bouquet.",
            image: {
              src: "/images/post-5.jpg",
              alt: "Luxury floral cupcakes for celebrations",
            },
            href: "https://www.instagram.com/p/DUgaRNWDqge/",
          },
          {
            name: "Cupcake bouquets",
            description: "Wrapped arrangements for birthdays, bridal gifts, and more.",
            image: {
              src: "/images/post-1.jpg",
              alt: "Cupcake bouquet in pink wrapping",
            },
            href: "https://www.instagram.com/p/DeW-aOnlrmM/",
          },
          {
            name: "Mini cupcakes",
            description: "Perfectly coordinated minis for favours and gift sets.",
            image: {
              src: "/images/post-3.jpg",
              alt: "Coordinated mini floral cupcakes",
            },
            href: "https://www.instagram.com/p/DeKDVB9jpas/",
          },
        ],
      },
      {
        title: "Gifting and treats",
        note: "Quoted by DM",
        items: [
          {
            name: "Cakesicles",
            description: "Made from scratch and dipped in chocolate.",
            image: {
              src: "/images/post-7.jpg",
              alt: "Handmade chocolate dipped cakesicles",
            },
            href: "https://www.instagram.com/p/DePRYhEvs3o/",
          },
          {
            name: "Diwali gift boxes",
            description: "Handmade from scratch and beautifully packaged.",
            image: {
              src: "/images/post-8.jpg",
              alt: "Festive Diwali gift box treats",
            },
            href: "https://www.instagram.com/p/Dd1mzUmv4Rj/",
          },
          {
            name: "Bridal shower favours",
            description: "Sweet sets styled for bridal gifts and celebrations.",
            image: {
              src: "/images/post-2.jpg",
              alt: "Bridal gift cupcake bouquet in pinks and reds",
            },
            href: "https://www.instagram.com/p/DeMxbZ0DoQd/",
          },
        ],
      },
    ],
  },

  gallery: {
    title: "A look at the florals",
    items: [
      {
        src: "/images/post-1.jpg",
        width: 1080,
        height: 1080,
        alt: "Pink floral cupcake bouquet",
        caption: "Why send flowers when you can send cupcakes?",
        href: "https://www.instagram.com/p/DeW-aOnlrmM/",
      },
      {
        src: "/images/post-2.jpg",
        width: 1080,
        height: 1080,
        alt: "Pink and deep red bridal cupcake bouquet",
        caption: "Pinks and deep reds for a bridal gift set",
        href: "https://www.instagram.com/p/DeMxbZ0DoQd/",
      },
      {
        src: "/images/post-3.jpg",
        width: 1080,
        height: 1080,
        alt: "Deep red floral cupcakes with piping",
        caption: "Deep red florals and delicate piping",
        href: "https://www.instagram.com/p/DeKDVB9jpas/",
      },
      {
        src: "/images/post-4.jpg",
        width: 1080,
        height: 1434,
        alt: "Tiffany blue birthday cupcake bouquet",
        caption: "Tiffany blue florals for a birthday bouquet",
        href: "https://www.instagram.com/p/DdEl2ehjnlj/",
      },
      {
        src: "/images/post-5.jpg",
        width: 1080,
        height: 1080,
        alt: "Luxury floral cupcakes for celebrations",
        caption: "Birthdays, anniversaries, and celebrations",
        href: "https://www.instagram.com/p/DUgaRNWDqge/",
      },
      {
        src: "/images/post-6.jpg",
        width: 640,
        height: 1136,
        alt: "Festive gifting cupcakes for holidays",
        caption: "Festive gifting for Diwali, Christmas, and Lohri",
        href: "https://www.instagram.com/p/DeUzK21J20x/",
      },
      {
        src: "/images/post-7.jpg",
        width: 640,
        height: 1136,
        alt: "Handmade cakesicles dipped in chocolate",
        caption: "Cakesicles made from scratch",
        href: "https://www.instagram.com/p/DePRYhEvs3o/",
      },
      {
        src: "/images/post-8.jpg",
        width: 640,
        height: 1136,
        alt: "Diwali gift box treats",
        caption: "Diwali boxes, handmade and packaged with care",
        href: "https://www.instagram.com/p/Dd1mzUmv4Rj/",
      },
    ],
  },

  reels: {
    title: "A closer look",
    intro: "",
    items: [],
  },

  instagram: {
    handle: "whiskedbymaya",
    embeds: [
      "https://www.instagram.com/p/DeW-aOnlrmM/",
      "https://www.instagram.com/p/DeMxbZ0DoQd/",
      "https://www.instagram.com/p/DdEl2ehjnlj/",
    ],
    embedsTitle: "Fresh from Instagram",
  },

  order: {
    title: "Order in a quick DM",
    intro:
      "Orders are taken through Instagram. Tap the button to open a starter message, then fill in the blanks and send.",
    dmMessage:
      "Hi Whisked by Maya! I would like to place a custom order.\nDate needed:\nServings or size:\nFlavour:\nDesign idea:\n",
    links: [],
    note: "Events and corporate gifting welcome. Reach out early for peak dates.",
  },

  reviews: {
    title: "Kind words",
    items: [
      {
        quote:
          "They are not overly sweet, so rich and creamy and the buttercream frosting is so so so good.",
        source: "Google",
      },
      {
        quote:
          "Just can't say enough how tasty the mothers days cupcakes were we ordered. The presentation was 20 outta 10.",
        source: "Google",
      },
    ],
  },

  faq: [
    {
      q: "How do I order?",
      a: "Send a DM on Instagram with your date, servings or size, flavour, and design idea. You can also email whiskedbymaya@gmail.com.",
    },
    {
      q: "What do you make?",
      a: "Luxury floral cupcakes, cupcake bouquets, cakesicles, Diwali gift boxes, bridal shower favours, and mini cupcakes.",
    },
    {
      q: "Where are you based?",
      a: "Whisked by Maya is based in Brampton, Ontario, and takes orders by DM.",
    },
    {
      q: "Do you do events and corporate gifting?",
      a: "Yes. Events and corporate gifting are welcome. Share your date and idea in a DM for a custom quote.",
    },
  ],

  contact: {
    title: "Contact",
    area: "Brampton, Ontario",
    email: "whiskedbymaya@gmail.com",
    socials: [],
  },

  seo: {
    title: "Whisked by Maya | Luxury floral cupcakes in Brampton",
    description:
      "Luxury floral cupcakes, cupcake bouquets, and cakesicles in Brampton, Ontario. Custom orders by Instagram DM for events and gifting.",
    keywords: [
      "floral cupcakes Brampton",
      "cupcake bouquet Brampton",
      "luxury cupcakes Ontario",
      "cakesicles Brampton",
      "custom cupcakes GTA",
    ],
    ogPhoto: "/images/og-photo.jpg",
  },
};
