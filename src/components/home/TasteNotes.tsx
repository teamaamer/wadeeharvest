import Image from "next/image";

export function TasteNotes() {
  return (
    <section className="py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">
          Taste Notes & Pairings
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="group bg-surface rounded-lg border border-border overflow-hidden hover:shadow-2xl hover:border-primary/50 hover:-translate-y-2 transition-all duration-300">
            <div className="relative aspect-video overflow-hidden">
              <Image
                src="/images/oiluses.png"
                alt="Olive oil uses and pairings"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-primary">
                Olive Oil
              </h3>
              <div className="mb-4">
                <h4 className="font-medium mb-2 text-sm">Flavor Profile</h4>
                <p className="text-muted text-sm">
                  Rich, peppery finish with notes of fresh grass and green
                  almonds. Golden-green color with a robust, authentic taste.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2 text-sm">Perfect Pairings</h4>
                <ul className="text-muted text-sm space-y-1 list-disc list-inside">
                  <li>Za'atar dip with warm pita</li>
                  <li>Drizzled over labneh</li>
                  <li>Fresh salad dressings</li>
                  <li>Roasting vegetables</li>
                  <li>Finishing pasta dishes</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="group bg-surface rounded-lg border border-border overflow-hidden hover:shadow-2xl hover:border-secondary/50 hover:-translate-y-2 transition-all duration-300">
            <div className="relative aspect-video overflow-hidden">
              <Image
                src="/images/datesuses.png"
                alt="Dates uses and pairings"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-secondary">
                Dates
              </h3>
              <div className="mb-4">
                <h4 className="font-medium mb-2 text-sm">Flavor Profile</h4>
                <p className="text-muted text-sm">
                  Naturally sweet with caramel-like notes. Soft, tender texture
                  perfect for snacking or cooking.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2 text-sm">Perfect Pairings</h4>
                <ul className="text-muted text-sm space-y-1 list-disc list-inside">
                  <li>Stuffed with tahini</li>
                  <li>Wrapped with almonds</li>
                  <li>Morning oatmeal topping</li>
                  <li>Cheese board addition</li>
                  <li>Natural energy snack</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
