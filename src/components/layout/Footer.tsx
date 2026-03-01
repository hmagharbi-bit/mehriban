import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-black border-t border-luxury-gold/10 py-16">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
                <div>
                    <div>
                        <h2 className="text-xl font-serif text-gold tracking-widest uppercase mb-6">Mehribān</h2>
                        <p className="text-sm text-foreground/60 leading-relaxed max-w-xs">
                            L&apos;essence du luxe français au cœur de l&apos;Algérie. Des parfums d&apos;exception pour des moments inoubliables.
                        </p>
                    </div>
                </div>

                <div>
                    <h3 className="text-xs uppercase tracking-widest text-luxury-gold mb-6">Navigation</h3>
                    <ul className="space-y-4 text-sm">
                        <li><Link href="/" className="hover:text-luxury-gold">Accueil</Link></li>
                        <li><Link href="/boutique" className="hover:text-luxury-gold">Boutique</Link></li>
                        <li><Link href="/a-propos" className="hover:text-luxury-gold">À propos</Link></li>
                        <li><Link href="/contact" className="hover:text-luxury-gold">Contact</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xs uppercase tracking-widest text-luxury-gold mb-6">Contact</h3>
                    <ul className="space-y-4 text-sm text-foreground/60">
                        <li>Alger, Algérie</li>
                        <li>contact@mehriban.dz</li>
                        <li>+213 00 00 00 00</li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-luxury-gold/5 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-foreground/40 gap-4">
                <p>© 2024 Mehribān. Tous droits réservés.</p>
                <div className="flex space-x-6">
                    <Link href="/mentions-legales" className="hover:text-luxury-gold">Mentions Légales</Link>
                    <Link href="/politique-de-confidentialite" className="hover:text-luxury-gold">Confidentialité</Link>
                </div>
            </div>
        </footer>
    );
}
