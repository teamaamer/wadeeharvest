"use client";

import React, { useState, useEffect } from "react";
import { getCollections, ShopifyCollection } from "@/lib/shopify-helpers";

interface FilterBarProps {
  selectedCategory: string;
  selectedSize: string;
  sortBy: string;
  onCategoryChange: (category: string) => void;
  onSizeChange: (size: string) => void;
  onSortChange: (sort: string) => void;
}

export function FilterBar({
  selectedCategory,
  selectedSize,
  sortBy,
  onCategoryChange,
  onSizeChange,
  onSortChange,
}: FilterBarProps) {
  const [collections, setCollections] = useState<ShopifyCollection[]>([]);
  const sizes = ["all", "375ml", "500ml", "750ml", "500g", "1kg"];

  useEffect(() => {
    const fetchCollections = async () => {
      const shopifyCollections = await getCollections();
      setCollections(shopifyCollections);
    };
    fetchCollections();
  }, []);

  return (
    <div className="bg-surface border border-border rounded-lg p-4 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label htmlFor="category" className="block text-sm font-medium mb-2">
            Category
          </label>
          <select
            id="category"
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
          >
            <option value="all">All Products</option>
            {collections.map((collection) => (
              <option key={collection.id} value={collection.handle}>
                {collection.title}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="size" className="block text-sm font-medium mb-2">
            Size
          </label>
          <select
            id="size"
            value={selectedSize}
            onChange={(e) => onSizeChange(e.target.value)}
            className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
          >
            <option value="all">All Sizes</option>
            {sizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="sort" className="block text-sm font-medium mb-2">
            Sort By
          </label>
          <select
            id="sort"
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>
      </div>
    </div>
  );
}
