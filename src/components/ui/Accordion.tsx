"use client";

import React, { useState } from "react";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export function Accordion({
  title,
  children,
  defaultOpen = false,
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 flex items-center justify-between text-left hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
        aria-expanded={isOpen}
      >
        <span className="font-medium">{title}</span>
        <span className="text-2xl">{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && <div className="pb-4 text-muted">{children}</div>}
    </div>
  );
}
