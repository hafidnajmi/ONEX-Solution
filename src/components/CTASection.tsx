export const CTASection = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-6">
                <div className="bg-gradient-to-r from-blue-900/50 to-violet-900/50 border border-white/10 rounded-2xl p-8 md:p-16 text-center relative overflow-hidden backdrop-blur-sm">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-30"></div>

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-['Syne']">Ready to upgrade your system?</h2>
                        <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                            Berhenti mengandalkan spreadsheet manual. Mari bangun masa depan yang transparan dan otomatis untuk bisnis Anda.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <button onClick={() => window.dispatchEvent(new CustomEvent('open-contact-modal'))} className="bg-white text-blue-900 px-8 py-3 rounded-full font-bold hover:bg-slate-100 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)] inline-block">
                                Mulai Konsultasi
                            </button>
                            <a href="https://wa.me/628990654384" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-full font-bold text-white border border-white/20 hover:bg-white/10 transition-colors inline-block">
                                WhatsApp Kami
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
