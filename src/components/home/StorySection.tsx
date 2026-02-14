import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function StorySection() {
  return (
    <section id="about" className="relative min-h-screen flex items-center overflow-hidden py-16 lg:py-20">
      <div className="absolute inset-0">
        <Image
          src="/images/about/panorama.jpg"
          alt="Palestinian farm landscape in Wadi Fuqin"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/85 to-foreground/75"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-surface drop-shadow-lg text-center">
          About Wadi Fuqin
        </h2>
        <p className="text-lg lg:text-xl text-surface/90 mb-8 lg:mb-10 text-center max-w-3xl mx-auto drop-shadow-md">
          A small Palestinian village where olive trees aren't just a crop—they're a living record of family, season, and home.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center mb-6 lg:mb-8">
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden border-4 border-surface/20 shadow-2xl">
            <Image
              src="/images/about/olives1.jpg"
              alt="Olive harvest in Wadi Fuqin"
              fill
              className="object-cover"
            />
          </div>
          
          <div className="space-y-3 lg:space-y-4">
            <div className="group bg-surface/95 backdrop-blur-sm p-3 lg:p-4 rounded-lg shadow-lg border border-surface/20 hover:shadow-2xl hover:border-primary/50 hover:-translate-y-1 transition-all duration-300">
              <div className="flex gap-2.5 items-start">
                <div className="flex-shrink-0 text-primary group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 lg:w-7 lg:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg lg:text-xl font-bold text-foreground mb-1.5">Generations of Care</h3>
                  <p className="text-foreground/80 leading-relaxed text-xs lg:text-sm">
                    For generations, families in Wadi Fuqin have shaped the land by hand: building stone terraces, tending ancient groves, and harvesting each year with care and patience.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="group bg-surface/95 backdrop-blur-sm p-3 lg:p-4 rounded-lg shadow-lg border border-surface/20 hover:shadow-2xl hover:border-primary/50 hover:-translate-y-1 transition-all duration-300">
              <div className="flex gap-2.5 items-start">
                <div className="flex-shrink-0 text-primary group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 lg:w-7 lg:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg lg:text-xl font-bold text-foreground mb-1.5">Sumud: Steadfastness</h3>
                  <p className="text-foreground/80 leading-relaxed text-xs lg:text-sm">
                    In the face of displacement, their answer is persistence—staying rooted, planting, pruning, and caring for the terraces season after season. Every bottle of olive oil is a direct link to families who refuse to abandon their groves.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="group bg-surface/95 backdrop-blur-sm p-3 lg:p-4 rounded-lg shadow-lg border border-surface/20 hover:shadow-2xl hover:border-primary/50 hover:-translate-y-1 transition-all duration-300">
              <div className="flex gap-2.5 items-start">
                <div className="flex-shrink-0 text-primary group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 lg:w-7 lg:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg lg:text-xl font-bold text-foreground mb-1.5">Ethical Sourcing</h3>
                  <p className="text-foreground/80 leading-relaxed text-xs lg:text-sm">
                    Direct from the family farm. Fair, transparent relationships. Traditional methods. Every purchase helps keep the land cultivated and the community strong.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link href="/about">
            <Button 
              variant="secondary" 
              size="lg"
              className="!bg-surface !text-foreground hover:!bg-surface/90 !border-0 font-bold hover:scale-[1.02] hover:shadow-xl transition-all duration-200 ease-out"
            >
              Learn More About Our Story
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
