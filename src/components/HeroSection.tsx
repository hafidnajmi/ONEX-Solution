import { motion } from 'framer-motion';
import { ArrowRight, Activity, Database } from 'lucide-react';

export const HeroSection = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
            {/* Glow Effects */}
            <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-violet-600/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                >
                    <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/50 border border-zinc-800 text-xs font-medium text-emerald-400 mb-6 backdrop-blur-sm font-mono">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        System Online v1.0
                    </motion.div>

                    <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-6 font-['Syne']">
                        Transform Operational Data into <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">Actionable Growth.</span>
                    </motion.h1>

                    <motion.p variants={fadeInUp} className="text-slate-400 text-lg mb-8 max-w-lg leading-relaxed">
                        Kami membangun ekosistem digital khusus untuk pabrik dan UKM. Pantau sistem, otomatisasi alur kerja, dan kurangi downtime dengan presisi teknis.
                    </motion.p>

                    <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                        <a href="#services" className="flex items-center justify-center gap-2 bg-white text-zinc-950 hover:bg-slate-200 px-8 py-3 rounded-lg font-bold transition-all">
                            Lihat Solusi <ArrowRight className="w-4 h-4" />
                        </a>
                        <a href="#portfolio" className="flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-bold border border-zinc-700 hover:border-blue-500 hover:text-blue-400 transition-all bg-zinc-900/50 backdrop-blur-sm">
                            Lihat Portofolio
                        </a>
                    </motion.div>
                </motion.div>

                {/* Hero Visual - Abstract Dashboard */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden md:block"
                >
                    <div className="relative z-10 bg-zinc-900/60 backdrop-blur-xl border border-zinc-800 rounded-2xl p-6 shadow-2xl shadow-black/50 transform hover:rotate-0 transition-transform duration-700 ease-out perspective-1000 group">
                        {/* Header of fake dashboard */}
                        <div className="flex justify-between items-center mb-6 border-b border-zinc-800 pb-4">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                            </div>
                            <div className="text-xs text-zinc-500 font-mono">ONEX_SYSTEM_MONITOR.exe</div>
                        </div>

                        {/* Body of fake dashboard */}
                        <div className="grid grid-cols-2 gap-4">
                            {/* Widget 1 */}
                            <div className="col-span-2 bg-zinc-950/50 rounded-lg p-4 border border-zinc-800">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-xs text-slate-400">Efisiensi Total</span>
                                    <span className="text-emerald-400 text-xs font-mono">+12.5%</span>
                                </div>
                                <div className="h-24 flex items-end justify-between gap-1">
                                    {[40, 65, 50, 80, 55, 90, 70, 85, 60, 95].map((h, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ height: '0%' }}
                                            animate={{ height: `${h}%` }}
                                            transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                                            className="w-full bg-gradient-to-t from-blue-900/20 to-blue-500 rounded-sm"
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Widget 2 */}
                            <div className="bg-zinc-950/50 rounded-lg p-4 border border-zinc-800">
                                <div className="flex items-center gap-2 mb-3">
                                    <Activity className="w-4 h-4 text-violet-400" />
                                    <span className="text-xs text-slate-400">Beban Server</span>
                                </div>
                                <div className="text-2xl font-mono text-white font-bold">42%</div>
                                <div className="w-full bg-zinc-800 h-1 mt-2 rounded-full overflow-hidden">
                                    <div className="bg-violet-500 w-[42%] h-full"></div>
                                </div>
                            </div>

                            {/* Widget 3 */}
                            <div className="bg-zinc-950/50 rounded-lg p-4 border border-zinc-800">
                                <div className="flex items-center gap-2 mb-3">
                                    <Database className="w-4 h-4 text-emerald-400" />
                                    <span className="text-xs text-slate-400">Database</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                                    <span className="text-sm font-mono text-emerald-400">CONNECTED</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Decorative background elements behind dashboard */}
                    <div className="absolute -z-10 top-10 -right-10 w-full h-full border border-blue-500/30 rounded-2xl"></div>
                    <div className="absolute -z-10 -bottom-5 -left-5 w-2/3 h-2/3 bg-gradient-to-tr from-blue-600/10 to-violet-600/10 rounded-2xl blur-xl"></div>
                </motion.div>
            </div>
        </section>
    );
};
