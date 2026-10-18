"use client";

import { useState, useMemo, useEffect } from "react";
import { getAllProducts, convertShopifyProduct } from "@/lib/shopify-helpers";
import { ProductCard } from "@/components/ui/ProductCard";
import { FilterBar, FilterOption } from "@/components/ui/FilterBar";

// Sorts sizes by amount, with millilitres/litres before grams/kilograms.
function sizeSortKey(size: string): [number, number] {
  const match = size.match(/^(\d+(?:\.\d+)?)(ml|l|g|kg)$/);
  if (!match) return [2, 0];
  const amount = parseFloat(match[1]);
  const unit = match[2];
  if (unit === "ml") return [0, amount];
  if (unit === "l") return [0, amount * 1000];
  if (unit === "g") return [1, amount];
  return [1, amount * 1000];
}

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

      // Homepage category tiles link here as /shop?category=olive-oil
      const requested = new URLSearchParams(window.location.search).get("category");
      if (requested && converted.some((p: { category: string }) => p.category === requested)) {
        setSelectedCategory(requested);
      }
      setLoading(false);
    };
    fetchProducts();
  }, []);

  // Category options come from each product's Product type in Shopify.
  const categories = useMemo<FilterOption[]>(() => {
    const seen = new Map<string, string>();
    for (const p of products) {
      if (!seen.has(p.category)) seen.set(p.category, p.categoryLabel);
    }
    return Array.from(seen, ([value, label]) => ({ value, label })).sort((a, b) =>
      a.label.localeCompare(b.label)
    );
  }, [products]);

  // Size options only list sizes that exist in the chosen category.
  const sizes = useMemo<string[]>(() => {
    const inCategory =
      selectedCategory === "all" ? products : products.filter((p) => p.category === selectedCategory);
    const all = new Set<string>();
    inCategory.forEach((p) => p.sizes.forEach((s: string) => all.add(s)));
    return Array.from(all).sort((a, b) => {
      const [ga, va] = sizeSortKey(a);
      const [gb, vb] = sizeSortKey(b);
      return ga - gb || va - vb;
    });
  }, [products, selectedCategory]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setSelectedSize("all");
  };

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (selectedCategory !== "all") {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    if (selectedSize !== "all") {
      filtered = filtered.filter((p) => p.sizes.includes(selectedSize));
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
            Authentic premium products from family farms in Palestine.
          </p>
        </div>

        <FilterBar
          categories={categories}
          sizes={sizes}
          selectedCategory={selectedCategory}
          selectedSize={selectedSize}
          sortBy={sortBy}
          onCategoryChange={handleCategoryChange}
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
