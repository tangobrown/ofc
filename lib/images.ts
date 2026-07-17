// Real hosted images referenced by the handoff (client CDN). These can later be
// re-hosted locally; kept as remote URLs for now (allowed in next.config.mjs).
const CDN = "https://theoldfashionedcocktailco.com/wp-content/uploads";

export const IMG = {
  fleet: {
    oldFashionedMain2: `${CDN}/2023/04/The_Old_Fashioned_Main2.jpg`,
    oldFashionedMain: `${CDN}/2021/05/The_Old_Fashioned_Main.jpg`,
    oldFashioned1: `${CDN}/2021/05/The_Old_Fashioned_1.jpg`,
    oldFashioned2: `${CDN}/2021/05/The_Old_Fashioned_2.jpg`,
    tommyGunMain2: `${CDN}/2023/04/Tommy_Gun_Cocktail_Cart_Main2.jpg`,
    tommyGunMain: `${CDN}/2021/05/Tommy_Gun_Cocktail_Cart_Main.jpg`,
    tommyGun1: `${CDN}/2021/05/Tommy_Gun_Cocktail_Cart_1.jpg`,
    tommyGun2: `${CDN}/2021/05/Tommy_Gun_Cocktail_Cart_2.jpg`,
  },
  events: {
    weddingCigars: `${CDN}/2020/06/Wedding-event-image-with-cigars.jpg`,
    birthday: `${CDN}/2020/05/Mobile-cocktail-bar-serving-a-birthday-event.jpg`,
    corporate: `${CDN}/2020/05/Mobile-cocktail-bar-for-corporate-events.jpg`,
    smokeyBar: `${CDN}/2021/03/Smokey_Mobile_Cocktail_Bar.jpg`,
    barTender: `${CDN}/2021/03/Mobile_Cocktail_Bar_Tender.jpg`,
    dwayne: `${CDN}/2020/06/Dwayne-Keaney-Old-Fashioned-Cocktails.jpg`,
  },
  home: {
    smokeVideo: `${CDN}/2025/08/Smoke-3-3.mp4`,
  },
} as const;
