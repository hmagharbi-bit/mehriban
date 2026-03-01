"use client";

import Link from "next/link";
import { useCart } from "../cart/CartProvider";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Navbar() {
    const { totalItems } = useCart();
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { name: "Accueil", href: "/" },
        { name: "Boutique", href: "/boutique" },
        { name: "À propos", href: "/a-propos" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-luxury-gold/10">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="text-2xl font-serif text-gold tracking-widest uppercase">
                    Mehribān
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center space-x-8">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm uppercase tracking-widest hover:text-luxury-gold transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link href="/checkout" className="relative">
                        <ShoppingBag className="w-5 h-5 text-luxury-gold" />
                        {totalItems > 0 && (
                            <span className="absolute -top-2 -right-2 bg-luxury-gold text-black text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                                {totalItems}
                            </span>
                        )}
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-luxury-gold" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={cn(
                    "fixed inset-0 top-20 bg-black z-40 md:hidden transition-transform duration-300 ease-in-out",
                    isOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                <div className="flex flex-col items-center justify-center h-full space-y-8">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-2xl uppercase tracking-[0.2em] font-serif hover:text-luxury-gold"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/checkout"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center space-x-2 text-luxury-gold"
                    >
                        <ShoppingBag />
                        <span>Panier ({totalItems})</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
