import type { Metadata } from "next";
import { Inter, Bodoni_Moda } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CartProvider } from "@/components/cart/CartProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const bodoni = Bodoni_Moda({ subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {
  title: "Mehribān | L&apos;Essence du Luxe Français",
  description: "Découvrez Mehribān, parfumerie de luxe en Algérie. Livraison dans tout le pays, paiement à la livraison.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <body className={`${inter.variable} ${bodoni.variable} font-sans bg-black text-foreground antialiased`}>
        <CartProvider>
          <Navbar />
          <main className="min-h-screen pt-20">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
