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
import { EmailSignup } from "@/components/ui/EmailSignup";

export default function Home() {
  return (
    <>
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
      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <EmailSignup />
        </div>
      </section>
    </>
  );
}
