import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Palette, Sparkles, Layout, Code2, Layers, Users, ArrowRight } from 'lucide-react';

const services = [
    {
        icon: Palette,
        title: 'UI/UX Design',
        description: 'Intuitive, human-centered interfaces from wireframing and user journey mapping to high-fidelity clickable prototypes.',
        tags: ['Figma', 'Interactive Prototypes', 'User Research', 'Micro-Interactions'],
        color: 'text-pink-400',
        borderColor: 'group-hover:border-pink-400/50',
        bgGradient: 'group-hover:from-pink-400/10'
    },
    {
        icon: Sparkles,
        title: 'Brand & Event Identity',
        description: 'End-to-end visual identity for conferences, product launches, and brands — social creatives, stage graphics, and print assets.',
        tags: ['NexusCon Branding', 'Event Creatives', 'Stage Screens', 'Launch Kits'],
        color: 'text-purple-400',
        borderColor: 'group-hover:border-purple-400/50',
        bgGradient: 'group-hover:from-purple-400/10'
    },
    {
        icon: Layout,
        title: 'Frontend Engineering',
        description: 'Modern, blazing-fast web applications with clean TypeScript code, responsive layouts, and buttery-smooth GSAP animations.',
        tags: ['React', 'TypeScript', 'Tailwind CSS', 'GSAP Animations'],
        color: 'text-blue-400',
        borderColor: 'group-hover:border-blue-400/50',
        bgGradient: 'group-hover:from-blue-400/10'
    },
    {
        icon: Code2,
        title: 'Full Stack & Backend',
        description: 'Scalable backend architectures in Node.js/Express, RESTful API design, voice automation workflows, and MongoDB data layers.',
        tags: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Voice Automation'],
        color: 'text-green-400',
        borderColor: 'group-hover:border-green-400/50',
        bgGradient: 'group-hover:from-green-400/10'
    },
    {
        icon: Layers,
        title: 'Design Systems',
        description: 'Bridging design and code with unified design tokens, atomic component libraries, and strict visual consistency across products.',
        tags: ['Design Tokens', 'Reusable Components', 'UI Kits', 'Figma-to-Code'],
        color: 'text-amber-400',
        borderColor: 'group-hover:border-amber-400/50',
        bgGradient: 'group-hover:from-amber-400/10'
    },
    {
        icon: Users,
        title: 'Event & Community Production',
        description: 'Full-spectrum event support including stage display coordination, live real-time visual management, and developer community building.',
        tags: ['GDGoC', 'DevFest', 'Live Presentation', 'Tech Communities'],
        color: 'text-orange-400',
        borderColor: 'group-hover:border-orange-400/50',
        bgGradient: 'group-hover:from-orange-400/10'
    }
];

const Services: React.FC = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo('.service-card',
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.services-section',
                    start: 'top 80%',
                }
            }
        );

        gsap.fromTo('.cta-box',
            { y: 30, opacity: 0, scale: 0.95 },
            {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.8,
                delay: 0.4,
                ease: 'back.out(1.7)',
                scrollTrigger: {
                    trigger: '.services-grid',
                    start: 'bottom 85%',
                }
            }
        );
    }, []);

    return (
        <section id="services" className="services-section py-12 sm:py-16 md:py-20 bg-dark relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="text-center mb-10 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                        My <span className="gradient-text">Services</span>
                    </h2>
                    <p className="text-text-muted text-base sm:text-lg max-w-2xl mx-auto">
                        Comprehensive solutions tailored to your digital needs
                    </p>
                </div>

                <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-6xl mx-auto mb-10 sm:mb-16">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`service-card group p-5 sm:p-8 bg-dark-light rounded-2xl border border-dark-lighter transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${service.borderColor} relative overflow-hidden`}
                        >
                            {/* Hover Gradient Background */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                            <div className="relative z-10">
                                <div className={`w-14 h-14 rounded-xl bg-dark flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 border border-dark-lighter`}>
                                    <service.icon className={`w-7 h-7 ${service.color}`} />
                                </div>

                                <h3 className="text-2xl font-bold text-text-main mb-3 group-hover:text-primary transition-colors duration-300">
                                    {service.title}
                                </h3>

                                <p className="text-text-muted mb-6 leading-relaxed">
                                    {service.description}
                                </p>

                                <div className="flex flex-wrap gap-2 pt-4 border-t border-dark-lighter/50">
                                    {service.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-dark text-xs font-medium text-text-muted rounded-full border border-dark-lighter/50"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Box */}
                <div className="cta-box max-w-4xl mx-auto bg-gradient-to-r from-dark-light to-dark p-5 sm:p-8 md:p-10 rounded-3xl border border-primary/20 shadow-[0_0_40px_rgba(0,0,0,0.2)] relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-8 text-center md:text-left">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-text-main mb-2">
                                Need a bundled solution?
                            </h3>
                            <p className="text-text-muted text-lg">
                                I offer custom packages for Startups needing both <span className="text-primary font-medium">Development</span> & <span className="text-secondary font-medium">Branding</span>.
                            </p>
                        </div>

                        <a
                            href="#contact"
                            className="flex-shrink-0 group px-8 py-4 bg-primary text-dark font-bold text-lg rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105 transition-all duration-300 flex items-center gap-2"
                        >
                            Hire Me
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
