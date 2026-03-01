import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Link from "next/link";
import Image from "next/image";
import { formatPrice } from "@/lib/utils";
import { SanityProduct } from "@/lib/types";

export const dynamic = "force-dynamic";

async function getProducts() {
    return await client.fetch(`*[_type == "product"]{
    _id,
    name,
    "slug": slug.current,
    price,
    category,
    images
  }`);
}

export default async function BoutiquePage() {
    const products = await getProducts();

    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="mb-16">
                <h1 className="text-4xl font-serif mb-4">La Boutique</h1>
                <p className="text-foreground/60 uppercase tracking-widest text-xs">Découvrez notre univers olfactif</p>
            </div>

            {products.length === 0 ? (
                <div className="py-24 text-center border border-luxury-gold/10">
                    <p className="text-foreground/40 italic">La collection est en cours de préparation...</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
                    {products.map((product: SanityProduct) => (
                        <Link key={product._id} href={`/boutique/${product.slug}`} className="luxury-card group p-2">
                            <div className="relative aspect-[4/5] bg-white/5 overflow-hidden mb-6">
                                {product.images && product.images[0] && (
                                    <Image
                                        src={urlForImage(product.images[0]).url()}
                                        alt={product.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                )}
                            </div>
                            <div className="px-2">
                                <p className="text-[10px] uppercase tracking-widest text-luxury-gold mb-2">{product.category}</p>
                                <h2 className="text-lg font-serif mb-2">{product.name}</h2>
                                <p className="text-sm font-medium">{formatPrice(product.price)}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}
