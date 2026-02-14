import Image from "next/image";

export function ImageGallery() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Life on the Farm
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            From harvest to table, every step is a labor of love and dedication.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl group">
            <Image
              src="/images/about/volunteers1.jpg"
              alt="Volunteers helping with harvest"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-2xl font-bold text-surface drop-shadow-lg">Community Harvest</h3>
              <p className="text-surface/90 mt-2 drop-shadow-md">Volunteers join the harvest season</p>
            </div>
          </div>

          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl group">
            <Image
              src="/images/about/volunteers2.jpg"
              alt="Harvest volunteers in the groves"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-2xl font-bold text-surface drop-shadow-lg">Working Together</h3>
              <p className="text-surface/90 mt-2 drop-shadow-md">Hands that tend the ancient groves</p>
            </div>
          </div>

          <div className="relative aspect-[4/3] md:col-span-2 rounded-2xl overflow-hidden shadow-xl group">
            <Image
              src="/images/about/grapes.jpg"
              alt="Grape vines in Wadi Fuqin"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-3xl font-bold text-surface drop-shadow-lg">Abundant Harvest</h3>
              <p className="text-surface/90 mt-2 text-lg drop-shadow-md">Grapes ripening on the terraced hillsides</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
