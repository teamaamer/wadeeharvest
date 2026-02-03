"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Navbar,
  NavBody,
  NavItems,
  NavbarLogo,
  NavbarButton,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useShopifyCart } from "@/context/ShopifyCartContext";

const navigation = [
  { name: "Home", link: "/" },
  { name: "Shop", link: "/shop" },
  { name: "About", link: "/#about" },
  { name: "Contact", link: "/#contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { totalItems } = useShopifyCart();

  return (
    <Navbar>
      <NavBody>
        <NavbarLogo />
        <NavItems items={navigation} />
        <div className="flex items-center gap-3">
          <Link
            href="/cart"
            className="relative text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded p-2"
            aria-label={`Cart with ${totalItems} items`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-secondary text-secondary-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
          <NavbarButton href="/shop" as={Link}>
            Shop Now
          </NavbarButton>
        </div>
      </NavBody>

      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <div className="flex items-center gap-2">
            <Link
              href="/cart"
              className="relative text-foreground hover:text-primary transition-colors p-2"
              aria-label={`Cart with ${totalItems} items`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-secondary text-secondary-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            <MobileNavToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
          </div>
        </MobileNavHeader>
        <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-foreground hover:text-primary transition-colors w-full"
            >
              {item.name}
            </Link>
          ))}
          <NavbarButton
            href="/shop"
            as={Link}
            onClick={() => setIsOpen(false)}
            className="w-full mt-4"
          >
            Shop Now
          </NavbarButton>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
