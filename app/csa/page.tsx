import { CsaSignupForm } from "@/components/csa/CsaSignupForm";

export const metadata = {
  title: "CSA Box Sign-Up | Wadee Harvest",
  description:
    "Subscribe to the Wadee Harvest Community Supported Agriculture (CSA) box: premium products from family farms in Palestine, delivered on a regular schedule.",
};

export default function CsaPage() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-secondary mb-2">
            Community Supported Agriculture
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Sign Up for the CSA Box</h1>
          <p className="text-lg text-muted leading-relaxed">
            Receive premium products from family farms in Palestine on a regular schedule.
            Fill in the form and we&apos;ll email you to confirm your subscription.
          </p>
        </div>
        <CsaSignupForm />
      </div>
    </div>
  );
}
