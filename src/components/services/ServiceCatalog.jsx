import { useState } from 'react';
import { Settings, Cloud, Shield, Database, LayoutTemplate, Briefcase } from 'lucide-react';

export default function ServiceCatalog() {
    const [activeTab, setActiveTab] = useState(0);

    const services = [
        {
            title: "Workshops & Assessments",
            icon: <Briefcase size={24} />,
            content: "Comprehensive network analyses, 'As-Is' & 'To-Be' designs, Re-Designs, Get Well Plans, and Business Resiliency evaluations (DR, HA, Security).",
            features: ["Discovery / Roadmap Generation", "Cloud / Network Simulators", "Risk & Compliance Prep (PCI, HIPAA)"]
        },
        {
            title: "Automation Execution",
            icon: <Settings size={24} />,
            content: "End-to-end automation pipelines utilizing industry-standard infrastructure as code (IaC) and configuration management.",
            features: ["Ansible & Terraform", "Python & ARM/Bicep", "ServiceNow Integration"]
        },
        {
            title: "Version Upgrades",
            icon: <Database size={24} />,
            content: "Automated OS In-Place Upgrades reducing downtime and operational risk for legacy environments.",
            features: ["Windows & RHEL Upgrades", "Automated Rollbacks", "Pre/Post Validation"]
        },
        {
            title: "Migrations Factory (X2V)",
            icon: <Cloud size={24} />,
            content: "Fixed-fee workload migrations and data center consolidation handled seamlessly by our specialized factory framework.",
            features: ["V2V & P2V Workloads", "Cloud Migrations (Azure/AWS/GCP)", "Oracle & SQL DB Migrations"]
        }
    ];

    return (
        <section className="py-32 px-6 max-w-7xl mx-auto relative z-10 border-b border-gray-100">
            <div className="mb-16 text-center">
                <h1 className="text-sm font-mono tracking-widest uppercase text-accent font-semibold mb-4">Capability Matrix</h1>
                <h2 className="text-4xl md:text-6xl font-heading font-bold text-primary">Summary of Services</h2>
            </div>

            <div className="flex flex-col md:flex-row gap-12 items-start mt-16">
                {/* Sticky Sidebar Tabs */}
                <div className="w-full md:w-1/3 flex flex-col gap-2 md:sticky md:top-32 relative z-20">
                    {services.map((svc, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveTab(i)}
                            className={`flex items-center gap-4 w-full text-left p-6 rounded-[2rem] transition-all duration-300 border ${activeTab === i
                                ? 'bg-primary text-white border-primary shadow-lg scale-[1.02]'
                                : 'bg-white text-gray-500 border-gray-100 hover:bg-gray-50'
                                }`}
                        >
                            <div className={activeTab === i ? 'text-accent' : 'text-gray-400'}>
                                {svc.icon}
                            </div>
                            <span className="font-heading font-bold text-lg">{svc.title}</span>
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <div className="w-full md:w-2/3 min-h-[400px] bg-white rounded-[3rem] p-10 md:p-16 shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-gray-100 relative overflow-hidden">
                    {/* Decorative SVG */}
                    <div className="absolute top-0 right-0 p-8 text-gray-100">
                        <LayoutTemplate size={120} strokeWidth={1} />
                    </div>

                    <div className="relative z-10 flex flex-col h-full justify-center">
                        <h3 className="text-3xl font-heading font-bold text-primary mb-6 animate-fade-in">
                            {services[activeTab].title}
                        </h3>
                        <p className="text-lg text-gray-600 font-body mb-8 leading-relaxed max-w-xl animate-fade-in" style={{ animationDelay: '100ms' }}>
                            {services[activeTab].content}
                        </p>

                        <div className="flex flex-col gap-3">
                            {services[activeTab].features.map((feat, i) => (
                                <div key={i} className="flex items-center gap-3 animate-fade-in" style={{ animationDelay: `${200 + i * 100}ms` }}>
                                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                                        <div className="w-2 h-2 rounded-full bg-accent"></div>
                                    </div>
                                    <span className="font-mono text-sm font-semibold text-textDark">{feat}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section >
    );
}
