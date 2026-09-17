import React, { useEffect, useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { X, ZoomIn, Calendar, MapPin } from 'lucide-react';
import hackathonImg from '../assets/thank you organizer.jpg';
import workshopImg from '../assets/Tech Session.jpg';
import volunteeringImg from '../assets/Volunteering.jpg';
import devfestImg from '../assets/Devfest Planning.jpg';
import teamImg from '../assets/Networking.jpg';
import leadershipImg from '../assets/Student Leader.jpg';
import nexusStageSet from '../assets/nexuscon-stage-set.jpg';
import nexusStageVisuals from '../assets/nexuscon-stage-visuals.jpg';
import nexusBackdrop from '../assets/nexuscon-backdrop.jpg';
import nexusWork from '../assets/nexuscon-work.jpg';
import nexusCrew from '../assets/nexuscon-crew.jpg';
import nexusAppreciation from '../assets/nexuscon-appreciation.jpg';
import nexusCommunity from '../assets/nexuscon-community.jpg';

interface GalleryItem {
    id: number;
    src: string;
    category: string;
    title: string;
    description: string;
    date: string;
    location: string;
}

const galleryItems: GalleryItem[] = [
    {
        id: 1,
        src: nexusStageVisuals,
        category: 'NexusCon',
        title: 'Keynote & Stage Displays',
        description: 'Live on-stage visual identity in action during keynote presentations and technical sessions at NexusCon’26.',
        date: 'Jun 2026',
        location: 'Bengaluru'
    },
    {
        id: 2,
        src: nexusBackdrop,
        category: 'NexusCon',
        title: 'Stage Backdrop Design',
        description: 'Designing the official visual identity and panoramic stage backdrops for India’s community-driven tech conference.',
        date: 'Jun 2026',
        location: 'Bengaluru'
    },
    {
        id: 3,
        src: nexusWork,
        category: 'NexusCon',
        title: 'Live Event Visual Operations',
        description: 'Behind the console directing real-time session slides, speaker introductions, and on-stage screens throughout the event.',
        date: 'Jun 2026',
        location: 'Bengaluru'
    },
    {
        id: 4,
        src: nexusStageSet,
        category: 'NexusCon',
        title: 'Stage Ready for Developers',
        description: 'The amphitheater stage setup featuring complete branding before welcoming over 800+ attendees.',
        date: 'Jun 2026',
        location: 'Bengaluru'
    },
    {
        id: 5,
        src: nexusCrew,
        category: 'NexusCon',
        title: 'NexusCon Organizing Crew',
        description: 'Celebrating with the core team of organizers, community leads, and volunteers who made NexusCon’26 possible.',
        date: 'Jun 2026',
        location: 'Bengaluru'
    },
    {
        id: 6,
        src: nexusAppreciation,
        category: 'NexusCon',
        title: 'Community Appreciation',
        description: 'Receiving recognition from the TechNexus community for designing and leading the conference visual identity.',
        date: 'Jun 2026',
        location: 'Bengaluru'
    },
    {
        id: 7,
        src: nexusCommunity,
        category: 'NexusCon',
        title: 'On-Stage Community Moment',
        description: 'A special moment on stage celebrating the successful conclusion of the conference with the developer community.',
        date: 'Jun 2026',
        location: 'Bengaluru'
    },
    {
        id: 8,
        src: hackathonImg,
        category: 'Devfest',
        title: 'Lead Organizer: GDG DevFest Salem',
        description: 'Orchestrating large-scale community events to foster developer growth.',
        date: 'Dec 2025',
        location: 'Salem'
    },
    {
        id: 9,
        src: workshopImg,
        category: 'Tech Events',
        title: 'Tech Session on Chatbots',
        description: 'Conducted a hands-on session on AI Chatbots and Conversational Agents.',
        date: 'Sep 2024',
        location: 'Paavai Engineering College'
    },
    {
        id: 10,
        src: volunteeringImg,
        category: 'Volunteering',
        title: 'TQI Volunteer',
        description: "Mentoring students and teaching technology fundamentals at government schools.",
        date: 'Aug 2024',
        location: 'Namakkal'
    },
    {
        id: 11,
        src: devfestImg,
        category: 'Tech Events',
        title: 'GDG DevFest Planning',
        description: 'Core team planning and strategy meetings for GDG DevFest Salem.',
        date: 'Nov 2025',
        location: 'Salem'
    },
    {
        id: 12,
        src: teamImg,
        category: 'Community',
        title: 'Team Collaboration & Networking',
        description: 'Connecting with developers and industry leaders at Google Developer Groups DevFest.',
        date: 'Dec 2025',
        location: 'Salem DevFest'
    },
    {
        id: 13,
        src: leadershipImg,
        category: 'Community',
        title: 'Student Leadership',
        description: 'Addressing the student body as a technical club lead.',
        date: 'Jan 2025',
        location: 'Auditorium'
    }
];

const categories = ['All', 'NexusCon', 'Devfest', 'Tech Events', 'Community', 'Volunteering'];

const Gallery: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [filteredItems, setFilteredItems] = useState(galleryItems);
    const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            // Header animation
            gsap.fromTo(
                '.gallery-header',
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: '.gallery-section',
                        start: 'top 80%',
                    },
                }
            );

            // GSAP Scrubbed Bento Parallax across columns on desktop/tablet
            const mm = gsap.matchMedia();

            mm.add('(min-width: 768px)', () => {
                gsap.to('.bento-col-1', {
                    y: -70,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: '.bento-container',
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: 1.2,
                    },
                });

                gsap.to('.bento-col-2', {
                    y: 70,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: '.bento-container',
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: 1.4,
                    },
                });

                gsap.to('.bento-col-3', {
                    y: -100,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: '.bento-container',
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: 1.1,
                    },
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, [filteredItems]);

    useEffect(() => {
        if (activeCategory === 'All') {
            setFilteredItems(galleryItems);
        } else {
            setFilteredItems(galleryItems.filter(item => item.category === activeCategory));
        }

        // Animate cards on category change
        gsap.fromTo(
            '.bento-card',
            { opacity: 0, scale: 0.96, y: 20 },
            { opacity: 1, scale: 1, y: 0, duration: 0.4, stagger: 0.05, ease: 'power2.out' }
        );

        setTimeout(() => {
            ScrollTrigger.refresh();
        }, 100);
    }, [activeCategory]);

    // Distribute filtered items across 3 bento columns
    const col1 = filteredItems.filter((_, i) => i % 3 === 0);
    const col2 = filteredItems.filter((_, i) => i % 3 === 1);
    const col3 = filteredItems.filter((_, i) => i % 3 === 2);

    const renderBentoCard = (item: GalleryItem, heightClass: string) => (
        <div
            key={item.id}
            onClick={() => setSelectedImage(item)}
            className={`bento-card group relative ${heightClass} w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-500 cursor-pointer shadow-xl glow-card bg-dark-light`}
        >
            {/* Image */}
            <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />

            {/* Deep Dark Protection Scrim for guaranteed contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 via-50% to-transparent pointer-events-none" />

            {/* Top Category Badge with Dark Frosted Glass */}
            <div className="absolute top-3.5 left-3.5 z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md bg-black/75 text-white border border-white/20 shadow-md group-hover:border-primary/50 transition-colors duration-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    <span>{item.category}</span>
                </span>
            </div>

            {/* Top Right Zoom Icon */}
            <div className="absolute top-3.5 right-3.5 z-10 w-9 h-9 rounded-full bg-black/75 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-[-4px] group-hover:translate-y-0 transition-all duration-300 text-white hover:text-primary shadow-md">
                <ZoomIn className="w-4 h-4" />
            </div>

            {/* Bottom Content in a Frosted Dark Glass Dock for 100% Readability */}
            <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 z-10 flex flex-col justify-end">
                <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-black/80 backdrop-blur-md border border-white/15 shadow-2xl transition-all duration-300 group-hover:border-primary/40 group-hover:bg-black/85">
                    <h3 className="text-base sm:text-lg font-bold text-white mb-1 group-hover:text-primary transition-colors duration-300 leading-snug drop-shadow-sm">
                        {item.title}
                    </h3>
                    <p className="text-gray-200 text-xs sm:text-sm line-clamp-2 leading-relaxed mb-2.5 opacity-95">
                        {item.description}
                    </p>

                    <div className="flex items-center gap-3 text-[11px] sm:text-xs text-gray-300 pt-2 border-t border-white/15 font-medium flex-wrap">
                        <span className="flex items-center gap-1.5 text-white/90">
                            <Calendar className="w-3.5 h-3.5 text-primary shrink-0" /> {item.date}
                        </span>
                        <span className="text-white/40">•</span>
                        <span className="flex items-center gap-1.5 text-white/90">
                            <MapPin className="w-3.5 h-3.5 text-secondary shrink-0" /> {item.location}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <section id="gallery" className="gallery-section py-16 sm:py-20 md:py-24 bg-dark relative overflow-hidden">
            {/* Background Ambient Glows */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[20%] left-[10%] w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10" ref={containerRef}>
                {/* Header */}
                <div className="gallery-header text-center mb-10 sm:mb-14">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                        Moments & <span className="gradient-text">Visual Showcase</span>
                    </h2>
                    <p className="text-text-muted text-base sm:text-lg max-w-2xl mx-auto">
                        A visual journey through conference branding, stage environments, community leadership, and live event production.
                    </p>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-14">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-4 sm:px-6 py-2 rounded-full border transition-all duration-300 text-xs sm:text-sm font-medium cursor-hover ${
                                activeCategory === category
                                    ? 'bg-gradient-to-r from-primary to-secondary text-dark font-semibold border-transparent shadow-lg shadow-primary/20 scale-105'
                                    : 'bg-dark-light text-text-muted border-dark-lighter hover:border-primary/40 hover:text-text-main'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Scrubbed Bento Parallax Grid */}
                <div className="bento-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 pt-2 pb-8">
                    {/* Column 1 */}
                    <div className="bento-col-1 flex flex-col gap-5 sm:gap-6">
                        {col1.map((item, idx) =>
                            renderBentoCard(
                                item,
                                idx % 2 === 0 ? 'h-[360px] sm:h-[420px]' : 'h-[280px] sm:h-[320px]'
                            )
                        )}
                    </div>

                    {/* Column 2 */}
                    <div className="bento-col-2 flex flex-col gap-5 sm:gap-6 md:pt-8 lg:pt-12">
                        {col2.map((item, idx) =>
                            renderBentoCard(
                                item,
                                idx % 2 === 0 ? 'h-[290px] sm:h-[330px]' : 'h-[380px] sm:h-[440px]'
                            )
                        )}
                    </div>

                    {/* Column 3 */}
                    <div className="bento-col-3 flex flex-col gap-5 sm:gap-6 md:col-span-2 lg:col-span-1 md:grid md:grid-cols-2 lg:flex lg:flex-col">
                        {col3.map((item, idx) =>
                            renderBentoCard(
                                item,
                                idx % 2 === 0 ? 'h-[350px] sm:h-[410px]' : 'h-[290px] sm:h-[340px]'
                            )
                        )}
                    </div>
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImage && createPortal(
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark/95 backdrop-blur-md animate-fade-in"
                    onClick={() => setSelectedImage(null)}>
                    <button
                        className="absolute top-6 right-6 p-2 text-text-muted hover:text-white transition-colors"
                        onClick={() => setSelectedImage(null)}
                    >
                        <X size={32} />
                    </button>

                    <div
                        className="max-w-5xl w-full bg-dark-light rounded-2xl overflow-hidden shadow-2xl border border-dark-lighter flex flex-col md:flex-row max-h-[90vh]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="md:w-2/3 bg-black flex items-center justify-center p-2 sm:p-4 md:p-0 h-[35vh] sm:h-[40vh] md:h-auto">
                            <img
                                src={selectedImage.src}
                                alt={selectedImage.title}
                                decoding="async"
                                className="max-w-full max-h-[35vh] sm:max-h-[50vh] md:max-h-full object-contain"
                            />
                        </div>
                        <div className="md:w-1/3 p-4 sm:p-6 md:p-8 flex flex-col justify-center bg-dark-light overflow-y-auto">
                            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4 w-fit">
                                {selectedImage.category}
                            </span>
                            <h3 className="text-3xl font-bold text-text-main mb-4">{selectedImage.title}</h3>
                            <p className="text-text-muted leading-relaxed mb-6">
                                {selectedImage.description}
                            </p>
                            <div className="space-y-3 border-t border-dark-lighter pt-6">
                                <div className="flex items-center gap-3 text-text-muted">
                                    <Calendar size={20} className="text-primary" />
                                    <span>{selectedImage.date}</span>
                                </div>
                                <div className="flex items-center gap-3 text-text-muted">
                                    <MapPin size={20} className="text-primary" />
                                    <span>{selectedImage.location}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>,
                document.body
            )
            }
        </section >
    );
};

export default Gallery;
