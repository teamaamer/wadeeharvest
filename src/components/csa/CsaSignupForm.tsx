"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { submitForm } from "@/lib/forms";
import { CONTACT_EMAIL } from "@/lib/site";

const PRODUCT_OPTIONS = [
  "Olive oil",
  "Medjool dates",
  "Za'atar & spices",
  "Dried fruit",
  "Castile soap",
];

const COUNTRIES = ["Canada", "United States", "Mexico"];

type FormState = {
  name: string;
  email: string;
  phone: string;
  street: string;
  city: string;
  region: string;
  postalCode: string;
  country: string;
  products: string[];
  notes: string;
  agree: boolean;
};

const EMPTY: FormState = {
  name: "",
  email: "",
  phone: "",
  street: "",
  city: "",
  region: "",
  postalCode: "",
  country: "Canada",
  products: [],
  notes: "",
  agree: false,
};

const inputBase =
  "w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background";

function Field({
  id,
  label,
  required,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium mb-2">
        {label} {required && <span className="text-secondary">*</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="text-secondary text-sm mt-1">
          {error}
        </p>
      )}
    </div>
  );
}

export function CsaSignupForm() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSending, setIsSending] = useState(false);
  const [sendError, setSendError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: "" }));
  };

  const toggleProduct = (product: string) => {
    update(
      "products",
      form.products.includes(product)
        ? form.products.filter((p) => p !== product)
        : [...form.products, product]
    );
  };

  const validate = () => {
    const next: Record<string, string> = {};
    if (!form.name.trim()) next.name = "Name is required";
    if (!form.email.trim()) next.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Please enter a valid email address";
    if (!form.street.trim()) next.street = "Street address is required";
    if (!form.city.trim()) next.city = "City is required";
    if (!form.region.trim()) next.region = "Province or state is required";
    if (!form.postalCode.trim()) next.postalCode = "Postal or ZIP code is required";
    if (!form.agree) next.agree = "Please confirm so we can contact you";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate() || isSending) return;

    setIsSending(true);
    setSendError("");
    const result = await submitForm(`CSA box sign-up: ${form.name}`, {
      Name: form.name,
      Email: form.email,
      Phone: form.phone,
      "Street address": form.street,
      City: form.city,
      "Province / State": form.region,
      "Postal / ZIP code": form.postalCode,
      Country: form.country,
      "Products of interest": form.products.join(", ") || "No preference",
      Notes: form.notes,
    });
    setIsSending(false);

    if (!result.ok) {
      setSendError(result.error);
      return;
    }
    setIsSubmitted(true);
    setForm(EMPTY);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isSubmitted) {
    return (
      <div className="bg-surface border border-border rounded-xl p-8 lg:p-12 shadow-lg text-center">
        <div className="text-primary mb-4">
          <svg className="w-20 h-20 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold mb-2">You&apos;re signed up!</h2>
        <p className="text-muted mb-6">
          Thank you for joining the Wadee CSA Box. We&apos;ll be in touch by email to confirm
          your subscription details.
        </p>
        <Link href="/shop" className="text-primary hover:text-[#1F3F31] font-medium">
          Browse our products →
        </Link>
      </div>
    );
  }

  const cls = (key: string) => `${inputBase} ${errors[key] ? "border-secondary" : "border-border"}`;
  const aria = (key: string) => ({
    "aria-invalid": !!errors[key],
    "aria-describedby": errors[key] ? `${key}-error` : undefined,
  });

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-surface border border-border rounded-xl p-6 lg:p-10 shadow-lg space-y-8"
    >
      <fieldset className="space-y-4">
        <legend className="text-xl font-semibold mb-2">Your details</legend>
        <Field id="name" label="Full name" required error={errors.name}>
          <input id="name" type="text" autoComplete="name" value={form.name}
            onChange={(e) => update("name", e.target.value)} className={cls("name")} {...aria("name")} />
        </Field>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Field id="email" label="Email" required error={errors.email}>
            <input id="email" type="email" autoComplete="email" value={form.email}
              onChange={(e) => update("email", e.target.value)} className={cls("email")} {...aria("email")} />
          </Field>
          <Field id="phone" label="Phone number">
            <input id="phone" type="tel" autoComplete="tel" value={form.phone}
              onChange={(e) => update("phone", e.target.value)} className={cls("phone")} />
          </Field>
        </div>
      </fieldset>

      <fieldset className="space-y-4">
        <legend className="text-xl font-semibold mb-2">Delivery address</legend>
        <Field id="street" label="Street address" required error={errors.street}>
          <input id="street" type="text" autoComplete="street-address" value={form.street}
            onChange={(e) => update("street", e.target.value)} className={cls("street")} {...aria("street")} />
        </Field>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Field id="city" label="City" required error={errors.city}>
            <input id="city" type="text" autoComplete="address-level2" value={form.city}
              onChange={(e) => update("city", e.target.value)} className={cls("city")} {...aria("city")} />
          </Field>
          <Field id="region" label="Province / State" required error={errors.region}>
            <input id="region" type="text" autoComplete="address-level1" value={form.region}
              onChange={(e) => update("region", e.target.value)} className={cls("region")} {...aria("region")} />
          </Field>
          <Field id="postalCode" label="Postal / ZIP code" required error={errors.postalCode}>
            <input id="postalCode" type="text" autoComplete="postal-code" value={form.postalCode}
              onChange={(e) => update("postalCode", e.target.value)} className={cls("postalCode")} {...aria("postalCode")} />
          </Field>
          <Field id="country" label="Country" required>
            <select id="country" autoComplete="country-name" value={form.country}
              onChange={(e) => update("country", e.target.value)} className={cls("country")}>
              {COUNTRIES.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </Field>
        </div>
      </fieldset>

      <fieldset>
        <legend className="text-xl font-semibold mb-1">Products you&apos;d most like in your box</legend>
        <p className="text-sm text-muted mb-4">Optional. Choose any that interest you.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {PRODUCT_OPTIONS.map((product) => (
            <label key={product}
              className="flex items-center gap-3 p-3 border border-border rounded-md bg-background cursor-pointer hover:border-primary/50">
              <input type="checkbox" checked={form.products.includes(product)}
                onChange={() => toggleProduct(product)} className="w-5 h-5 accent-[#254D3B]" />
              <span>{product}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <Field id="notes" label="Anything else we should know?">
        <textarea id="notes" rows={3} value={form.notes}
          onChange={(e) => update("notes", e.target.value)} className={`${cls("notes")} resize-none`}
          placeholder="Allergies, delivery instructions, questions…" />
      </Field>

      <div>
        <label className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg border border-primary/20 cursor-pointer">
          <input type="checkbox" checked={form.agree} onChange={(e) => update("agree", e.target.checked)}
            className="mt-0.5 w-5 h-5 accent-[#254D3B]" aria-describedby={errors.agree ? "agree-error" : undefined} />
          <span className="text-sm text-foreground">
            I&apos;d like to join the Wadee CSA Box, and I&apos;m happy for Wadee Harvest to email me
            to confirm my subscription.
          </span>
        </label>
        {errors.agree && (
          <p id="agree-error" className="text-secondary text-sm mt-1">{errors.agree}</p>
        )}
      </div>

      {sendError && (
        <p role="alert" className="text-secondary text-sm">{sendError}</p>
      )}

      <Button type="submit" variant="primary" size="lg" className="w-full" disabled={isSending}>
        {isSending ? "Sending..." : "Sign Up for the CSA Box"}
      </Button>

      <p className="text-xs text-muted text-center">
        Questions? Email us at{" "}
        <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline">{CONTACT_EMAIL}</a>.
        See our <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
      </p>
    </form>
  );
}
