"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getProductByHandle, getAllProducts, convertShopifyProduct, formatShopifyPrice } from "@/lib/shopify-helpers";
import { Button } from "@/components/ui/Button";
import { QuantitySelector } from "@/components/ui/QuantitySelector";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Accordion } from "@/components/ui/Accordion";
import { ProductCard } from "@/components/ui/ProductCard";
import { useShopifyCart } from "@/context/ShopifyCartContext";
import { useToast } from "@/components/ui/Toast";

export default function ProductPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [product, setProduct] = useState<any>(null);
  const [relatedProducts, setRelatedProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useShopifyCart();
  const { showToast } = useToast();

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      const shopifyProduct = await getProductByHandle(slug);
      if (shopifyProduct) {
        const converted = convertShopifyProduct(shopifyProduct);
        setProduct(converted);
        
        // Fetch related products (same category)
        const allProducts = await getAllProducts();
        const related = allProducts
          .filter(p => p.productType === shopifyProduct.productType && p.handle !== slug)
          .slice(0, 3)
          .map(convertShopifyProduct);
        setRelatedProducts(related);
      }
      setLoading(false);
    };
    fetchProduct();
  }, [slug]);

  const handleAddToCart = async () => {
    if (product?.variantId) {
      await addItem(product.variantId, quantity);
      showToast(`${quantity} × ${product.name} added to cart`);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background pt-24 py-12 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted">Loading product...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-background pt-24 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <Link href="/shop" className="text-primary hover:text-[#1F3F31]">
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    showToast("Link copied to clipboard!");
  };

  return (
    <div className="min-h-screen bg-background pt-24 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Shop", href: "/shop" },
            { label: product.name },
          ]}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
          <div className="relative aspect-square bg-surface rounded-lg overflow-hidden border border-border">
            <Image
              src={product.images[0].src}
              alt={product.images[0].alt}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div>
            <div className="text-sm text-muted uppercase tracking-wide mb-2">
              {product.category.replace("-", " ")} • {product.size}
            </div>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-3xl font-semibold text-primary mb-6">
              {formatShopifyPrice(product.priceCAD.toString())}
            </p>
            <p className="text-muted mb-6 leading-relaxed">
              {product.descriptionShort}
            </p>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Quantity</label>
              <QuantitySelector
                quantity={quantity}
                onIncrease={() => setQuantity(quantity + 1)}
                onDecrease={() => setQuantity(Math.max(1, quantity - 1))}
              />
            </div>

            <div className="flex gap-4 mb-6">
              <Button
                variant="primary"
                size="lg"
                onClick={handleAddToCart}
                className="flex-1"
              >
                Add to Cart
              </Button>
              <Button variant="outline" size="lg" onClick={handleShare}>
                Share
              </Button>
            </div>

            <div className="bg-surface border border-border rounded-lg p-4 mb-6 flex items-center gap-3">
              <svg className="w-6 h-6 text-muted flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
              <p className="text-sm text-muted">
                Pay over time for orders over $35 (UI only - no real integration)
              </p>
            </div>

            <Accordion title="View Full Details">
              <p className="leading-relaxed">{product.descriptionLong}</p>
            </Accordion>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <h2 className="text-3xl font-bold mb-8">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
