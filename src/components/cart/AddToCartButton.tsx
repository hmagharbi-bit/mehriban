"use client";

import { useCart, CartItem } from "./CartProvider";

export default function AddToCartButton({ item }: { item: CartItem }) {
    const { addItem } = useCart();

    return (
        <button
            onClick={() => addItem(item)}
            className="w-full py-5 bg-luxury-gold text-black uppercase tracking-[0.2em] text-xs font-bold hover:bg-gold-light transition-all duration-300"
        >
            Ajouter au Panier
        </button>
    );
}
