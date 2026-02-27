import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="mt-20 bg-textDark text-background rounded-t-[4rem] px-8 pt-16 pb-8 relative z-10 w-full">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-gray-700 pb-12 mb-8">
                <div className="flex flex-col gap-4">
                    <h2 className="text-3xl font-heading font-bold text-white">MTS</h2>
                    <p className="text-sm text-gray-400 font-body max-w-xs">
                        Empower organizations through innovative IT consulting, flexible resource staffing, and results-driven service delivery.
                    </p>
                </div>

                <div className="flex flex-col gap-4">
                    <h3 className="text-lg font-heading font-semibold text-white">Navigation</h3>
                    <div className="flex flex-col gap-2">
                        <Link to="/about" className="text-sm text-gray-400 hover:text-accent transition-colors">About Us</Link>
                        <Link to="/services" className="text-sm text-gray-400 hover:text-accent transition-colors">Services</Link>
                        <Link to="/case-studies" className="text-sm text-gray-400 hover:text-accent transition-colors">Case Studies</Link>
                        <Link to="/contact" className="text-sm text-gray-400 hover:text-accent transition-colors">Contact</Link>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <h3 className="text-lg font-heading font-semibold text-white">Contact</h3>
                    <div className="flex flex-col gap-2">
                        <a href="mailto:info@messina-llc.com" className="text-sm text-gray-400 hover:text-accent transition-colors">info@messina-llc.com</a>
                        <p className="text-sm text-gray-400">Newburyport, MA</p>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-xs text-gray-500 uppercase tracking-widest">© 2026 Messina Technology Solutions</p>

                <div className="flex items-center gap-2 px-4 py-2 bg-black/30 rounded-[2rem] border border-gray-800">
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <span className="text-xs font-mono text-gray-300 uppercase">System Operational</span>
                </div>
            </div>
        </footer>
    );
}
