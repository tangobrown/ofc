import localFont from "next/font/local";

// Display / headings — "Bosque" (supplied as Little Bosquee). Single-weight face;
// the "400 700" range lets heading weights render the real outlines without faux-bold.
export const bosque = localFont({
  src: "./fonts/LittleBosquee.ttf",
  variable: "--font-display",
  weight: "400 700",
  display: "swap",
});

// Body — Lumier. Kept at 400 so <strong>/bold text still reads as emphasized.
export const lumier = localFont({
  src: "./fonts/LumierRegular.ttf",
  variable: "--font-body",
  weight: "400",
  display: "swap",
});
