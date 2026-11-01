import type { Category } from "@/lib/types";

export type Department = {
  category: Category;
  title: string;
  eyebrow: string;
  description: string;
  lede: string;
  image: string;
  imageAlt: string;
  showOnHome: boolean;
};

export const departmentList: Department[] = [
  {
    category: "boots",
    title: "Boots",
    eyebrow: "Groundwork",
    description:
      "Rain, pavement, and the pair that still looks considered on the fourth day.",
    lede: "City boots, written after they have met weather. The edit is short on purpose.",
    image: "/assets/home/rooms/boots.webp",
    imageAlt: "Blundstone antique brown Chelsea boots, elastic gussets and pull tabs.",
    showOnHome: true,
  },
  {
    category: "perfume",
    title: "Perfume",
    eyebrow: "On the skin",
    description: "Citrus, musk, and the bottle that survives a third hour.",
    lede: "Perfumes we kept past the opening. Brightness is not enough.",
    image: "/assets/home/rooms/perfume.webp",
    imageAlt: "Giorgio Armani Acqua di Giò bottle in soft daylight.",
    showOnHome: true,
  },
  {
    category: "brushes",
    title: "Brushes",
    eyebrow: "The hand",
    description: "Tools with enough weight to make an ordinary morning feel finished.",
    lede: "Brushes judged in the hand, before color is allowed to argue.",
    image: "/assets/home/rooms/brushes.webp",
    imageAlt: "Real Techniques Everyday Essentials face brushes and sponge.",
    showOnHome: true,
  },
  {
    category: "guides",
    title: "Guides",
    eyebrow: "Method",
    description: "How to read a product page without being hurried by it.",
    lede: "Short guides for reading a product page without being hurried by it.",
    image: "/placeholders/reading.svg",
    imageAlt: "Guides",
    showOnHome: false,
  },
  {
    category: "articles",
    title: "Articles",
    eyebrow: "Archive",
    description:
      "Restored comparison pieces on glossy balms and the beauty filters a search actually needs.",
    lede: "Comparison pieces kept at their original address. Glossy balms, written as a buying filter.",
    image: "/assets/articles/best-dior-lip-glow-dupes/hero/hero-3x2-dior-lip-glow-or-glossy-balms.jpg",
    imageAlt: "Dior Addict Lip Glow balm, the case and pink stick fully in frame.",
    showOnHome: true,
  },
];

export const departments: Record<Category, Department> = {
  boots: departmentList[0],
  perfume: departmentList[1],
  brushes: departmentList[2],
  guides: departmentList[3],
  articles: departmentList[4],
};

export const homeDepartments = departmentList.filter((department) => department.showOnHome);
