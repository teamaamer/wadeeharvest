"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import {
  createCart,
  addToCart as shopifyAddToCart,
  updateCartLine,
  removeFromCart as shopifyRemoveFromCart,
  getCart,
  ShopifyCart,
} from "@/lib/shopify-helpers";

interface CartContextType {
  cart: ShopifyCart | null;
  loading: boolean;
  addItem: (variantId: string, quantity: number) => Promise<void>;
  removeItem: (lineId: string) => Promise<void>;
  updateQuantity: (lineId: string, quantity: number) => Promise<void>;
  clearCart: () => Promise<void>;
  totalItems: number;
  subtotal: number;
  checkoutUrl: string | null;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function ShopifyCartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<ShopifyCart | null>(null);
  const [loading, setLoading] = useState(false);

  // Initialize cart on mount
  useEffect(() => {
    const initCart = async () => {
      const storedCartId = localStorage.getItem("shopify-cart-id");
      
      if (storedCartId) {
        // Try to fetch existing cart
        const existingCart = await getCart(storedCartId);
        if (existingCart) {
          setCart(existingCart);
          return;
        }
      }
      
      // Create new cart if none exists
      const newCart = await createCart();
      if (newCart) {
        setCart(newCart);
        localStorage.setItem("shopify-cart-id", newCart.id);
      }
    };

    initCart();
  }, []);

  const addItem = async (variantId: string, quantity: number) => {
    setLoading(true);
    try {
      if (!cart) {
        // Create cart if it doesn't exist
        const newCart = await createCart();
        if (newCart) {
          setCart(newCart);
          localStorage.setItem("shopify-cart-id", newCart.id);
        }
        return;
      }

      const updatedCart = await shopifyAddToCart(cart.id, variantId, quantity);
      if (updatedCart) {
        setCart(updatedCart);
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
    } finally {
      setLoading(false);
    }
  };

  const removeItem = async (lineId: string) => {
    if (!cart) return;
    
    setLoading(true);
    try {
      const updatedCart = await shopifyRemoveFromCart(cart.id, [lineId]);
      if (updatedCart) {
        setCart(updatedCart);
      }
    } catch (error) {
      console.error("Error removing from cart:", error);
    } finally {
      setLoading(false);
    }
  };

  const updateQuantity = async (lineId: string, quantity: number) => {
    if (!cart) return;
    
    if (quantity <= 0) {
      await removeItem(lineId);
      return;
    }

    setLoading(true);
    try {
      const updatedCart = await updateCartLine(cart.id, lineId, quantity);
      if (updatedCart) {
        setCart(updatedCart);
      }
    } catch (error) {
      console.error("Error updating cart:", error);
    } finally {
      setLoading(false);
    }
  };

  const clearCart = async () => {
    setLoading(true);
    try {
      const newCart = await createCart();
      if (newCart) {
        setCart(newCart);
        localStorage.setItem("shopify-cart-id", newCart.id);
      }
    } catch (error) {
      console.error("Error clearing cart:", error);
    } finally {
      setLoading(false);
    }
  };

  const totalItems = cart?.lines.edges.reduce(
    (sum, { node }) => sum + node.quantity,
    0
  ) || 0;

  const subtotal = parseFloat(cart?.cost.subtotalAmount.amount || "0");
  const checkoutUrl = cart?.checkoutUrl || null;

  return (
    <CartContext.Provider
      value={{
        cart,
        loading,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        subtotal,
        checkoutUrl,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useShopifyCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useShopifyCart must be used within a ShopifyCartProvider");
  }
  return context;
}
