"use client";

import React from "react";

export interface FilterOption {
  value: string;
  label: string;
}

interface FilterBarProps {
  categories: FilterOption[];
  sizes: string[];
  selectedCategory: string;
  selectedSize: string;
  sortBy: string;
  onCategoryChange: (category: string) => void;
  onSizeChange: (size: string) => void;
  onSortChange: (sort: string) => void;
}

const selectClass =
  "w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background";

export function FilterBar({
  categories,
  sizes,
  selectedCategory,
  selectedSize,
  sortBy,
  onCategoryChange,
  onSizeChange,
  onSortChange,
}: FilterBarProps) {
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
            className={selectClass}
          >
            <option value="all">All Products</option>
            {categories.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
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
            className={selectClass}
            disabled={sizes.length === 0}
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
            className={selectClass}
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
