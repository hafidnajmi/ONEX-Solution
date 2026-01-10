import { motion } from 'framer-motion';
import { ArrowRight, Factory, Layers, Zap, BarChart3, Cpu, Lock } from 'lucide-react';

export const ServicesSection = () => {
    const services = [
        {
            icon: <Factory className="w-6 h-6" />,
            title: "Industrial Monitoring",
            desc: "Sensor IoT & dashboard real-time untuk melacak kesehatan mesin."
        },
        {
            icon: <Layers className="w-6 h-6" />,
            title: "Custom ERP/CRM",
            desc: "Sistem internal yang dibuat khusus sesuai dengan alur kerja Anda."
        },
        {
            icon: <Zap className="w-6 h-6" />,
            title: "Workflow Automation",
            desc: "Kurangi tugas admin manual hingga 80% dengan pemicu cerdas."
        },
        {
            icon: <BarChart3 className="w-6 h-6" />,
            title: "Data Visualization",
            desc: "Ubah data SQL mentah menjadi laporan BI yang indah dan siap untuk pengambilan keputusan."
        },
        {
            icon: <Cpu className="w-6 h-6" />,
            title: "AI Integration",
            desc: "Chatbot untuk dokumen internal dan logika prediktif."
        },
        {
            icon: <Lock className="w-6 h-6" />,
            title: "Secure Architecture",
            desc: "Standar keamanan tingkat perusahaan dengan aliran data terenkripsi."
        }
    ];

    return (
        <section id="services" className="py-24 bg-zinc-900/30 border-y border-zinc-900">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-['Syne']">Core Capabilities</h2>
                        <p className="text-slate-400 max-w-xl">Solusi digital komprehensif yang dirancang untuk skalabilitas dan keamanan.</p>
                    </div>
                    <a href="#contact" className="text-blue-400 hover:text-blue-300 flex items-center gap-2 font-medium">
                        Lihat daftar layanan lengkap <ArrowRight className="w-4 h-4" />
                    </a>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -5, borderColor: 'rgba(59, 130, 246, 0.4)' }}
                            className="group p-6 rounded-xl bg-zinc-950 border border-zinc-800 transition-all duration-300 relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-violet-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                            <div className="w-12 h-12 rounded-lg bg-zinc-900 flex items-center justify-center mb-4 text-slate-300 group-hover:text-blue-400 group-hover:bg-blue-900/20 transition-colors">
                                {service.icon}
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2 font-['Syne']">{service.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">{service.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
