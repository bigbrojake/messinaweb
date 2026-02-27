import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Terminal, Users, CheckCircle } from 'lucide-react';

export default function FeaturesSection() {
    return (
        <section className="py-24 px-6 max-w-7xl mx-auto relative z-20">
            <div className="mb-16 text-center">
                <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-4">Core Messina Pillars</h2>
                <p className="text-gray-500 font-body max-w-2xl mx-auto">
                    Delivering precision consulting through proven methodologies, integrated telemetries, and flexible scaling.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <DiagnosticShuffler />
                <TelemetryTypewriter />
                <ScalableResourceGrid />
            </div>
        </section>
    );
}

function DiagnosticShuffler() {
    const [cards, setCards] = useState([
        "Consulting Lifecycle",
        "Continuous Adaptation",
        "Partner Integration"
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCards(prev => {
                const newCards = [...prev];
                const last = newCards.pop();
                newCards.unshift(last);
                return newCards;
            });
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col h-[350px]">
            <div className="mb-6 flex items-center justify-between">
                <h3 className="font-heading font-bold text-primary text-xl">Agile & Relationship-First</h3>
                <Users className="text-accent" size={24} />
            </div>
            <p className="text-sm text-gray-500 font-body mb-8">
                We prioritize long-term partnerships, adapting instantly to your evolving needs.
            </p>

            <div className="relative flex-grow flex items-center justify-center">
                {cards.map((card, i) => (
                    <div
                        key={card}
                        className="absolute w-full px-6 py-4 rounded-xl bg-background border border-gray-200 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] shadow-sm"
                        style={{
                            transform: `translateY(${i * 12}px) scale(${1 - i * 0.05})`,
                            zIndex: 10 - i,
                            opacity: 1 - i * 0.2
                        }}
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-accent"></div>
                            <span className="font-mono text-sm text-textDark font-semibold">{card}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function TelemetryTypewriter() {
    const [text, setText] = useState("");
    const fullText = "[MTS-AUTO] Phase III: Initiating OS In-Place Upgrade... OK\n[MTS-AUTO] Validating Cloud Trajectory... OK\n[MTS-AUTO] ROI Metrics Generated: +33% Efficiency";

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, i));
            i++;
            if (i > fullText.length) {
                setTimeout(() => { i = 0; }, 2000);
            }
        }, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-textDark rounded-[2rem] p-8 shadow-xl flex flex-col h-[350px] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent"></div>

            <div className="mb-6 flex items-center justify-between">
                <h3 className="font-heading font-bold text-white text-xl">Outcome-Based Delivery</h3>
                <div className="flex items-center gap-2">
                    <span className="animate-pulse w-2 h-2 rounded-full bg-green-500"></span>
                    <span className="text-xs font-mono text-gray-400">LIVE FEED</span>
                </div>
            </div>

            <p className="text-sm text-gray-400 font-body mb-6">
                Turnkey, results-driven solutions powered by measurable automated telemetry.
            </p>

            <div className="flex-grow bg-black/50 rounded-xl p-4 border border-gray-800 font-mono text-xs md:text-sm text-green-400 whitespace-pre-wrap overflow-hidden">
                {text}<span className="animate-pulse inline-block w-2 md:w-3 bg-accent h-4 md:h-5 align-middle ml-1"></span>
            </div>
        </div>
    );
}

function ScalableResourceGrid() {
    const containerRef = useRef(null);
    const nodesRef = useRef([]);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({ repeat: -1, yoyo: true });

            // Randomly 'light up' resource nodes to simulate dynamic scaling
            tl.to('.capacity-bar', { width: '85%', duration: 1.5, ease: 'power2.inOut' })
                .to(nodesRef.current, {
                    backgroundColor: '#00B5E2',
                    opacity: 1,
                    scale: 1.1,
                    duration: 0.1,
                    stagger: {
                        amount: 1,
                        from: "random"
                    }
                }, '<')
                .to('.capacity-label', { innerText: '85% Capacity', duration: 1.5, snap: { innerText: 1 } }, '<')
                .to('.capacity-bar', { width: '30%', duration: 1.5, ease: 'power2.inOut', delay: 1 })
                .to(nodesRef.current, {
                    backgroundColor: '#e5e7eb',
                    opacity: 0.5,
                    scale: 1,
                    duration: 0.1,
                    stagger: {
                        amount: 1,
                        from: "random"
                    }
                }, '<')
                .to('.capacity-label', { innerText: '30% Capacity', duration: 1.5, snap: { innerText: 1 } }, '<');

        }, containerRef);
        return () => ctx.revert();
    }, []);

    // 24 abstract nodes representing staff/resources
    const nodes = Array.from({ length: 24 });

    return (
        <div className="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col h-[350px]" ref={containerRef}>
            <div className="mb-6 flex items-center justify-between">
                <h3 className="font-heading font-bold text-primary text-xl">Flexible Staffing</h3>
                <CheckCircle className="text-accent" size={24} />
            </div>
            <p className="text-sm text-gray-500 font-body mb-8">
                Customized hiring and scalable bench strength to match your deployment schedule.
            </p>

            <div className="relative flex-grow bg-background rounded-xl p-5 border border-gray-200 flex flex-col">

                <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-mono text-gray-400 font-bold uppercase track-widest">Resource Allocation</span>
                    <span className="capacity-label text-xs font-mono text-accent font-bold">30% Capacity</span>
                </div>

                {/* Capacity Bar */}
                <div className="w-full h-2 bg-gray-200 rounded-full mb-6 overflow-hidden">
                    <div className="capacity-bar h-full bg-primary rounded-full" style={{ width: '30%' }}></div>
                </div>

                {/* Dynamic Node Grid */}
                <div className="grid grid-cols-6 gap-2 flex-grow">
                    {nodes.map((_, i) => (
                        <div
                            key={i}
                            ref={el => nodesRef.current[i] = el}
                            className="w-full h-full bg-gray-200 rounded-md transition-colors opacity-50"
                        ></div>
                    ))}
                </div>

            </div>
        </div>
    );
}
