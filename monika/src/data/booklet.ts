export type BookletMeta = {
  title: string;
  subtitle: string;
  fileUrl: string;
  pages: number;
  updatedAt: string;
  highlights: string[];
};

export const booklet: BookletMeta = {
  title: "Monika Kitchen Booklet",
  subtitle:
    "A pocket guide to our oils, packing sizes, and the story from one expeller to kitchens across Haryana.",
  fileUrl: "/booklets/monika-kitchen-booklet.pdf",
  pages: 12,
  updatedAt: "2026-03-01",
  highlights: [
    "Product range & pack sizes",
    "How we press & pack",
    "Serving ideas for everyday tadka",
    "Dealer & home delivery notes for Haryana",
  ],
};
