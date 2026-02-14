import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function CallToAction() {
  return (
    <section className="py-20 lg:py-28 bg-primary text-surface">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
          From Wadi Fuqin to Your Table
        </h2>
        <p className="text-xl lg:text-2xl text-surface/90 mb-8 leading-relaxed max-w-3xl mx-auto">
          Thank you for helping keep these terraces alive. Every purchase supports the families who refuse to abandon their groves and continue to cultivate the land with care and resilience.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/shop">
            <Button 
              variant="secondary" 
              size="lg"
              className="!bg-surface !text-foreground hover:!bg-surface/90 !border-0 font-bold"
            >
              Shop Our Products
            </Button>
          </Link>
          <Link href="/contact">
            <Button 
              variant="secondary" 
              size="lg"
              className="bg-surface/10 backdrop-blur-sm text-surface border-2 border-surface/30 hover:bg-surface/20"
            >
              Get in Touch
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
