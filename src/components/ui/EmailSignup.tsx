"use client";

import React, { useState } from "react";
import { Button } from "./Button";
import { useToast } from "./Toast";

export function EmailSignup() {
  const [email, setEmail] = useState("");
  const { showToast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      showToast("Thank you for signing up!");
      setEmail("");
    }
  };

  return (
    <div className="bg-surface border border-border rounded-lg p-8 text-center">
      <h3 className="text-2xl font-semibold mb-2">
        We will begin selling online for Canada-wide delivery any day now.
      </h3>
      <p className="text-muted mb-6">
        Sign up for updates and be the first to know when we launch.
      </p>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
            aria-label="Email address"
          />
          <Button type="submit" variant="primary">
            Sign Up
          </Button>
        </div>
        <p className="text-xs text-muted mt-3">
          We will never share or sell your email and you can unsubscribe anytime.
        </p>
      </form>
    </div>
  );
}
