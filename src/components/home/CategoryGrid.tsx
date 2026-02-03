"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { getCollections, ShopifyCollection } from "@/lib/shopify-helpers";

export function CategoryGrid() {
  const [collections, setCollections] = useState<ShopifyCollection[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCollections = async () => {
      const shopifyCollections = await getCollections();
      setCollections(shopifyCollections);
      setLoading(false);
    };
    fetchCollections();
  }, []);

  if (loading) {
    return (
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
        </div>
      </section>
    );
  }

  if (collections.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
          Shop by Category
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-8 mb-8">
          {collections.slice(0, 2).map((collection) => (
            <Link
              key={collection.id}
              href={`/shop?category=${collection.handle}`}
              className="group relative aspect-[4/3] rounded-lg overflow-hidden bg-surface border border-border hover:shadow-xl transition-shadow"
            >
              {collection.image ? (
                <Image
                  src={collection.image.url}
                  alt={collection.image.altText || collection.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-3xl font-bold text-white mb-2">
                  {collection.title}
                </h3>
                {collection.description && (
                  <p className="text-white/90 line-clamp-2">{collection.description}</p>
                )}
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center">
          <Link
            href="/shop"
            className="text-primary hover:text-[#1F3F31] font-medium text-lg transition-colors"
          >
            Shop All Products →
          </Link>
        </div>
      </div>
    </section>
  );
}
