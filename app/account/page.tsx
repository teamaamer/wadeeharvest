"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function AccountPage() {
  useEffect(() => {
    // Get Shopify store domain from environment
    const shopifyDomain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
    
    if (shopifyDomain) {
      // Redirect to Shopify customer login page
      // This will show login form for new users or account page for logged-in users
      window.location.href = `https://${shopifyDomain}/account/login`;
    }
  }, []);

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Sign In</h1>
        <p className="text-muted mb-8">
          Redirecting you to sign in...
        </p>
        <p className="text-sm text-muted">
          If you're not redirected automatically,{" "}
          <Link href="/" className="text-primary hover:underline">
            return to home
          </Link>
        </p>
      </div>
    </div>
  );
}
