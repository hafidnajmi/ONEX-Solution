import { motion } from 'framer-motion';
import { CheckCircle2, XCircle, X } from 'lucide-react';

export const ProblemSolution = () => {
    return (
        <section id="process" className="py-24 relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-['Syne']">Why Choose <span className="text-blue-500">ONEX</span>?</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">Kami menjembatani kesenjangan antara tantangan manufaktur tradisional dan efisiensi digital modern.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                    {/* The Problem */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="p-8 rounded-2xl bg-zinc-900/30 border border-red-900/20 relative group overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 rounded-lg bg-red-900/20 flex items-center justify-center mb-6 text-red-500">
                                <XCircle className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4 font-['Syne']">Traditional Standard</h3>
                            <ul className="space-y-4">
                                {[
                                    "Kesalahan entri data manual",
                                    "Downtime tak terduga & blind spot",
                                    "Sistem lama yang tidak terhubung",
                                    "Siklus pelaporan yang lambat"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-400">
                                        <X className="w-5 h-5 text-red-500/50 shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* The Solution */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="p-8 rounded-2xl bg-zinc-900/80 border border-blue-500/30 relative group overflow-hidden shadow-[0_0_50px_-12px_rgba(37,99,235,0.1)]"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 rounded-lg bg-blue-900/30 flex items-center justify-center mb-6 text-blue-400">
                                <CheckCircle2 className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4 font-['Syne']">The ONEX Standard</h3>
                            <ul className="space-y-4">
                                {[
                                    "Presisi real-time otomatis",
                                    "Peringatan pemeliharaan prediktif",
                                    "Integrasi API yang mulus",
                                    "Visualisasi dashboard instan"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-200">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
