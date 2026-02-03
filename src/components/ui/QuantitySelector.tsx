"use client";

import React from "react";

interface QuantitySelectorProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  min?: number;
}

export function QuantitySelector({
  quantity,
  onIncrease,
  onDecrease,
  min = 1,
}: QuantitySelectorProps) {
  return (
    <div className="inline-flex items-center border border-border rounded-md overflow-hidden">
      <button
        onClick={onDecrease}
        disabled={quantity <= min}
        className="px-4 py-2 hover:bg-surface disabled:opacity-30 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
        aria-label="Decrease quantity"
      >
        −
      </button>
      <span className="px-6 py-2 min-w-[4rem] text-center font-medium border-x border-border">{quantity}</span>
      <button
        onClick={onIncrease}
        className="px-4 py-2 hover:bg-surface transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
}
