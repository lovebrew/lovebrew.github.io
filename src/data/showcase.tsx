export enum Console {
  NINTENDO_3DS = "3DS",
  NINTENDO_SWITCH = "Switch",
  NINTENDO_WIIU = "Wii ᵁ"
}

export const ShowcaseCardFilters = [Console.NINTENDO_3DS, Console.NINTENDO_SWITCH, Console.NINTENDO_WIIU];

export type ShowcaseItem = {
  title: string;
  author: string;
  description: string;
  preview: string | null;
  source: string;
  consoles: Array<Console>;
};

const Showcase: Array<ShowcaseItem> = [
  {
    title: "Taśman Quest",
    author: "Nawias",
    description: "Join Taśman in his quest to wrap everything in TAŚMAN™ Sealed duct tape! Flex your tape-wrapping skills as the clock is ticking!",
    preview: require("/showcase/tasmanquest.png"),
    source: "https://nawias.itch.io/tasmanquest",
    consoles: [Console.NINTENDO_3DS]
  }
];

function sortShowcase() {
  return Showcase.sort((a, b) => a.title.localeCompare(b.title));
}

export const sortedShowcase = sortShowcase();
