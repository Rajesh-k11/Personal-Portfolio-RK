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
        src: hackathonImg,
        category: 'Devfest',
        title: 'Lead Organizer: GDG DevFest Salem.',
        description: 'Orchestrating large-scale community events to foster developer growth.',
        date: 'Dec 2025',
        location: 'Salem'
    },
    {
        id: 2,
        src: workshopImg,
        category: 'Tech Events',
        title: 'Tech Session',
        description: 'Conducted a hands-on session on Chatbots.',
        date: 'Sep 2024',
        location: 'Paavai Engineering College'
    },
    {
        id: 3,
        src: volunteeringImg,
        category: 'Volunteering',
        title: 'TQI Volunteer',
        description: "Volunteering my time to mentor students at government schools.",
        date: 'Aug 2024',
        location: 'Namakkal'
    },
    {
        id: 4,
        src: devfestImg,
        category: 'Tech Events',
        title: 'GDG DevFest',
        description: 'Planning and organizing GDG DevFest Salem.',
        date: 'Nov 2024',
        location: 'Salem'
    },
    {
        id: 5,
        src: teamImg,
        category: 'Networking',
        title: 'Team Collaboration',
        description: 'Networking with industry experts at Google Developer Groups DevFest.',
        date: 'Dec 2025',
        location: 'Salem DevFest'
    },
    {
        id: 6,
        src: leadershipImg,
        category: 'Community',
        title: 'Student Leadership',
        description: 'Addressing the student body as a technical club lead.',
        date: 'Jan 2025',
        location: 'Auditorium'
    }
];

const categories = ['All', 'Devfest', 'Tech Events', 'Volunteering', 'Networking', 'Community'];

const Gallery: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [filteredItems, setFilteredItems] = useState(galleryItems);
    const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (containerRef.current) {
            gsap.fromTo('.gallery-header',
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: '.gallery-section',
                        start: 'top 80%',
                    }
                }
            );
        }
    }, []);

    useEffect(() => {
        if (activeCategory === 'All') {
            setFilteredItems(galleryItems);
        } else {
            setFilteredItems(galleryItems.filter(item => item.category === activeCategory));
        }

        // Animate items when filter changes
        gsap.fromTo('.gallery-item',
            { opacity: 0, scale: 0.9 },
            { opacity: 1, scale: 1, duration: 0.4, stagger: 0.1 }
        );
    }, [activeCategory]);

    return (
        <section id="gallery" className="gallery-section py-20 bg-dark relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-[20%] left-[10%] w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10" ref={containerRef}>
                {/* Header */}
                <div className="gallery-header text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Moments & <span className="gradient-text">Memories</span>
                    </h2>
                    <p className="text-text-muted text-lg max-w-2xl mx-auto">
                        A glimpse into my journey through events, community building, and teamwork.
                    </p>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-2 rounded-full border transition-all duration-300 ${activeCategory === category
                                ? 'bg-primary text-dark border-primary font-semibold'
                                : 'bg-transparent text-text-muted border-dark-lighter hover:border-primary hover:text-primary'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Gallery Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredItems.map((item) => (
                        <div
                            key={item.id}
                            className="gallery-item group relative rounded-xl overflow-hidden cursor-pointer h-72"
                            onClick={() => setSelectedImage(item)}
                        >
                            <img
                                src={item.src}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:blur-sm"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <span className="text-primary text-sm font-fira mb-2 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-100">
                                    {item.category}
                                </span>
                                <h3 className="text-white text-xl font-bold mb-1 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-150">
                                    {item.title}
                                </h3>
                                <p className="text-gray-300 text-sm opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-200">
                                    {item.description}
                                </p>
                                <div className="mt-3 flex items-center gap-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-250">
                                    <span className="flex items-center gap-1 text-xs text-gray-400">
                                        <Calendar size={12} /> {item.date}
                                    </span>
                                    <span className="flex items-center gap-1 text-xs text-gray-400">
                                        <MapPin size={12} /> {item.location}
                                    </span>
                                </div>
                            </div>
                            <div className="absolute top-4 right-4 p-2 bg-dark/50 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-[-10px] group-hover:translate-y-0">
                                <ZoomIn className="w-5 h-5 text-white" />
                            </div>
                        </div>
                    ))}
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
                        className="max-w-5xl w-full bg-dark-light rounded-2xl overflow-hidden shadow-2xl border border-dark-lighter flex flex-col md:flex-row max-h-[90vh] md:h-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="md:w-2/3 bg-black flex items-center justify-center p-4 md:p-0 h-[40vh] md:h-auto">
                            <img
                                src={selectedImage.src}
                                alt={selectedImage.title}
                                className="max-w-full max-h-[50vh] md:max-h-full object-contain"
                            />
                        </div>
                        <div className="md:w-1/3 p-8 flex flex-col justify-center bg-dark-light">
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
