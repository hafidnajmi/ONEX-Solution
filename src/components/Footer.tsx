import { OnexIcon } from './OnexIcon';

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-zinc-950 border-t border-zinc-900 py-12 text-sm">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 rounded flex items-center justify-center text-white">
                                <OnexIcon className="w-20 h-20" />
                            </div>
                            <span className="text-lg font-bold text-white font-['Syne']">ONEX Solutions</span>
                        </div>
                        <p className="text-slate-500 max-w-xs">
                            Agensi transformasi digital yang berfokus pada efisiensi industri, sistem pemantauan, dan otomatisasi alur kerja.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4 font-['Syne']">Quick Links</h4>
                        <ul className="space-y-2 text-slate-500">
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Layanan</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Portofolio</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Tentang Kami</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Kontak</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4 font-['Syne']">Contact</h4>
                        <ul className="space-y-2 text-slate-500">
                            <li>onexsolutions@gmail.com</li>
                            <li>+62 899 0654 384</li>
                            <li>Cikarang, Indonesia</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-600">
                    <p>&copy; {currentYear} PT Pratama Alhabina Wisata. Hak cipta dilindungi.</p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                        <a href="#" className="hover:text-white transition-colors">Instagram</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
