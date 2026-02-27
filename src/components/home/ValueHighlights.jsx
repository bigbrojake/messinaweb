import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Clock, ShieldCheck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ValueHighlights() {
    const containerRef = useRef(null);

    const highlights = [
        {
            icon: <Target size={28} className="text-accent" />,
            title: "Tailored Solutions",
            desc: "We customize our services to fit your unique hiring needs with precision."
        },
        {
            icon: <Clock size={28} className="text-accent" />,
            title: "Always Available",
            desc: "Our team is here for you anytime, ensuring support when you need it most."
        },
        {
            icon: <ShieldCheck size={28} className="text-accent" />,
            title: "25+ Years of Experience",
            desc: "With over 25 years, we excel in talent solutions that drive your success."
        }
    ];

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo('.highlight-card',
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 85%",
                    }
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-24 px-6 max-w-7xl mx-auto relative z-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {highlights.map((item, i) => (
                    <div key={i} className="highlight-card group relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100/50 backdrop-blur-md transition-all duration-500 hover:shadow-2xl overflow-hidden cursor-pointer">
                        {/* Dynamic Gradient Background Glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl z-0"></div>

                        <div className="relative z-10 w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-500 transform group-hover:scale-110 group-hover:-rotate-3">
                            {/* We override the child text color with group-hover text color cascade */}
                            <div className="text-accent group-hover:text-white transition-colors duration-500">
                                {item.icon}
                            </div>
                        </div>
                        <h3 className="relative z-10 text-xl font-heading font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-300">{item.title}</h3>
                        <p className="relative z-10 text-gray-600 font-body text-sm leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
