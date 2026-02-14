import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero-background.mp4" type="video/mp4" />
      </video>
      
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/70"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-7xl font-bold text-surface mb-6 leading-tight drop-shadow-lg">
            Flavours of Palestine
          </h1>
          <p className="text-xl lg:text-2xl text-surface/90 mb-8 leading-relaxed drop-shadow-md">
            Based in Peterborough, Ontario we bring the rich flavours of
            Palestinian cuisine from our family farm to your table.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/shop">
              <Button variant="primary" size="lg">
                Shop Now
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="secondary" size="lg" className="bg-surface/20 backdrop-blur-sm text-surface border-2 border-surface/30 hover:bg-surface/30">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
