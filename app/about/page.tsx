import { AboutHero } from "@/components/about/AboutHero";
import { VillageStory } from "@/components/about/VillageStory";
import { Resilience } from "@/components/about/Resilience";
import { EthicalSourcing } from "@/components/about/EthicalSourcing";
import { ImageGallery } from "@/components/about/ImageGallery";
import { CallToAction } from "@/components/about/CallToAction";

export const metadata = {
  title: "About Wadi Fuqin | Wadee Harvest",
  description: "Learn about our family farm in Wadi Fuqin, Palestine, where generations have cultivated olives, dates, and za'atar with care and resilience.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <VillageStory />
      <Resilience />
      <EthicalSourcing />
      <ImageGallery />
      <CallToAction />
    </>
  );
}
