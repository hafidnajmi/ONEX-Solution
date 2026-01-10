import { motion } from 'framer-motion';
import { Target, Users, Lightbulb, Award, CheckCircle2 } from 'lucide-react';

export const AboutSection = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const stats = [
        { number: "10+", label: "Proyek Selesai" },
        { number: "10+", label: "Klien Puas" },
        { number: "2+", label: "Tahun Pengalaman" },
        { number: "95%", label: "Kepuasan Klien" }
    ];

    const values = [
        {
            icon: <Target className="w-6 h-6" />,
            title: "Mission-Driven",
            desc: "Memberdayakan bisnis melalui solusi digital inovatif yang memberikan hasil terukur."
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "Client-Centric",
            desc: "Kesuksesan Anda adalah prioritas kami. Kami membangun kemitraan jangka panjang, bukan hanya proyek."
        },
        {
            icon: <Lightbulb className="w-6 h-6" />,
            title: "Innovation First",
            desc: "Memanfaatkan teknologi mutakhir untuk memecahkan tantangan bisnis yang kompleks."
        },
        {
            icon: <Award className="w-6 h-6" />,
            title: "Excellence",
            desc: "Berkomitmen untuk memberikan kualitas tingkat perusahaan dalam setiap solusi yang kami bangun."
        }
    ];

    const highlights = [
        "Pengembangan perangkat lunak khusus yang disesuaikan dengan kebutuhan Anda",
        "Keahlian full-stack dari frontend hingga backend",
        "Metodologi Agile memastikan pengiriman cepat",
        "Layanan dukungan dan pemeliharaan 24/7",
        "Komunikasi transparan sepanjang proyek"
    ];

    return (
        <section id="about" className="py-24 relative overflow-hidden">
            {/* Subtle glow effects */}
            <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="text-center mb-16"
                >
                    <motion.span
                        variants={fadeInUp}
                        className="inline-block px-4 py-1 rounded-full bg-zinc-900/50 border border-zinc-800 text-xs font-medium text-blue-400 mb-6 backdrop-blur-sm font-mono"
                    >
                        ABOUT_US.md
                    </motion.span>
                    <motion.h2
                        variants={fadeInUp}
                        className="text-3xl md:text-5xl font-bold text-white mb-6 font-['Syne']"
                    >
                        Your Partner in{' '}
                        <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                            Digital Transformation
                        </span>
                    </motion.h2>
                    <motion.p
                        variants={fadeInUp}
                        className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed"
                    >
                        ONEX Solutions adalah agensi transformasi digital yang berspesialisasi dalam membangun
                        solusi perangkat lunak khusus untuk pabrik, UKM, dan perusahaan yang ingin
                        memodernisasi operasi mereka.
                    </motion.p>
                </motion.div>

                {/* Stats Row */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={staggerContainer}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            className="text-center p-6 rounded-xl bg-zinc-900/30 border border-zinc-800 backdrop-blur-sm"
                        >
                            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent font-['Syne'] mb-2">
                                {stat.number}
                            </div>
                            <div className="text-slate-400 text-sm">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Main Content - Two Columns */}
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left Column - About Text & Highlights */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={staggerContainer}
                    >
                        <motion.h3
                            variants={fadeInUp}
                            className="text-2xl md:text-3xl font-bold text-white mb-6 font-['Syne']"
                        >
                            Why Choose ONEX?
                        </motion.h3>

                        <motion.p
                            variants={fadeInUp}
                            className="text-slate-400 mb-8 leading-relaxed"
                        >
                            Dengan pengalaman bertahun-tahun dalam transformasi digital, kami memahami
                            tantangan unik yang dihadapi oleh manufaktur dan usaha kecil hingga menengah.
                            Tim kami menggabungkan keahlian teknis dengan pengetahuan industri untuk memberikan
                            solusi yang benar-benar berfungsi.
                        </motion.p>

                        <motion.div variants={staggerContainer} className="space-y-4">
                            {highlights.map((highlight, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeInUp}
                                    className="flex items-center gap-3 text-slate-300"
                                >
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                                    <span>{highlight}</span>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.div variants={fadeInUp} className="mt-8">
                            <button
                                onClick={() => window.dispatchEvent(new CustomEvent('open-contact-modal'))}
                                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 rounded-lg font-bold text-white transition-all cursor-pointer"
                            >
                                Kerja Sama Dengan Kami
                            </button>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Values Cards */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={staggerContainer}
                        className="grid sm:grid-cols-2 gap-4"
                    >
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                whileHover={{ y: -5, borderColor: 'rgba(139, 92, 246, 0.4)' }}
                                className="group p-5 rounded-xl bg-zinc-950/50 border border-zinc-800 transition-all duration-300 relative overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-600 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                                <div className="w-12 h-12 rounded-lg bg-zinc-900 flex items-center justify-center mb-4 text-slate-300 group-hover:text-violet-400 group-hover:bg-violet-900/20 transition-colors">
                                    {value.icon}
                                </div>
                                <h4 className="text-lg font-bold text-white mb-2 font-['Syne']">
                                    {value.title}
                                </h4>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    {value.desc}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
