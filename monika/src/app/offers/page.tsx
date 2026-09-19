import type { Metadata } from "next";
import { products } from "@/data/products";
import { OfferBanner } from "@/components/home/OfferBanner";
import { SpecialOffers } from "@/components/home/SpecialOffers";
import { ProductGrid } from "@/components/product/ProductGrid";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Offers",
  description: "Limited-time savings on Monika mustard oil, combos, and family packs.",
};

export default function OffersPage() {
  const deals = products.filter((product) => product.variants[0].discount >= 18);

  return (
    <>
      <OfferBanner />
      <SpecialOffers />
      <Container className="pb-16">
        <h1 className="mb-6 font-serif text-4xl">Offer products</h1>
        <ProductGrid products={deals} />
      </Container>
    </>
  );
}
