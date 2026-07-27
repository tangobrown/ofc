import type { Metadata } from "next";
import { arvo, bosque, lumier } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "The Old Fashioned Cocktail Co. — Mobile Cocktail Bar Hire in New York",
    template: "%s · The Old Fashioned Cocktail Co.",
  },
  description:
    "Smokin' drinks with a measure of style. Mobile cocktail bar hire in New York for weddings, corporate events, birthdays and anniversaries.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${arvo.variable} ${bosque.variable} ${lumier.variable}`}>
      <body className="bg-bg text-body font-body">{children}</body>
    </html>
  );
}
