import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';

export default function HeroSection() {
    const containerRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo('.hero-text',
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: 'power3.out', delay: 0.2 }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative h-[100dvh] w-full flex items-end pb-24 lg:pb-32 px-6 overflow-hidden">
            {/* Background Image & Gradient overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop")' }}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/50 to-transparent mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-textDark/90 via-textDark/40 to-transparent"></div>
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-start gap-4">
                <h1 className="flex flex-col gap-1 text-white">
                    <span className="hero-text text-3xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight text-accent">
                        Empower your Enterprise
                    </span>
                    <span className="hero-text text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-extrabold italic tracking-tight uppercase" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.8)', color: 'transparent' }}>
                        Solutions that Connect.
                    </span>
                </h1>

                <p className="hero-text max-w-xl text-md md:text-lg text-white/80 font-body mb-6">
                    Empowering organizations through innovative IT consulting, flexible resource staffing, and results-driven service delivery.
                </p>

                <Link
                    to="/contact"
                    className="hero-text magnetic-btn px-8 py-4 text-base font-semibold text-white bg-accent rounded-[2rem] shadow-lg border border-accent/50"
                >
                    <span className="relative z-10">Whether you're a client or a consultant — we're here to help.</span>
                    <span className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity duration-300 ease-out z-0"></span>
                </Link>
            </div>
        </section>
    );
}
