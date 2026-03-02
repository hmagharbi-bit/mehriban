import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import { notFound } from "next/navigation";
import AddToCartButton from "@/components/cart/AddToCartButton";
import { formatPrice } from "@/lib/utils";
import type { Image as SanityImage } from "sanity";

export const dynamic = "force-dynamic";

async function getProduct(slug: string) {
    return await client.fetch(
        `*[_type == "product" && slug.current == $slug][0]{
    _id,
    name,
    "slug": slug.current,
    price,
    description,
    category,
    images,
    notesTop,
    notesHeart,
    notesBase
  }`,
        { slug }
    );
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const product = await getProduct(slug);

    if (!product) {
        notFound();
    }

    return (
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                {/* Images */}
                <div className="space-y-4">
                    <div className="relative aspect-square bg-white/5 overflow-hidden">
                        {product.images && product.images[0] && (
                            <Image
                                src={urlForImage(product.images[0]).url()}
                                alt={product.name}
                                fill
                                className="object-cover"
                            />
                        )}
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        {product.images?.slice(1).map((image: SanityImage, i: number) => (
                            <div key={i} className="relative aspect-square bg-white/5">
                                <Image
                                    src={urlForImage(image).url()}
                                    alt={`${product.name} ${i + 2}`}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Details */}
                <div className="flex flex-col">
                    <p className="text-luxury-gold uppercase tracking-[0.3em] text-xs mb-4">{product.category}</p>
                    <h1 className="text-4xl md:text-5xl font-serif mb-6">{product.name}</h1>
                    <p className="text-2xl font-serif text-gold mb-8">{formatPrice(product.price)}</p>

                    <div className="prose prose-invert prose-luxury max-w-none mb-12">
                        <p className="text-foreground/70 leading-relaxed font-light">{product.description}</p>
                    </div>

                    {/* Olfactory Notes */}
                    <div className="grid grid-cols-3 gap-8 mb-12 py-8 border-y border-luxury-gold/10">
                        <div>
                            <p className="text-[10px] uppercase tracking-widest text-luxury-gold mb-2">Tête</p>
                            <p className="text-sm font-serif italic">{product.notesTop || "—"}</p>
                        </div>
                        <div>
                            <p className="text-[10px] uppercase tracking-widest text-luxury-gold mb-2">Cœur</p>
                            <p className="text-sm font-serif italic">{product.notesHeart || "—"}</p>
                        </div>
                        <div>
                            <p className="text-[10px] uppercase tracking-widest text-luxury-gold mb-2">Fond</p>
                            <p className="text-sm font-serif italic">{product.notesBase || "—"}</p>
                        </div>
                    </div>

                    <AddToCartButton
                        item={{
                            id: product._id,
                            name: product.name,
                            price: product.price,
                            quantity: 1,
                            image: product.images?.[0] ? urlForImage(product.images[0]).url() : "",
                            slug: product.slug,
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
