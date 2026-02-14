import Image from "next/image";

export function VillageStory() {
  return (
    <section className="py-20 lg:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/about/panorama.jpg"
              alt="Panoramic view of Wadi Fuqin terraced hills"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Nestled in the Terraced Hills
            </h2>
            <div className="space-y-4 text-lg text-foreground/80 leading-relaxed">
              <p>
                Wadi Fuqin is a small Palestinian village nestled in the terraced hills southwest of Bethlehem—where olive trees aren't just a crop, they're a living record of family, season, and home.
              </p>
              <p>
                For generations, families here have shaped the land by hand: building stone terraces, tending ancient groves, and harvesting each year with care and patience. This is farming that follows the rhythm of the place—cold-pressing olives, preserving what the land gives, and passing knowledge from one generation to the next.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl group">
            <Image
              src="/images/about/olives1.jpg"
              alt="Olive harvest in Wadi Fuqin"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-2xl font-bold text-surface drop-shadow-lg">Ancient Groves</h3>
              <p className="text-surface/90 mt-2 drop-shadow-md">Olive trees cultivated for generations</p>
            </div>
          </div>

          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl group">
            <Image
              src="/images/about/zatar.jpg"
              alt="Date harvest from Wadi Fuqin"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-2xl font-bold text-surface drop-shadow-lg">Sweet Harvest</h3>
              <p className="text-surface/90 mt-2 drop-shadow-md">Dates ripened under the Palestinian sun</p>
            </div>
          </div>

          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl group">
            <Image
              src="/images/about/dates.jpg"
              alt="Za'atar from Wadi Fuqin"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-2xl font-bold text-surface drop-shadow-lg">Wild Za'atar</h3>
              <p className="text-surface/90 mt-2 drop-shadow-md">Handpicked from the hillsides</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
