export default function TrustAwards() {
    return (
        <div className="w-full bg-primary text-white py-12 px-6 relative z-20 border-t border-accent/20">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">

                <div className="flex-1">
                    <h2 className="text-xl md:text-2xl font-heading font-bold text-accent mb-2">
                        Award Winning Dell Partners
                    </h2>
                    <p className="text-sm md:text-base font-body text-white/80 max-w-lg">
                        Proven excellence and partnership driving your critical IT infrastructure forwards.
                    </p>
                </div>

                <div className="flex-1 flex flex-col md:flex-row items-center justify-end gap-6 md:gap-12">

                    <div className="flex flex-col items-center md:items-start border-l border-white/20 pl-6">
                        <span className="text-2xl font-mono text-white mb-1">2019</span>
                        <span className="text-xs uppercase tracking-widest text-accent font-semibold">Best Partner in a Crisis Award</span>
                    </div>

                    <div className="flex flex-col items-center md:items-start border-l border-white/20 pl-6">
                        <span className="text-2xl font-mono text-white mb-1">1st Choice</span>
                        <span className="text-xs uppercase tracking-widest text-accent font-semibold">Partner of Dell Technologies</span>
                    </div>

                    <div className="flex flex-col items-center md:items-start border-l border-accent border-l-2 pl-6">
                        <span className="text-3xl font-mono text-white mb-1">2024</span>
                        <span className="text-xs uppercase tracking-widest text-accent font-semibold">Best Consulting Partner</span>
                    </div>

                </div>
            </div>
        </div>
    );
}
