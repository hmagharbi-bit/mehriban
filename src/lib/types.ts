import type { Image } from "sanity";

export interface SanityProduct {
    _id: string;
    name: string;
    slug: string;
    price: number;
    category: string;
    description: string;
    images: Image[];
    notesTop?: string;
    notesHeart?: string;
    notesBase?: string;
}

export interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
    slug: string;
}
