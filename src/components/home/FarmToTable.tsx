import Image from "next/image";

export function FarmToTable() {
  const steps = [
    {
      title: "Harvest",
      description: "Hand-picked at peak ripeness from ancient groves",
      image: "/images/step1.png",
    },
    {
      title: "Press",
      description: "Cold-pressed within hours to preserve quality",
      image: "/images/step2.png",
    },
    {
      title: "Bottle",
      description: "Carefully packaged to maintain freshness",
      image: "/images/step3.png",
    },
    {
      title: "Ship",
      description: "Imported directly from Palestine to Canada",
      image: "/images/step4.png",
    },
    {
      title: "Your Table",
      description: "Authentic flavours delivered to your home",
      image: "/images/step5.png",
    },
  ];

  return (
    <section className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
          From Farm to Table
        </h2>
        <div className="relative">
          <div className="absolute top-32 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary hidden lg:block" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 relative">
            {steps.map((step, index) => (
              <div key={step.title} className="group text-center">
                <div className="relative aspect-square mb-4 rounded-lg overflow-hidden border-4 border-border group-hover:border-primary transition-all duration-300 shadow-lg group-hover:shadow-2xl group-hover:-translate-y-2">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-lg font-bold shadow-lg">
                    {index + 1}
                  </div>
                </div>
                <h3 className="font-semibold mb-2 text-lg group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
