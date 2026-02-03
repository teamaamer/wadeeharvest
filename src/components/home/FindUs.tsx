import Image from "next/image";

export function FindUs() {
  return (
    <section className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
          Find Us In Person
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Kit Coffee */}
          <div className="group bg-background rounded-lg border border-border overflow-hidden hover:shadow-2xl hover:border-primary/50 hover:-translate-y-2 transition-all duration-300">
            <div className="relative aspect-video overflow-hidden">
              <Image
                src="/images/Kitcofeee.png"
                alt="Kit Coffee Peterborough"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="border-t-4 border-primary"></div>
            <div className="p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full shadow-lg bg-primary p-2">
                  <Image
                    src="/images/kiticon.webp"
                    alt="Kit Coffee Icon"
                    width={48}
                    height={48}
                    className="object-cover rounded-full invert"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Kit Coffee</h3>
              <div className="text-muted text-sm space-y-1">
                <p>144 Hunter Street W</p>
                <p>Peterborough, Ontario</p>
                <p>K9H 2K8</p>
              </div>
            </div>
          </div>

          {/* Outdoor Farmers Market */}
          <div className="group bg-background rounded-lg border border-border overflow-hidden hover:shadow-2xl hover:border-primary/50 hover:-translate-y-2 transition-all duration-300">
            <div className="relative aspect-video overflow-hidden">
              <Image
                src="/images/frmrsmarket.webp"
                alt="Peterborough Farmers Market"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="border-t-4 border-primary"></div>
            <div className="p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full shadow-lg bg-primary p-1 flex items-center justify-center">
                  <Image
                    src="/images/frmrsmarket icon.webp"
                    alt="Farmers Market Icon"
                    width={56}
                    height={56}
                    className="object-contain rounded-full"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Outdoor Market</h3>
              <div className="text-muted text-sm space-y-2">
                <div>
                  <p className="font-medium text-foreground">May - October</p>
                  <p>Saturday: 8:00 AM - 1:00 PM</p>
                  <p>Wednesday: 8:00 AM - 1:00 PM</p>
                </div>
                <div className="pt-2 border-t border-border">
                  <p className="font-medium">Quaker Foods City Square</p>
                  <p>215 Charlotte Street</p>
                  <p>Downtown Peterborough</p>
                </div>
              </div>
            </div>
          </div>

          {/* Indoor Farmers Market */}
          <div className="group bg-background rounded-lg border border-border overflow-hidden hover:shadow-2xl hover:border-primary/50 hover:-translate-y-2 transition-all duration-300">
            <div className="relative aspect-video overflow-hidden">
              <Image
                src="/images/indoormarket.webp"
                alt="Peterborough Farmers Market Indoor"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="border-t-4 border-primary"></div>
            <div className="p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full shadow-lg bg-primary p-1 flex items-center justify-center">
                  <Image
                    src="/images/frmrsmarket icon.webp"
                    alt="Farmers Market Icon"
                    width={56}
                    height={56}
                    className="object-contain rounded-full"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Indoor Market</h3>
              <div className="text-muted text-sm space-y-2">
                <div>
                  <p className="font-medium text-foreground">November - April</p>
                  <p>Saturday: 8:00 AM - 1:00 PM</p>
                  <p>Wednesday: 9:00 AM - 1:00 PM</p>
                </div>
                <div className="pt-2 border-t border-border">
                  <p className="font-medium">Peterborough Square</p>
                  <p>340 George Street North</p>
                  <p>Downtown Peterborough</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
