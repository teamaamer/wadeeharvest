"use client";

import { formatShopifyPrice, ProductOption } from "@/lib/shopify-helpers";
import { cn } from "@/lib/utils";

interface SizeSelectorProps {
  options: ProductOption[];
  selectedId: string;
  onSelect: (id: string) => void;
  size?: "sm" | "lg";
  showPrices?: boolean;
}

// Buttons for choosing a product size (e.g. 300g / 500g). Each button can
// show that size's price. Sizes that are sold out are shown but disabled.
export function SizeSelector({
  options,
  selectedId,
  onSelect,
  size = "sm",
  showPrices = false,
}: SizeSelectorProps) {
  return (
    <div role="radiogroup" aria-label="Size" className="flex flex-wrap gap-2">
      {options.map((option) => {
        const selected = option.id === selectedId;
        return (
          <button
            key={option.id}
            type="button"
            role="radio"
            aria-checked={selected}
            disabled={!option.available}
            onClick={() => onSelect(option.id)}
            className={cn(
              "rounded-md border font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-40 disabled:cursor-not-allowed disabled:line-through",
              size === "sm" ? "px-3 py-1.5 text-sm" : "px-5 py-2.5 text-base",
              selected
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-background text-foreground hover:border-primary"
            )}
          >
            {option.size}
            {showPrices && (
              <span className={cn("ml-2", selected ? "text-primary-foreground/80" : "text-muted")}>
                {formatShopifyPrice(option.price.toString())}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
