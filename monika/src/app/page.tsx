import { Hero } from "@/components/home/Hero";
import { OfferBanner } from "@/components/home/OfferBanner";
import { TrustSection } from "@/components/home/TrustSection";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { WhyMonika } from "@/components/home/WhyMonika";
import { SeedToBottle } from "@/components/home/SeedToBottle";
import { CookingSection } from "@/components/home/CookingSection";
import { Reviews } from "@/components/home/Reviews";
import { SpecialOffers } from "@/components/home/SpecialOffers";
import { FaqPreview } from "@/components/home/FaqPreview";
import { Newsletter } from "@/components/home/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <OfferBanner />
      <TrustSection />
      <FeaturedProducts />
      <WhyMonika />
      <SeedToBottle />
      <CookingSection />
      <FeaturedProducts
        title="Best Sellers"
        subtitle="Bottles that return to the same kitchens."
        filter="bestseller"
      />
      <Reviews />
      <SpecialOffers />
      <FaqPreview />
      <Newsletter />
    </>
  );
}
