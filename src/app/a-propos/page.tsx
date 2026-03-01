export default function AboutPage() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-24">
            <h1 className="text-5xl font-serif mb-12 text-center">Notre Héritage</h1>

            <div className="space-y-16 text-foreground/80 leading-relaxed text-lg font-light">
                <section className="space-y-6">
                    <p>
                        Mehribān est née d&apos;une vision : marier la sophistication de la haute parfumerie française avec la richesse et la générosité de la culture algérienne.
                    </p>
                    <p>
                        Chaque fragrance est une histoire, un voyage olfactif conçu avec les ingrédients les plus rares. Nos maîtres parfumeurs à Grasse travaillent main dans la main avec nos équipes à Alger pour créer des essences qui résonnent avec l&apos;âme de notre pays.
                    </p>
                </section>

                <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="relative aspect-square bg-white/5 border border-luxury-gold/10" />
                    <div className="space-y-4">
                        <h2 className="text-2xl font-serif text-gold">L&apos;Excellence du Détail</h2>
                        <p>
                            Du flacon à la boîte, chaque élément est pensé pour offrir une expérience de luxe inégalée. Le cristal, l&apos;or et le velours se rencontrent pour sublimer le nectar qu&apos;ils protègent.
                        </p>
                    </div>
                </section>

                <section className="text-center py-16 border-t border-luxury-gold/10">
                    <h2 className="text-3xl font-serif mb-8 italic">&quot;Le parfum est l&apos;ombre de l&apos;âme.&quot;</h2>
                    <p className="max-w-2xl mx-auto italic opacity-60">— Maison Mehribān</p>
                </section>
            </div>
        </div>
    );
}
