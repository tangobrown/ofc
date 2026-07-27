import { Arvo } from "next/font/google";
import localFont from "next/font/local";

// Body copy — Arvo slab serif (paragraphs, eyebrows, dates, captions, labels).
export const arvo = Arvo({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-arvo",
  display: "swap",
});

// Display / headings — "Bosque" (supplied as Little Bosquee). Single-weight face;
// the "400 700" range lets heading weights render the real outlines without faux-bold.
export const bosque = localFont({
  src: "./fonts/LittleBosquee.ttf",
  variable: "--font-display",
  weight: "400 700",
  display: "swap",
});

// UI chrome — Lumier. Used for navigation and buttons only.
export const lumier = localFont({
  src: "./fonts/LumierRegular.ttf",
  variable: "--font-ui",
  weight: "400",
  display: "swap",
});
