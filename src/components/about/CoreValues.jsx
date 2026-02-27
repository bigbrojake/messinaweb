export default function CoreValues() {
    const values = [
        { title: "Agile & Efficient" },
        { title: "Relationship-First" },
        { title: "Innovation-Driven" }
    ];

    return (
        <section className="py-32 overflow-hidden bg-background relative border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-6 mb-12">
                <h2 className="text-accent font-mono text-sm tracking-widest uppercase">Operational Axioms</h2>
            </div>

            <div className="flex flex-col gap-12 or-gap-16 w-full px-6 md:px-12 lg:px-24">
                {values.map((v, i) => (
                    <div key={i} className="group cursor-default w-full">
                        <h3 className="text-5xl md:text-7xl lg:text-9xl font-heading font-black tracking-tighter uppercase transition-all duration-700 ease-in-out text-transparent"
                            style={{ WebkitTextStroke: '2px #002D72' }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.color = '#002D72';
                                e.currentTarget.style.transform = 'translateX(2rem)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.color = 'transparent';
                                e.currentTarget.style.transform = 'translateX(0)';
                            }}
                        >
                            {v.title}
                        </h3>
                    </div>
                ))}
            </div>
        </section>
    );
}
