// Site imagery, self-hosted under /public/images. Previously these were
// hotlinked from the old WordPress CDN, which stopped resolving once the
// domain was pointed at this site.

export const IMG = {
  fleet: {
    oldFashionedMain2: `/images/fleet/The_Old_Fashioned_Main2.webp`,
    oldFashionedMain: `/images/fleet/The_Old_Fashioned_Main.webp`,
    oldFashioned1: `/images/fleet/The_Old_Fashioned_1.webp`,
    oldFashioned2: `/images/fleet/The_Old_Fashioned_2.webp`,
    tommyGunMain2: `/images/fleet/Tommy_Gun_Cocktail_Cart_Main2.webp`,
    tommyGunMain: `/images/fleet/Tommy_Gun_Cocktail_Cart_Main.webp`,
    tommyGun1: `/images/fleet/Tommy_Gun_Cocktail_Cart_1.webp`,
    tommyGun2: `/images/fleet/Tommy_Gun_Cocktail_Cart_2.webp`,
  },
  events: {
    weddingCigars: `/images/events/Wedding-event-image-with-cigars.webp`,
    // TODO: replace stand-in with the real birthday photo when available.
    birthday: `/images/events/birthday-celebration.jpg`,
    corporate: `/images/events/Mobile-cocktail-bar-for-corporate-events.webp`,
    smokeyBar: `/images/events/Smokey_Mobile_Cocktail_Bar.webp`,
    barTender: `/images/events/Mobile_Cocktail_Bar_Tender.webp`,
    dwayne: `/images/events/Dwayne-Keaney-Old-Fashioned-Cocktails.webp`,
  },
  home: {
    // Home hero background video, with a poster image as the first-frame /
    // fallback (shown while the video loads or if it can't play).
    smokeVideo: `/videos/Smoke-3-3.mp4`,
    smokePoster: `/images/home/smoke-poster.jpg`,
  },
} as const;
