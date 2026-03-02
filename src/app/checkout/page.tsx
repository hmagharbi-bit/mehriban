"use client";

import { useState } from "react";
import { useCart, CartItem } from "@/components/cart/CartProvider";
import { formatPrice } from "@/lib/utils";
import Image from "next/image";
import { Trash2 } from "lucide-react";

const WILAYAS = [
    "Alger", "Oran", "Constantine", "Annaba", "Blida", "Setif", "Chlef", "Batna", "Djelfa", "Tizi Ouzou"
];

export default function CheckoutPage() {
    const { items, totalPrice, removeItem, clearCart } = useCart();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.currentTarget);
        const orderData = {
            fullName: formData.get("fullName"),
            phone: formData.get("phone"),
            wilaya: formData.get("wilaya"),
            commune: formData.get("commune"),
            address: formData.get("address"),
            items: items.map((item: CartItem) => ({
                _type: 'object',
                _key: item.id,
                product: { _type: 'reference', _ref: item.id },
                quantity: item.quantity
            })),
            totalPrice,
        };

        try {
            // In a real app, you'd call an API route to handle the Sanity write
            // For this demo, we'll simulate it or show how to structure it
            console.log("Submitting order:", orderData);
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000));

            setSuccess(true);
            clearCart();
        } catch (error) {
            console.error("Order error:", error);
        } finally {
            setLoading(false);
        }
    };

    if (success) {
        return (
            <div className="max-w-3xl mx-auto px-6 py-24 text-center">
                <h1 className="text-4xl font-serif mb-6 text-luxury-gold">Merci pour votre commande !</h1>
                <p className="text-foreground/60 mb-12">
                    Nous vous contacterons par téléphone sous 24h pour confirmer la livraison.
                </p>
                <button
                    onClick={() => window.location.href = "/"}
                    className="px-12 py-4 border border-luxury-gold text-luxury-gold uppercase tracking-widest text-xs hover:bg-luxury-gold hover:text-black transition-all"
                >
                    Retour à l&apos;accueil
                </button>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            <h1 className="text-4xl font-serif mb-12">Finaliser ma commande</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Order Summary */}
                <div className="space-y-8">
                    <h2 className="text-xl font-serif uppercase tracking-widest border-b border-luxury-gold/20 pb-4">Résumé</h2>
                    {items.length === 0 ? (
                        <p className="text-foreground/40 italic">Votre panier est vide.</p>
                    ) : (
                        <div className="space-y-6">
                            {items.map((item: CartItem) => (
                                <div key={item.id} className="flex space-x-4 items-center border-b border-luxury-gold/5 pb-6">
                                    <div className="relative w-20 h-24 bg-white/5 flex-shrink-0">
                                        {item.image && <Image src={item.image} alt={item.name} fill className="object-cover" />}
                                    </div>
                                    <div className="flex-grow">
                                        <h3 className="font-serif uppercase text-sm">{item.name}</h3>
                                        <p className="text-xs text-foreground/40">Quantité: {item.quantity}</p>
                                        <p className="text-sm text-luxury-gold mt-1">{formatPrice(item.price)}</p>
                                    </div>
                                    <button onClick={() => removeItem(item.id)} className="text-foreground/20 hover:text-red-500">
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            ))}
                            <div className="pt-6 border-t border-luxury-gold/20 flex justify-between items-center text-xl font-serif">
                                <span>Total</span>
                                <span className="text-gold">{formatPrice(totalPrice)}</span>
                            </div>
                        </div>
                    )}
                </div>

                {/* Checkout Form */}
                <form onSubmit={handleSubmit} className="space-y-8 bg-white/5 p-8 border border-luxury-gold/10">
                    <h2 className="text-xl font-serif uppercase tracking-widest border-b border-luxury-gold/20 pb-4">Livraison</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-widest text-foreground/40">Nom Complet</label>
                            <input name="fullName" required className="w-full bg-black border border-white/10 p-3 focus:border-luxury-gold outline-none transition-colors" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-widest text-foreground/40">Téléphone</label>
                            <input name="phone" required type="tel" className="w-full bg-black border border-white/10 p-3 focus:border-luxury-gold outline-none transition-colors" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-widest text-foreground/40">Wilaya</label>
                            <select name="wilaya" required className="w-full bg-black border border-white/10 p-3 focus:border-luxury-gold outline-none transition-colors appearance-none">
                                <option value="">Sélectionner</option>
                                {WILAYAS.map(w => <option key={w} value={w}>{w}</option>)}
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-widest text-foreground/40">Commune</label>
                            <input name="commune" required className="w-full bg-black border border-white/10 p-3 focus:border-luxury-gold outline-none transition-colors" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-foreground/40">Adresse exacte</label>
                        <textarea name="address" required rows={3} className="w-full bg-black border border-white/10 p-3 focus:border-luxury-gold outline-none transition-colors" />
                    </div>

                    <div className="bg-luxury-gold/5 p-4 border border-luxury-gold/20">
                        <p className="text-[10px] text-luxury-gold uppercase tracking-[0.2em] mb-1">Mode de Paiement</p>
                        <p className="text-sm italic">Paiement à la livraison (Cash on Delivery)</p>
                    </div>

                    <button
                        disabled={items.length === 0 || loading}
                        type="submit"
                        className="w-full py-5 bg-luxury-gold text-black uppercase tracking-[0.3em] text-xs font-bold hover:bg-gold-light transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? "Traitement en cours..." : "Commander Maintenant"}
                    </button>
                </form>
            </div>
        </div>
    );
}
