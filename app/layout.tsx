import type { Metadata } from "next";
import "./globals.css";
import { ShopifyCartProvider } from "@/context/ShopifyCartContext";
import { ToastProvider } from "@/components/ui/Toast";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Wadee Harvest - Authentic Palestinian Olive Oil & Dates | Peterborough, ON",
  description: "Based in Peterborough, Ontario we import the rich flavours of Palestinian cuisine from home. Premium extra virgin olive oil and Medjool dates from our family farm in Wadi Fuqin.",
  keywords: "Palestinian olive oil, Medjool dates, Peterborough, Ontario, extra virgin olive oil, authentic Palestinian food",
  openGraph: {
    title: "Wadee Harvest - Flavours of Palestine",
    description: "Premium Palestinian olive oil and dates imported directly from our family farm in Wadi Fuqin.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght,YOPQ@100..900,300&display=swap" rel="stylesheet" />
      </head>
      <body>
        <ShopifyCartProvider>
          <ToastProvider>
            <Header />
            <main className="pt-24">{children}</main>
            <Footer />
          </ToastProvider>
        </ShopifyCartProvider>
      </body>
    </html>
  );
}
