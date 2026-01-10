import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, ChevronRight, X, ChevronLeft, ExternalLink, Calendar, Users } from 'lucide-react';
import { useState } from 'react';

interface Project {
    id: number;
    title: string;
    tag: string;
    stat: string;
    color: string;
    thumbnail: string;
    images: string[];
    description: string;
    client: string;
    year: string;
    technologies: string[];
    results: string[];
}

export const PortfolioSection = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const projects: Project[] = [
        {
            id: 1,
            title: "Predictive Maintenance Dashboard",
            tag: "Data Monitoring",
            stat: "Efisiensi +30%",
            color: "from-blue-600 to-cyan-500",
            thumbnail: "/energy.jpeg",
            images: ["/energy.jpeg", "/predictive.jpeg", "/topology_predictive.png"],
            description: "Sistem pemantauan IoT komprehensif untuk fasilitas manufaktur suku cadang otomotif. Pelacakan kinerja mesin secara real-time dan peringatan pemeliharaan prediktif.",
            client: "Demo Project",
            year: "2025",
            technologies: ["Node-Red", "Grafana", "MySQL"],
            results: [
                "Peningkatan 30% dalam efisiensi produksi",
                "Pengurangan 45% downtime tak terduga",
                "Pemantauan real-time dari 200+ sensor"
            ]
        },
        {
            id: 2,
            title: "ONEX AI Agent - Internal Knowledge Assistant for Any Business",
            tag: "AI Chatbot-RAG System",
            stat: "Jawaban Berbasis Data",
            color: "from-violet-600 to-purple-500",
            thumbnail: "/halaman_chatbot.png",
            images: ["/halaman_chatbot.png", "/chatbot_rag.png"],
            description: "Platform chatbot berbasis Retrieval-Augmented Generation (RAG) yang memungkinkan perusahaan dari konsultan hingga manufaktur,untuk mengubah dokumen internal (PDF, SOP, case study) menjadi asisten digital 24/7. Sistem ini menjawab pertanyaan pengguna dengan konteks relevan, menangkap lead secara otomatis, dan menyajikan respons terstruktur melalui antarmuka web ringan.",
            client: "Internal Use Case - Demo Project",
            year: "2025",
            technologies: ["HTML/CSS/JS", "n8n", "Supabase", "Google Sheets API", "RAG + OpenAI"],
            results: [
                "Mengubah pengetahuan internal menjadi layanan digital 24/7",
                "Menangkap lead secara otomatis",
                "Mengurangi waktu respon dari jam menjadi detik-meningkatkan kepercayaan klien"
            ]
        },
        {
            id: 3,
            title: "Weighing System & Cp/Cpk Analysis",
            tag: "Dashboard System",
            stat: "Visualisasi Data",
            color: "from-emerald-600 to-teal-500",
            thumbnail: "/weight_system.png",
            images: ["/weight_system.png", "/db_weight.png"],
            description: "Sistem manajemen penimbangan (Weighing System) berbasis desktop yang dirancang khusus untuk lini produksi di pabrik. Sistem ini tidak hanya mencatat data berat produk secara real-time dari timbangan digital, tetapi juga melakukan analisis statistik proses (Cp/Cpk) untuk memastikan kualitas produksi selalu dalam batas spesifikasi.",
            client: "Demo Project",
            year: "2025",
            technologies: ["JavaScript", "Python", "HTML", "SQL Server", "CSS"],
            results: [
                "Akurasi inventaris 99.9%",
                "Pemrosesan pesanan 60% lebih cepat",
                "Manajemen stok prediktif"
            ]
        }
    ];

    const openModal = (project: Project) => {
        setSelectedProject(project);
        setCurrentImageIndex(0);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedProject(null);
        setCurrentImageIndex(0);
        document.body.style.overflow = 'unset';
    };

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedProject) {
            setCurrentImageIndex((prev) =>
                prev === selectedProject.images.length - 1 ? 0 : prev + 1
            );
        }
    };

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedProject) {
            setCurrentImageIndex((prev) =>
                prev === 0 ? selectedProject.images.length - 1 : prev - 1
            );
        }
    };

    return (
        <section id="portfolio" className="py-24 relative overflow-hidden bg-black">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-['Syne']">
                        Featured Deployments
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto">
                        Menjelajahi solusi teknologi terbaru kami di berbagai sektor industri.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            onClick={() => openModal(project)}
                            className="group relative rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 cursor-pointer transition-all duration-300 hover:border-zinc-600 shadow-xl"
                        >
                            {/* Card Image */}
                            <div className="h-56 w-full relative overflow-hidden">
                                <img
                                    src={project.thumbnail}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent opacity-80"></div>

                                <div className="absolute bottom-4 left-4 flex gap-2">
                                    <span className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono text-white border border-white/20 uppercase tracking-widest">
                                        {project.tag}
                                    </span>
                                </div>

                                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                                    <ExternalLink className="w-4 h-4 text-white" />
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2 font-['Syne'] group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>
                                <div className="flex items-center gap-2 mb-6">
                                    <TrendingUp className="w-4 h-4 text-emerald-500" />
                                    <span className="text-sm text-emerald-400 font-medium">{project.stat}</span>
                                </div>
                                <div className="flex items-center text-sm text-zinc-500 group-hover:text-zinc-300 transition-colors">
                                    Lihat Detail Proyek <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal Popup */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/95 backdrop-blur-xl"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-zinc-900 rounded-3xl border border-zinc-800 shadow-2xl no-scrollbar"
                        >
                            {/* Close Button */}
                            <button
                                onClick={closeModal}
                                className="absolute top-6 right-6 z-50 p-2 rounded-full bg-black/50 hover:bg-zinc-800 text-white transition-colors border border-white/10"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            <div className="flex flex-col">
                                {/* Top: Image Gallery (Landscape) */}
                                <div className="relative w-full h-[300px] md:h-[450px] bg-zinc-900 group">
                                    <AnimatePresence mode="wait">
                                        <motion.img
                                            key={currentImageIndex}
                                            src={selectedProject.images[currentImageIndex]}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="w-full h-full object-cover"
                                        />
                                    </AnimatePresence>

                                    {/* Gradient Overlay for Text Readability if needed */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-20"></div>

                                    {/* Nav Arrows */}
                                    <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
                                        <button onClick={prevImage} className="p-3 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors pointer-events-auto backdrop-blur-sm border border-white/5 opacity-0 group-hover:opacity-100 duration-300">
                                            <ChevronLeft className="w-6 h-6" />
                                        </button>
                                        <button onClick={nextImage} className="p-3 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors pointer-events-auto backdrop-blur-sm border border-white/5 opacity-0 group-hover:opacity-100 duration-300">
                                            <ChevronRight className="w-6 h-6" />
                                        </button>
                                    </div>

                                    {/* Thumbnails - Floating at bottom of image */}
                                    <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 px-4 z-10">
                                        {selectedProject.images.map((img, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => setCurrentImageIndex(idx)}
                                                className={`h-12 w-20 rounded-md overflow-hidden border-2 transition-all shadow-lg ${idx === currentImageIndex ? 'border-blue-500 scale-110 ring-2 ring-blue-500/20' : 'border-white/20 opacity-70 hover:opacity-100 hover:scale-105'}`}
                                            >
                                                <img src={img} className="w-full h-full object-cover" />
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Bottom: Project Details */}
                                <div className="p-8 md:p-10">
                                    <div className="flex flex-col md:flex-row gap-10">
                                        {/* Main Description Column */}
                                        <div className="flex-1">
                                            <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-mono tracking-widest uppercase mb-4">
                                                {selectedProject.tag}
                                            </div>
                                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-['Syne'] leading-tight">
                                                {selectedProject.title}
                                            </h2>

                                            <div className="prose prose-invert max-w-none text-zinc-400 leading-relaxed mb-8">
                                                <p>{selectedProject.description}</p>
                                            </div>

                                            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                                                <TrendingUp className="w-4 h-4 text-emerald-400" /> Key Results
                                            </h4>
                                            <div className="grid sm:grid-cols-2 gap-3">
                                                {selectedProject.results.map((res, i) => (
                                                    <div key={i} className="flex items-start gap-3 text-sm text-zinc-400 p-3 rounded-lg bg-zinc-800/50 border border-zinc-800">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                                                        {res}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Sidebar / Meta Info Column */}
                                        <div className="w-full md:w-80 flex-shrink-0 space-y-8">
                                            <div className="p-6 rounded-2xl bg-zinc-800/30 border border-zinc-700/50 space-y-6">
                                                <div>
                                                    <p className="text-[10px] uppercase text-zinc-500 mb-1 font-bold tracking-wider">Client</p>
                                                    <div className="flex items-center gap-2 text-zinc-200">
                                                        <Users className="w-4 h-4 text-blue-400" />
                                                        {selectedProject.client}
                                                    </div>
                                                </div>
                                                <div>
                                                    <p className="text-[10px] uppercase text-zinc-500 mb-1 font-bold tracking-wider">Timeline</p>
                                                    <div className="flex items-center gap-2 text-zinc-200">
                                                        <Calendar className="w-4 h-4 text-blue-400" />
                                                        {selectedProject.year}
                                                    </div>
                                                </div>
                                                <div className="pt-4 border-t border-zinc-700/50">
                                                    <p className="text-[10px] uppercase text-zinc-500 mb-3 font-bold tracking-wider">Tech Stack</p>
                                                    <div className="flex flex-wrap gap-2">
                                                        {selectedProject.technologies.map((tech, i) => (
                                                            <span key={i} className="px-2.5 py-1 bg-zinc-900 rounded text-[11px] font-medium text-zinc-400 border border-zinc-700 shadow-sm">
                                                                {tech}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};