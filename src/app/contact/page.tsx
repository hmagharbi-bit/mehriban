export default function ContactPage() {
    return (
        <div className="max-w-7xl mx-auto px-6 py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
                <div>
                    <h1 className="text-5xl font-serif mb-8">Contactez-nous</h1>
                    <p className="text-foreground/60 mb-12 leading-relaxed">
                        Pour toute question concernant nos collections ou votre commande, notre service client est à votre entière disposition.
                    </p>

                    <div className="space-y-8">
                        <div>
                            <p className="text-[10px] uppercase tracking-widest text-luxury-gold mb-2">Siège Social</p>
                            <p className="text-lg font-serif">123 Rue de la Liberté, Alger Centre</p>
                        </div>
                        <div>
                            <p className="text-[10px] uppercase tracking-widest text-luxury-gold mb-2">Email</p>
                            <p className="text-lg font-serif">contact@mehriban.dz</p>
                        </div>
                        <div>
                            <p className="text-[10px] uppercase tracking-widest text-luxury-gold mb-2">Téléphone</p>
                            <p className="text-lg font-serif">+213 (0) 21 00 00 00</p>
                        </div>
                    </div>
                </div>

                <form className="space-y-8 bg-white/5 p-12 border border-luxury-gold/10">
                    <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-foreground/40">Nom</label>
                        <input required className="w-full bg-black border border-white/10 p-4 focus:border-luxury-gold outline-none transition-colors" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-foreground/40">Email</label>
                        <input required type="email" className="w-full bg-black border border-white/10 p-4 focus:border-luxury-gold outline-none transition-colors" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-foreground/40">Message</label>
                        <textarea required rows={5} className="w-full bg-black border border-white/10 p-4 focus:border-luxury-gold outline-none transition-colors" />
                    </div>
                    <button className="w-full py-5 bg-luxury-gold text-black uppercase tracking-[0.3em] text-xs font-bold hover:bg-gold-light transition-all">
                        Envoyer le message
                    </button>
                </form>
            </div>
        </div>
    );
}
