"use client";

import { useState, useMemo, useEffect } from "react";
import { getAllProducts, ShopifyProduct, convertShopifyProduct } from "@/lib/shopify-helpers";
import { ProductCard } from "@/components/ui/ProductCard";
import { FilterBar } from "@/components/ui/FilterBar";

export default function ShopPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedSize, setSelectedSize] = useState("all");
  const [sortBy, setSortBy] = useState("featured");

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const shopifyProducts = await getAllProducts();
      const converted = shopifyProducts.map(convertShopifyProduct);
      setProducts(converted);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (selectedCategory !== "all") {
      filtered = filtered.filter((p) => 
        p.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    if (selectedSize !== "all") {
      filtered = filtered.filter((p) => p.size === selectedSize);
    }

    if (sortBy === "price-low") {
      filtered.sort((a, b) => a.priceCAD - b.priceCAD);
    } else if (sortBy === "price-high") {
      filtered.sort((a, b) => b.priceCAD - a.priceCAD);
    }

    return filtered;
  }, [products, selectedCategory, selectedSize, sortBy]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background pt-24 py-12 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted">Loading products...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-24 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Shop All Products</h1>
          <p className="text-muted">
            Authentic Palestinian olive oil and dates from our family farm in Wadi Fuqin.
          </p>
        </div>

        <FilterBar
          selectedCategory={selectedCategory}
          selectedSize={selectedSize}
          sortBy={sortBy}
          onCategoryChange={setSelectedCategory}
          onSizeChange={setSelectedSize}
          onSortChange={setSortBy}
        />

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-muted mb-4">No products match your filters</p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSelectedSize("all");
                setSortBy("featured");
              }}
              className="text-primary hover:text-[#1F3F31] font-medium"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
