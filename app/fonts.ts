import { Arvo, Josefin_Sans } from "next/font/google";

// Body: Arvo slab serif (400 / 700, + italic 400)
export const arvo = Arvo({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-arvo",
  display: "swap",
});

// Display fallback for Bosque until the client supplies the .woff2.
// When Bosque arrives, add it via next/font/local and set --font-bosque; the
// Tailwind `font-display` chain already prefers --font-bosque first.
export const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-josefin",
  display: "swap",
});

// ── When Bosque is available, uncomment and drop the .woff2 in app/fonts/ ──
// import localFont from "next/font/local";
// export const bosque = localFont({
//   src: "./fonts/Bosque.woff2",
//   variable: "--font-bosque",
//   display: "swap",
// });
