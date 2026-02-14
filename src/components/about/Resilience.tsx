import Image from "next/image";

export function Resilience() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6 order-1 lg:order-1">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Farming Under Pressure
            </h2>
            <div className="space-y-4 text-lg text-foreground/80 leading-relaxed">
              <p>
                Wadi Fuqin is also a village that farms under pressure. Surrounded by expanding Israeli settlements and restrictions that threaten access to land and water, people in Wadi Fuqin continue to cultivate what is theirs.
              </p>
              <p>
                In the face of displacement, their answer is persistence: staying rooted, planting, pruning, harvesting, and caring for the terraces season after season. This is <span className="font-semibold text-foreground italic">sumud</span>—steadfastness—expressed through daily work on the land.
              </p>
              <p>
                When we say our products come from Wadi Fuqin, we're sharing more than flavor. We're sharing a story of resilience and a commitment to land. Every bottle of olive oil is a direct link to the families who refuse to abandon their groves—and who challenge injustice by continuing to farm.
              </p>
            </div>
          </div>

          <div className="relative order-2 lg:order-2">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about/grandma.jpg"
                alt="Grandmother from Wadi Fuqin"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary/10 rounded-2xl -z-10"></div>
            <div className="absolute -top-6 -right-6 w-48 h-48 bg-primary/10 rounded-2xl -z-10"></div>
          </div>
        </div>

        <div className="mt-20 bg-surface rounded-2xl p-8 lg:p-12 shadow-xl border border-border">
          <div className="max-w-4xl mx-auto text-center">
            <svg className="w-16 h-16 mx-auto mb-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <h3 className="text-3xl font-bold text-foreground mb-4">Sumud: Steadfastness</h3>
            <p className="text-xl text-foreground/80 leading-relaxed">
              The Arabic word <span className="font-semibold italic">sumud</span> means steadfastness—the determination to remain on the land, to continue living and working despite adversity. In Wadi Fuqin, sumud is not a slogan. It's the daily choice to tend the terraces, harvest the olives, and pass the farm to the next generation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
