import { Hero } from "@/components/home/Hero";
import { AboutTeaser } from "@/components/home/AboutTeaser";
import { GlassPipe } from "@/components/home/GlassPipe";
import { OceanOfHealth } from "@/components/home/OceanOfHealth";
import { ProductSpotlight } from "@/components/home/ProductSpotlight";
import { StoryFeatures } from "@/components/home/StoryFeatures";
import { BookletSection } from "@/components/home/BookletSection";
import { RefillEstimator } from "@/components/home/RefillEstimator";
import { SpecialOffers } from "@/components/home/SpecialOffers";
import { Reviews } from "@/components/home/Reviews";
import { Newsletter } from "@/components/home/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutTeaser />
      <GlassPipe />
      <OceanOfHealth />
      <ProductSpotlight />
      <StoryFeatures />
      <BookletSection />
      <RefillEstimator />
      <SpecialOffers />
      <Reviews />
      <Newsletter />
    </>
  );
}
