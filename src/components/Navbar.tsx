import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { OnexIcon } from './OnexIcon';

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800 py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <div className="flex items-center gap-0.5 cursor-pointer group">
                    <div className="flex items-center justify-center group-hover:scale-110 transition-transform">
                        <OnexIcon className="w-10 h-10" />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-white font-['Syne']">ONEX<span className="text-slate-400 font-normal">Solutions</span></span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <a href="#about" className="text-sm font-medium hover:text-white transition-colors">Tentang Kami</a>
                    <a href="#services" className="text-sm font-medium hover:text-white transition-colors">Layanan</a>
                    <a href="#process" className="text-sm font-medium hover:text-white transition-colors">Proses</a>
                    <a href="#portfolio" className="text-sm font-medium hover:text-white transition-colors">Portofolio</a>
                    <button onClick={() => window.dispatchEvent(new CustomEvent('open-contact-modal'))} className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white px-6 py-2 rounded-full text-sm font-bold transition-all hover:shadow-[0_0_20px_rgba(79,70,229,0.4)] transform hover:-translate-y-0.5 inline-block">
                        Mulai Konsultasi
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-zinc-900 border-b border-zinc-800 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-white">Layanan</a>
                            <a href="#process" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-white">Proses</a>
                            <a href="#portfolio" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-white">Portofolio</a>
                            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-white">Tentang Kami</a>
                            <button onClick={() => { setMobileMenuOpen(false); window.dispatchEvent(new CustomEvent('open-contact-modal')); }} className="bg-blue-600 text-center text-white py-2 rounded-lg w-full">Mulai Konsultasi</button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
