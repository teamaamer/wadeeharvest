import { Hero } from "@/components/home/Hero";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { StorySection } from "@/components/home/StorySection";
import { WhyWadee } from "@/components/home/WhyWadee";
import { TasteNotes } from "@/components/home/TasteNotes";
import { FarmToTable } from "@/components/home/FarmToTable";
import { Testimonials } from "@/components/home/Testimonials";
import { FindUs } from "@/components/home/FindUs";
import { ShippingReturns } from "@/components/home/ShippingReturns";
import { FAQ } from "@/components/home/FAQ";
import { ContactSection } from "@/components/home/ContactSection";
import { EmailSignup } from "@/components/ui/EmailSignup";

export default function Home() {
  return (
    <div className="pt-24">
      <Hero />
      <CategoryGrid />
      <WhyWadee />
      <FeaturedProducts />
      <StorySection />
      <TasteNotes />
      <FarmToTable />
      <Testimonials />
      <FindUs />
      <ShippingReturns />
      <FAQ />
      <ContactSection />
    </div>
  );
}
