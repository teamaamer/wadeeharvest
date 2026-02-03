"use client";

import { useState, useEffect } from "react";
import { getAllProducts, convertShopifyProduct } from "@/lib/shopify-helpers";
import { ProductCard } from "@/components/ui/ProductCard";

export function FeaturedProducts() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const shopifyProducts = await getAllProducts(6);
      const converted = shopifyProducts.map(convertShopifyProduct);
      setProducts(converted);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
          Featured Products
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
