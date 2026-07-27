import type { CarouselItem } from "@/components/EventCarousel";

const DIR = "/images/carousel";

// Shared photo set for the under-hero carousel on the event pages.
export const EVENT_CAROUSEL: CarouselItem[] = [
  { src: `${DIR}/Old-fashioned-cocktail-bar.jpg`, alt: "The Old Fashioned cocktail bar" },
  { src: `${DIR}/Tommy_Gun_Cocktail_Cart_1.jpg`, alt: "Little Tommy Gun cocktail cart" },
  { src: `${DIR}/Cocktail-making-in-progress.jpg`, alt: "A cocktail being made" },
  { src: `${DIR}/Close-up-of-cocktail-made.jpg`, alt: "Close-up of a finished cocktail" },
  { src: `${DIR}/Ingredients-for-cocktails.jpg`, alt: "Ingredients for cocktails" },
  { src: `${DIR}/Cocktails-made-by-Dwayne-from-Old-Fashioned.jpg`, alt: "Cocktails made by Dwayne" },
  { src: `${DIR}/Tommy_Gun_Cocktail_Cart_2.jpg`, alt: "Little Tommy Gun cocktail cart" },
];
