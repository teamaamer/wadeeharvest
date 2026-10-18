"use client";

import React, { useState } from "react";
import { Button } from "./Button";
import { useToast } from "./Toast";
import { submitForm } from "@/lib/forms";

export function EmailSignup() {
  const [email, setEmail] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState("");
  const { showToast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSending) return;
    setIsSending(true);
    setError("");
    const result = await submitForm("Updates sign-up", { Email: email });
    setIsSending(false);
    if (!result.ok) {
      setError(result.error);
      return;
    }
    showToast("Thank you for signing up!");
    setEmail("");
  };

  return (
    <div className="bg-surface border border-border rounded-lg p-8 text-center">
      <h3 className="text-2xl font-semibold mb-2">
        Stay in the loop
      </h3>
      <p className="text-muted mb-6">
        Sign up to hear about new harvests and exclusive offers.
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
          <Button type="submit" variant="primary" disabled={isSending}>
            {isSending ? "Sending..." : "Sign Up"}
          </Button>
        </div>
        {error && (
          <p role="alert" className="text-secondary text-sm mt-3">
            {error}
          </p>
        )}
        <p className="text-xs text-muted mt-3">
          We will never share or sell your email and you can unsubscribe anytime.
        </p>
      </form>
    </div>
  );
}
