import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          {/* Placeholder for cinematic image */}
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=2048')] bg-cover bg-center animate-pulse-slow" />
        </div>

        <div className="relative z-20 text-center px-6">
          <h2 className="text-luxury-gold uppercase tracking-[0.5em] text-sm mb-6 animate-fade-in">Maison de Parfum</h2>
          <h1 className="text-5xl md:text-8xl font-serif mb-8 max-w-4xl mx-auto leading-tight animate-slide-up">
            L&apos;Élégance de <span className="text-gold italic">Mehribān</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 mb-12 max-w-2xl mx-auto font-light tracking-wide">
            Une symphonie de notes rares, conçue pour ceux qui exigent l&apos;exceptionnel.
          </p>
          <Link
            href="/boutique"
            className="inline-block px-12 py-4 border border-luxury-gold text-luxury-gold uppercase tracking-widest text-xs hover:bg-luxury-gold hover:text-black transition-all duration-500"
          >
            Explorer la Collection
          </Link>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-[1px] h-16 bg-luxury-gold/30" />
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-24 px-6 max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif mb-4">La Collection Signature</h2>
          <div className="w-12 h-[1px] bg-luxury-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[1, 2, 3].map((item) => (
            <div key={item} className="luxury-card group p-4 rounded-none">
              <div className="relative aspect-[3/4] mb-6 overflow-hidden bg-white/5">
                <div className="absolute inset-0 flex items-center justify-center text-luxury-gold/20 font-serif text-8xl">
                  {item}
                </div>
                {/* Product Image Placeholder */}
              </div>
              <h3 className="text-lg font-serif mb-2 tracking-wide uppercase">Parfum d&apos;Exception {item}</h3>
              <p className="text-luxury-gold text-sm font-medium mb-4">12,500 DZD</p>
              <Link
                href="/boutique"
                className="text-[10px] uppercase tracking-[0.3em] text-foreground/60 group-hover:text-luxury-gold transition-colors"
              >
                Voir détails
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
