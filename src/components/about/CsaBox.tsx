import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function CsaBox() {
  return (
    <section id="csa" className="py-20 lg:py-24 bg-background scroll-mt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-surface border border-border rounded-2xl shadow-lg p-8 lg:p-12 grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 items-center">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto md:mx-0">
            <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
          <div className="text-center md:text-left">
            <p className="text-sm font-semibold uppercase tracking-wide text-secondary mb-2">
              Community Supported Agriculture
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Subscribe to the Wadee CSA Box
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              We offer premium products from family farms in Palestine through a Community
              Supported Agriculture (CSA) box subscription. Subscribers receive a box of our
              products on a regular schedule, and every box supports the farming families who grow them.
            </p>
            <Link href="/csa">
              <Button variant="primary" size="lg">
                Sign Up for the CSA Box
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
