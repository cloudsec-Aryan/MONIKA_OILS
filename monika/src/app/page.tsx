import { Hero } from "@/components/home/Hero";
import { TrustSection } from "@/components/home/TrustSection";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { WhyMonika } from "@/components/home/WhyMonika";
import { SeedToBottle } from "@/components/home/SeedToBottle";
import { Reviews } from "@/components/home/Reviews";
import { SpecialOffers } from "@/components/home/SpecialOffers";
import { FaqPreview } from "@/components/home/FaqPreview";
import { Newsletter } from "@/components/home/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustSection />
      <FeaturedProducts />
      <WhyMonika />
      <SeedToBottle />
      <Reviews />
      <SpecialOffers />
      <FaqPreview />
      <Newsletter />
    </>
  );
}
