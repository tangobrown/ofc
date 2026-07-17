import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Backgrounds
        bg: "#161616",
        "bg-alt": "#1c1b19",
        "nav-bg": "#131313",
        // Accents
        gold: "#c09d6c",
        cream: "#d9c4a6",
        // Text
        "heading-light": "#f2ecdf",
        "text-hi": "#e7e1d5",
        body: "#c4bdb0",
        "body-dim": "#b7b0a3",
        muted: "#8a8377",
        "muted-2": "#7d766a",
      },
      fontFamily: {
        // Body slab-serif
        body: ["var(--font-arvo)", "Arvo", "serif"],
        // Display deco (Bosque supplied later via local; Josefin fallback)
        display: ["var(--font-bosque)", "var(--font-josefin)", "Josefin Sans", "sans-serif"],
      },
      letterSpacing: {
        eyebrow: "0.05em",
        nav: "0.14em",
        btn: "0.16em",
      },
      maxWidth: {
        content: "1140px",
        faq: "860px",
        article: "820px",
        "blog-index": "1080px",
        prose: "1000px",
      },
      boxShadow: {
        hero: "0 2px 18px rgba(0,0,0,.6)",
      },
      backgroundImage: {
        "hero-scrim":
          "linear-gradient(180deg, rgba(20,16,12,.72) 0%, rgba(20,16,12,.35) 40%, rgba(20,16,12,.6) 100%)",
        "home-scrim":
          "linear-gradient(180deg, rgba(17,14,10,.72) 0%, rgba(17,14,10,.35) 30%, rgba(17,14,10,.5) 70%, rgba(17,14,10,.85) 100%)",
        "flappers-scrim":
          "linear-gradient(90deg, rgba(17,13,9,.78) 0%, rgba(17,13,9,.35) 45%, rgba(17,13,9,.15) 100%)",
      },
      transitionTimingFunction: {
        carousel: "cubic-bezier(.4,0,.2,1)",
      },
    },
  },
  plugins: [],
};

export default config;
