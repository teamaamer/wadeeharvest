import Image from "next/image";

export function StorySection() {
  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/aboutus.png"
          alt="Palestinian farm landscape in Wadi Fuqin"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/80 to-foreground/70"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl lg:text-5xl font-bold mb-12 text-surface drop-shadow-lg text-center">
          Delicious, healthy and ethically sourced Palestinian foods
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden border-4 border-surface/20 shadow-2xl">
            <Image
              src="/images/aboutus.png"
              alt="Palestinian farm landscape in Wadi Fuqin"
              fill
              className="object-cover"
            />
          </div>
          
          <div className="space-y-4">
            <div className="group bg-surface/95 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-surface/20 hover:shadow-2xl hover:border-primary/50 hover:-translate-y-1 transition-all duration-300">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 text-primary group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-foreground leading-relaxed text-lg">
                  Wadee Harvest brings you the authentic flavors of Palestine,
                  sourced directly from our family farm in the village of Wadi
                  Fuqin, near Bethlehem.
                </p>
              </div>
            </div>
            
            <div className="group bg-surface/95 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-surface/20 hover:shadow-2xl hover:border-primary/50 hover:-translate-y-1 transition-all duration-300">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 text-primary group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-foreground leading-relaxed text-lg">
                  For generations, our family has cultivated olives and dates
                  using traditional methods passed down through the ages. Every
                  product we offer carries the rich heritage and dedication of
                  Palestinian farmers.
                </p>
              </div>
            </div>
            
            <div className="group bg-surface/95 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-surface/20 hover:shadow-2xl hover:border-primary/50 hover:-translate-y-1 transition-all duration-300">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 text-primary group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <p className="text-foreground leading-relaxed text-lg">
                  Now based in Peterborough, Ontario, we're proud to share these
                  treasures with Canadian families who appreciate quality,
                  authenticity, and the stories behind their food.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
