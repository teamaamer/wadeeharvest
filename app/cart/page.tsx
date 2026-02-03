"use client";

import Link from "next/link";
import Image from "next/image";
import { useShopifyCart } from "@/context/ShopifyCartContext";
import { formatShopifyPrice } from "@/lib/shopify-helpers";
import { Button } from "@/components/ui/Button";
import { QuantitySelector } from "@/components/ui/QuantitySelector";

export default function CartPage() {
  const { cart, loading, removeItem, updateQuantity, subtotal, checkoutUrl } = useShopifyCart();

  const handleCheckout = () => {
    if (checkoutUrl) {
      window.location.href = checkoutUrl;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background py-12 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted">Loading cart...</p>
        </div>
      </div>
    );
  }

  if (!cart || cart.lines.edges.length === 0) {
    return (
      <div className="min-h-screen bg-background py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Your Cart is Empty</h1>
          <p className="text-muted mb-8">
            Add some delicious Palestinian products to get started!
          </p>
          <Link href="/shop">
            <Button variant="primary" size="lg">
              Continue Shopping
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {cart.lines.edges.map(({ node: line }) => {
                const product = line.merchandise.product;
                const image = product.images.edges[0]?.node;
                
                return (
                  <div
                    key={line.id}
                    className="bg-surface border border-border rounded-lg p-4 flex gap-4"
                  >
                    <div className="relative w-24 h-24 bg-background rounded-md overflow-hidden flex-shrink-0">
                      {image && (
                        <Image
                          src={image.url}
                          alt={image.altText || product.title}
                          fill
                          className="object-cover"
                        />
                      )}
                    </div>

                    <div className="flex-1">
                      <Link
                        href={`/product/${product.handle}`}
                        className="font-semibold hover:text-primary transition-colors"
                      >
                        {product.title}
                      </Link>
                      <p className="text-sm text-muted mb-2">
                        {line.merchandise.title}
                      </p>
                      <p className="font-semibold">
                        {formatShopifyPrice(line.merchandise.priceV2.amount)}
                      </p>
                    </div>

                    <div className="flex flex-col items-end gap-2">
                      <QuantitySelector
                        quantity={line.quantity}
                        onIncrease={() => updateQuantity(line.id, line.quantity + 1)}
                        onDecrease={() => updateQuantity(line.id, line.quantity - 1)}
                      />
                      <button
                        onClick={() => removeItem(line.id)}
                        className="text-sm text-secondary hover:text-[#964A30] transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-surface border border-border rounded-lg p-6 h-fit sticky top-24">
              <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-muted">Subtotal</span>
                  <span className="font-semibold">{formatShopifyPrice(subtotal.toString())}</span>
                </div>
                <div className="flex justify-between text-sm text-muted">
                  <span>Shipping</span>
                  <span>Calculated at checkout</span>
                </div>
              </div>
              <div className="border-t border-border pt-4 mb-6">
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>{formatShopifyPrice(subtotal.toString())}</span>
                </div>
              </div>
              <Button
                variant="primary"
                size="lg"
                onClick={handleCheckout}
                className="w-full mb-4"
                disabled={!checkoutUrl}
              >
                Proceed to Shopify Checkout
              </Button>
              <p className="text-xs text-muted text-center">
                You'll be redirected to Shopify's secure checkout.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
