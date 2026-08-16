import { IMG } from "./images";

export type FleetMember = {
  name: string;
  anchor: string;
  image: string;
  alt: string;
  description: string;
};

export const FLEET: FleetMember[] = [
  {
    name: "'The Old Fashioned'",
    anchor: "/fleet#the-old-fashioned",
    image: IMG.fleet.oldFashionedMain2,
    alt: "The Old Fashioned oak mobile cocktail bar",
    description:
      "Our flagship bar is a classy dame, we're sure you'll agree. Lovingly crafted from white oak, vintage brass accents and genuine leather, she'd be right at home in the VIP section of any bar or club in the land. So why not make her the first name on your guest list?",
  },
  {
    name: "'Little Tommy Gun'",
    anchor: "/fleet#tommy-gun",
    image: IMG.fleet.tommyGunMain2,
    alt: "Little Tommy Gun Piaggio Ape tap-truck cocktail bar",
    description:
      "A meticulously converted Piaggio Ape truck, Little Tommy Gun doesn't throw lead, but he's fully loaded with all kindsa shots. LTG is equally at home alongside his big sister, The Old Fashioned, at larger events, or handling smaller/indoor parties on his own.",
  },
];
