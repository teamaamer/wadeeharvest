"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { formatShopifyPrice, productMetaLabel, ProductOption } from "@/lib/shopify-helpers";
import { Button } from "./Button";
import { SizeSelector } from "./SizeSelector";
import { useShopifyCart } from "@/context/ShopifyCartContext";
import { useToast } from "./Toast";

interface ProductCardProps {
  product: any;
  // When the shop is filtered by size, start with that size selected.
  preferredSize?: string;
}

function pickOption(options: ProductOption[], preferredSize?: string): ProductOption | undefined {
  return (
    options.find((o) => o.available && preferredSize && o.size === preferredSize) ??
    options.find((o) => o.available) ??
    options[0]
  );
}

export function ProductCard({ product, preferredSize }: ProductCardProps) {
  const { addItem } = useShopifyCart();
  const { showToast } = useToast();
  const options: ProductOption[] = product.options ?? [];
  const hasSizes = options.length > 1;
  const [selectedId, setSelectedId] = useState<string | undefined>(
    pickOption(options, preferredSize)?.id
  );

  useEffect(() => {
    setSelectedId(pickOption(options, preferredSize)?.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [preferredSize, product.id]);

  const selected = options.find((o) => o.id === selectedId);
  const price = selected?.price ?? product.priceCAD;
  const variantId = selected?.id ?? product.variantId;
  const soldOut = selected ? !selected.available : product.availableForSale === false;

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (variantId && !soldOut) {
      await addItem(variantId, 1);
      showToast(`${product.name}${hasSizes && selected ? ` (${selected.size})` : ""} added to cart`);
    }
  };

  return (
    <div className="group bg-surface border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
      <Link href={`/product/${product.slug}`}>
        <div className="relative aspect-square bg-background">
          <Image
            src={product.images[0].src}
            alt={product.images[0].alt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4 pb-3">
          <div className="text-xs text-muted uppercase tracking-wide mb-1">
            {productMetaLabel(product)}
          </div>
          <h3 className="font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-muted mb-3 line-clamp-2">
            {product.descriptionShort}
          </p>
          <span className="text-lg font-semibold text-foreground">
            {formatShopifyPrice(price.toString())}
          </span>
        </div>
      </Link>
      {hasSizes && (
        <div className="px-4 pb-3">
          <SizeSelector options={options} selectedId={selectedId ?? ""} onSelect={setSelectedId} />
        </div>
      )}
      <div className="px-4 pb-4 flex gap-2 mt-auto">
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
          disabled={soldOut}
        >
          {soldOut ? "Sold Out" : "Add to Cart"}
        </Button>
      </div>
    </div>
  );
}
