"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { formatShopifyPrice } from "@/lib/shopify-helpers";
import { Button } from "./Button";
import { useShopifyCart } from "@/context/ShopifyCartContext";
import { useToast } from "./Toast";

interface ProductCardProps {
  product: any;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useShopifyCart();
  const { showToast } = useToast();

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (product.variantId) {
      await addItem(product.variantId, 1);
      showToast(`${product.name} added to cart`);
    }
  };

  return (
    <div className="group bg-surface border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <Link href={`/product/${product.slug}`}>
        <div className="relative aspect-square bg-background">
          <Image
            src={product.images[0].src}
            alt={product.images[0].alt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <div className="text-xs text-muted uppercase tracking-wide mb-1">
            {product.category.replace("-", " ")} • {product.size}
          </div>
          <h3 className="font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-muted mb-3 line-clamp-2">
            {product.descriptionShort}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold text-foreground">
              {formatShopifyPrice(product.priceCAD.toString())}
            </span>
          </div>
        </div>
      </Link>
      <div className="px-4 pb-4 flex gap-2">
        <Link href={`/product/${product.slug}`} className="flex-1">
          <Button variant="outline" className="w-full" size="sm">
            View
          </Button>
        </Link>
        <Button
          variant="primary"
          size="sm"
          onClick={handleAddToCart}
          className="flex-1"
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
