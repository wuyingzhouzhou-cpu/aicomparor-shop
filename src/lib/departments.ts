import type { Category } from "@/lib/types";

export type Department = {
  category: Category;
  title: string;
  eyebrow: string;
  description: string;
  lede: string;
  image: string;
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
    image: "/placeholders/boots.svg",
    showOnHome: true,
  },
  {
    category: "perfume",
    title: "Perfume",
    eyebrow: "On the skin",
    description: "Citrus, musk, and the bottle that survives a third hour.",
    lede: "Perfumes we kept past the opening. Brightness is not enough.",
    image: "/placeholders/perfume.svg",
    showOnHome: true,
  },
  {
    category: "brushes",
    title: "Brushes",
    eyebrow: "The hand",
    description: "Tools with enough weight to make an ordinary morning feel finished.",
    lede: "Brushes judged in the hand, before color is allowed to argue.",
    image: "/placeholders/brushes.svg",
    showOnHome: true,
  },
  {
    category: "guides",
    title: "Guides",
    eyebrow: "Method",
    description: "How to read a product page without being hurried by it.",
    lede: "Short guides for reading a product page without being hurried by it.",
    image: "/placeholders/reading.svg",
    showOnHome: false,
  },
];

export const departments: Record<Category, Department> = {
  boots: departmentList[0],
  perfume: departmentList[1],
  brushes: departmentList[2],
  guides: departmentList[3],
};

export const homeDepartments = departmentList.filter((department) => department.showOnHome);
