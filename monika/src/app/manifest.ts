import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "MONIKA Mustard Oil",
    short_name: "MONIKA",
    description:
      "Premium mustard oil for authentic Indian cooking. Shop kachi ghani, pure mustard oil, and kitchen combos.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#FFF8E7",
    theme_color: "#B51F1F",
    lang: "en-IN",
    categories: ["shopping", "food"],
    icons: [
      {
        src: "/images/favicon-m.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/images/favicon-m.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/images/favicon-m.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
