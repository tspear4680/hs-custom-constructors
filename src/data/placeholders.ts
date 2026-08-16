// Placeholder imagery only — swap these for real project photos before launch.
// Using picsum.photos seeded URLs so each placeholder is stable and distinct.

export const heroPlaceholder =
  "https://picsum.photos/seed/hs-hero/1600/900";

export const aboutPlaceholders = {
  builtHomes: "https://picsum.photos/seed/hs-built-homes/800/600",
  remodels: "https://picsum.photos/seed/hs-remodels/800/600",
  outdoorSpaces: "https://picsum.photos/seed/hs-outdoor/800/600",
};

export const galleryPlaceholders = Array.from({ length: 24 }, (_, i) => ({
  id: i + 1,
  src: `https://picsum.photos/seed/hs-gallery-${i + 1}/600/600`,
  alt: `Placeholder project photo ${i + 1}`,
}));
