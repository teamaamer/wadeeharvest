import { shopifyClient } from './shopify';
import {
  GET_COLLECTIONS,
  GET_ALL_PRODUCTS,
  GET_PRODUCT_BY_HANDLE,
  CREATE_CART,
  ADD_TO_CART,
  UPDATE_CART_LINES,
  REMOVE_FROM_CART,
  GET_CART,
} from './shopify-queries';

export interface ShopifyCollection {
  id: string;
  title: string;
  handle: string;
  description: string;
  image: {
    url: string;
    altText: string | null;
    width: number;
    height: number;
  } | null;
}

export interface ShopifyProduct {
  id: string;
  title: string;
  handle: string;
  description: string;
  descriptionHtml: string;
  priceRange: {
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
  images: {
    edges: Array<{
      node: {
        url: string;
        altText: string | null;
        width: number;
        height: number;
      };
    }>;
  };
  variants: {
    edges: Array<{
      node: {
        id: string;
        title: string;
        priceV2: {
          amount: string;
          currencyCode: string;
        };
        availableForSale: boolean;
        selectedOptions?: Array<{
          name: string;
          value: string;
        }>;
      };
    }>;
  };
  productType: string;
  tags: string[];
}

export interface ShopifyCart {
  id: string;
  checkoutUrl: string;
  lines: {
    edges: Array<{
      node: {
        id: string;
        quantity: number;
        merchandise: {
          id: string;
          title: string;
          priceV2: {
            amount: string;
            currencyCode: string;
          };
          product: {
            title: string;
            handle: string;
            images: {
              edges: Array<{
                node: {
                  url: string;
                  altText: string | null;
                };
              }>;
            };
          };
        };
      };
    }>;
  };
  cost: {
    totalAmount: {
      amount: string;
      currencyCode: string;
    };
    subtotalAmount: {
      amount: string;
      currencyCode: string;
    };
  };
}

export async function getCollections(first: number = 10): Promise<ShopifyCollection[]> {
  try {
    const data: any = await shopifyClient.request(GET_COLLECTIONS, { first });
    return data.collections.edges.map((edge: any) => edge.node);
  } catch (error) {
    console.error('Error fetching collections:', error);
    return [];
  }
}

export async function getAllProducts(first: number = 50): Promise<ShopifyProduct[]> {
  try {
    const data: any = await shopifyClient.request(GET_ALL_PRODUCTS, { first });
    return data.products.edges.map((edge: any) => edge.node);
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

export async function getProductByHandle(handle: string): Promise<ShopifyProduct | null> {
  try {
    const data: any = await shopifyClient.request(GET_PRODUCT_BY_HANDLE, { handle });
    return data.product;
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
}

export async function createCart(): Promise<ShopifyCart | null> {
  try {
    const data: any = await shopifyClient.request(CREATE_CART, {
      input: {},
    });
    return data.cartCreate.cart;
  } catch (error) {
    console.error('Error creating cart:', error);
    return null;
  }
}

export async function addToCart(
  cartId: string,
  merchandiseId: string,
  quantity: number
): Promise<ShopifyCart | null> {
  try {
    const data: any = await shopifyClient.request(ADD_TO_CART, {
      cartId,
      lines: [
        {
          merchandiseId,
          quantity,
        },
      ],
    });
    return data.cartLinesAdd.cart;
  } catch (error) {
    console.error('Error adding to cart:', error);
    return null;
  }
}

export async function updateCartLine(
  cartId: string,
  lineId: string,
  quantity: number
): Promise<ShopifyCart | null> {
  try {
    const data: any = await shopifyClient.request(UPDATE_CART_LINES, {
      cartId,
      lines: [
        {
          id: lineId,
          quantity,
        },
      ],
    });
    return data.cartLinesUpdate.cart;
  } catch (error) {
    console.error('Error updating cart:', error);
    return null;
  }
}

export async function removeFromCart(
  cartId: string,
  lineIds: string[]
): Promise<ShopifyCart | null> {
  try {
    const data: any = await shopifyClient.request(REMOVE_FROM_CART, {
      cartId,
      lineIds,
    });
    return data.cartLinesRemove.cart;
  } catch (error) {
    console.error('Error removing from cart:', error);
    return null;
  }
}

export async function getCart(cartId: string): Promise<ShopifyCart | null> {
  try {
    const data: any = await shopifyClient.request(GET_CART, { cartId });
    return data.cart;
  } catch (error) {
    console.error('Error fetching cart:', error);
    return null;
  }
}

// Helper function to format Shopify price
export function formatShopifyPrice(amount: string, currencyCode: string = 'CAD'): string {
  return new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: currencyCode,
  }).format(parseFloat(amount));
}

// Helper to convert Shopify product to our Product type
export function convertShopifyProduct(shopifyProduct: ShopifyProduct): any {
  const variant = shopifyProduct.variants.edges[0]?.node;
  const image = shopifyProduct.images.edges[0]?.node;

  return {
    id: shopifyProduct.id,
    name: shopifyProduct.title,
    slug: shopifyProduct.handle,
    category: shopifyProduct.productType.toLowerCase() || 'olive-oil',
    priceCAD: parseFloat(shopifyProduct.priceRange.minVariantPrice.amount),
    size: variant?.title || '',
    descriptionShort: shopifyProduct.description.substring(0, 150) + '...',
    descriptionLong: shopifyProduct.description,
    images: shopifyProduct.images.edges.map((edge) => ({
      src: edge.node.url,
      alt: edge.node.altText || shopifyProduct.title,
    })),
    variantId: variant?.id,
    availableForSale: variant?.availableForSale,
  };
}
