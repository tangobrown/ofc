export type NavChild = { label: string; href: string };
export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Events",
    href: "/events",
    children: [
      { label: "Weddings", href: "/weddings" },
      { label: "Corporate Events", href: "/corporate" },
      { label: "Birthdays & Anniversaries", href: "/birthdays" },
      { label: "All Events", href: "/events" },
    ],
  },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Our Fleet", href: "/fleet" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About us", href: "/about" },
      { label: "FAQ's", href: "/faqs" },
      { label: "Blog", href: "/blog" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export const LOGO_SRC =
  "https://theoldfashionedcocktailco.com/wp-content/uploads/2020/06/The-Old-Fashoioned-Primary-Light.png";

export const SOCIAL = {
  facebook: "https://www.facebook.com/theoldfashionedcocktailco/",
  instagram: "https://www.instagram.com/theoldfashionedcocktailco/",
} as const;
