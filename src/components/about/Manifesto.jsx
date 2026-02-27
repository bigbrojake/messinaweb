import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Manifesto() {
    const containerRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Create a simulated SplitText effect by wrapping words
            if (textRef.current) {
                const text = textRef.current.innerText;
                textRef.current.innerHTML = '';
                const words = text.split(' ');
                words.forEach(word => {
                    const span = document.createElement('span');
                    span.className = 'inline-block opacity-0 translate-y-4';
                    span.innerHTML = word + '&nbsp;';
                    textRef.current.appendChild(span);
                });

                gsap.to(textRef.current.children, {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.05,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 75%",
                    }
                });
            }

            gsap.to('.parallax-bg', {
                yPercent: 30,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative py-32 px-6 w-full min-h-[80vh] flex items-center justify-center overflow-hidden bg-textDark">
            {/* Parallax Background */}
            <div
                className="parallax-bg absolute top-[-20%] left-0 w-full h-[140%] bg-cover bg-center opacity-10"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop")' }}
            ></div>

            <div className="relative z-10 max-w-5xl mx-auto text-center">
                <h2 className="text-accent font-mono text-sm tracking-widest uppercase mb-8">The Manifesto</h2>
                <p ref={textRef} className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight">
                    Our mission is to empower organizations through innovative IT consulting, flexible resource staffing, and results-driven service delivery.
                </p>
            </div>
        </section>
    );
}
