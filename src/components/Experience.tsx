import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, MapPin, Palette, Code2, CheckCircle2, ChevronRight, Layers } from 'lucide-react';

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  type: string;
  period: string;
  location: string;
  category: 'design' | 'engineering';
  spotlightBadge: string;
  summary: string;
  contributions: string[];
  skills: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: 'technexus',
    role: 'Lead Designer',
    company: 'TechNexus Community',
    type: 'Part-time',
    period: 'Jun 2026 – Present · 4 mos',
    location: 'Bengaluru, Karnataka, India · Remote',
    category: 'design',
    spotlightBadge: "NexusCon'26 Visual Identity",
    summary: "Designed and executed the complete visual identity for NexusCon'26, one of India's premier community-driven technology conferences, ensuring an unforgettable and consistent brand experience across digital, physical, and on-stage event assets.",
    contributions: [
      'Designed high-impact event branding and marketing creatives for social media, LinkedIn, and promotional campaigns.',
      'Created attendee announcements, speaker creatives, launch posters, and promotional asset kits.',
      'Designed on-stage visuals, keynote presentation screens, session slides, break screens, lunch screens, thank-you screens, and dynamic audience engagement displays.',
      'Developed attendee-facing assets including ID card concepts, QR-based lucky draw screens, networking creatives, and venue digital displays.',
      'Maintained meticulous brand consistency across all physical and digital visual touchpoints before, during, and after the event.',
      'Collaborated closely with organizers, volunteers, sponsors, and keynote speakers across all planning and execution phases.',
      'Thrived under tight deadlines, managing fast design iterations and rapid last-minute updates leading up to the conference.',
      'Supported live event execution by directing real-time visual content and ensuring seamless on-screen presentation throughout.'
    ],
    skills: ['Figma', 'Visual Identity Design', 'Event Branding', 'Stage Graphics', 'Creative Direction', 'Presentation Design']
  },
  {
    id: 'desible',
    role: 'Full Stack Development Intern',
    company: 'Desible.ai',
    type: 'Internship',
    period: 'Feb 2026 – Apr 2026',
    location: 'Bengaluru, Karnataka, India',
    category: 'engineering',
    spotlightBadge: 'Voice Automation Platform',
    summary: 'Contributed to a production-grade AI voice automation platform, architecting modular backend infrastructure and managing high-volume call traffic with clean separation of concerns.',
    contributions: [
      'Contributed to a production-grade Node.js and Express.js backend for a voice automation platform, managing large-scale inbound and outbound call data.',
      'Implemented modular MVC architecture using Controllers, Services, and Models to ensure clean separation of concerns and scalable REST API design.',
      'Developed and maintained REST APIs for call management and webhook integrations, interacting with MongoDB for efficient CRUD operations.',
      'Optimized backend response times and payload handling to ensure reliable voice session routing and low latency.'
    ],
    skills: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'MVC Architecture', 'Webhook Integrations', 'Voice Automation']
  },
  {
    id: 'gdgoc',
    role: 'Lead Organizer',
    company: 'Google Developer Groups On Campus (GDGoC)',
    type: 'Leadership',
    period: '2025 – Present',
    location: 'Paavai Engineering College',
    category: 'engineering',
    spotlightBadge: 'Community & Dev Leadership',
    summary: 'Directing community initiatives, technical workshops, and developer hackathons, empowering student developers with modern web and AI tools.',
    contributions: [
      'Organizing hands-on workshops on full-stack development, modern APIs, and emerging AI technologies.',
      'Coordinating cross-functional student teams and liaising with industry speakers to execute high-impact technical sessions.',
      'Mentoring junior students on building real-world projects and participating in national hackathons.'
    ],
    skills: ['Community Leadership', 'Event Management', 'Technical Mentorship', 'Public Speaking']
  },
  {
    id: 'aastrazen',
    role: 'Software Development Intern (Frontend)',
    company: 'Aastrazen Technologies',
    type: 'Internship',
    period: 'Jul 2024 – Aug 2024',
    location: 'Remote',
    category: 'engineering',
    spotlightBadge: 'Web Architecture',
    summary: 'Developed responsive, high-performance web interfaces and marketing experiences in an agile team environment.',
    contributions: [
      'Designed and developed a responsive marketing website for a digital agency with smooth interactive animations.',
      'Engineered cross-browser responsive layouts and optimized mobile performance metrics.',
      'Collaborated in daily agile scrums and implemented best-practice component structures.'
    ],
    skills: ['React', 'JavaScript', 'Tailwind CSS', 'Responsive UI', 'Frontend Performance']
  }
];

const Experience: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'design' | 'engineering'>('all');
  const [expandedId, setExpandedId] = useState<string | null>('technexus');

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      '.experience-card',
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.experience-section',
          start: 'top 80%',
        },
      }
    );
  }, [filter]);

  const filteredExperiences = experiences.filter((exp) => {
    if (filter === 'all') return true;
    return exp.category === filter;
  });

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(card, {
      rotateY: (x / rect.width) * 5,
      rotateX: -(y / rect.height) * 5,
      transformPerspective: 1000,
      duration: 0.25,
      ease: 'power2.out',
    });
  };

  const handleCardMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    gsap.to(card, {
      rotateY: 0,
      rotateX: 0,
      duration: 0.6,
      ease: 'power2.out',
    });
  };

  return (
    <section id="experience" className="experience-section py-16 sm:py-20 md:py-24 bg-dark relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none -translate-x-1/2"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none translate-x-1/2"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Work & Leadership <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-text-muted text-base sm:text-lg max-w-2xl mx-auto">
            Where design passion meets production engineering — from crafting conference visual identities to building scalable backend systems.
          </p>

          {/* Interactive Filter Tabs */}
          <div className="flex justify-center items-center gap-2 sm:gap-3 mt-8 flex-wrap">
            <button
              onClick={() => setFilter('all')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-hover flex items-center gap-2 ${
                filter === 'all'
                  ? 'bg-gradient-to-r from-primary to-secondary text-dark font-semibold shadow-lg shadow-primary/20 scale-105'
                  : 'bg-dark-light text-text-muted hover:text-text-main border border-dark-lighter'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>All ({experiences.length})</span>
            </button>

            <button
              onClick={() => setFilter('design')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-hover flex items-center gap-2 ${
                filter === 'design'
                  ? 'bg-primary text-dark font-semibold shadow-lg shadow-primary/25 scale-105'
                  : 'bg-dark-light text-text-muted hover:text-primary border border-dark-lighter'
              }`}
            >
              <Palette className="w-3.5 h-3.5" />
              <span>Design ({experiences.filter((e) => e.category === 'design').length})</span>
            </button>

            <button
              onClick={() => setFilter('engineering')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-hover flex items-center gap-2 ${
                filter === 'engineering'
                  ? 'bg-secondary text-white font-semibold shadow-lg shadow-secondary/25 scale-105'
                  : 'bg-dark-light text-text-muted hover:text-secondary border border-dark-lighter'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Engineering ({experiences.filter((e) => e.category === 'engineering').length})</span>
            </button>
          </div>
        </div>

        {/* Experience List */}
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
          {filteredExperiences.map((exp) => {
            const isExpanded = expandedId === exp.id;
            const isDesign = exp.category === 'design';

            return (
              <div
                key={exp.id}
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
                className={`experience-card rounded-2xl border transition-all duration-300 overflow-hidden will-change-transform ${
                  isDesign
                    ? 'border-primary/25 hover:border-primary/50 bg-gradient-to-br from-dark-light/90 via-dark-light/70 to-dark'
                    : 'border-secondary/25 hover:border-secondary/50 bg-gradient-to-br from-dark-light/90 via-dark-light/70 to-dark'
                } shadow-xl glow-card`}
              >
                {/* Header Bar */}
                <div className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2.5 flex-wrap mb-2">
                        <span
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                            isDesign
                              ? 'bg-primary/15 text-primary border border-primary/30'
                              : 'bg-secondary/15 text-secondary border border-secondary/30'
                          }`}
                        >
                          {isDesign ? <Palette className="w-3 h-3" /> : <Code2 className="w-3 h-3" />}
                          {exp.spotlightBadge}
                        </span>

                        <span className="text-xs text-text-muted px-2.5 py-0.5 rounded-md bg-dark border border-dark-lighter">
                          {exp.type}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-text-main flex items-center gap-2">
                        {exp.role}
                      </h3>
                      <h4 className="text-base sm:text-lg font-medium text-text-muted mt-0.5">
                        <span className="text-primary font-semibold">{exp.company}</span>
                      </h4>
                    </div>

                    <div className="flex sm:flex-col items-start sm:items-end gap-1.5 text-xs sm:text-sm text-text-muted">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-primary" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-secondary" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-sm sm:text-base text-text-muted leading-relaxed mb-5">
                    {exp.summary}
                  </p>

                  {/* Key Contributions Toggle & Content */}
                  <div className="space-y-3">
                    <button
                      onClick={() => setExpandedId(isExpanded ? null : exp.id)}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-primary hover:text-primary/80 transition-colors cursor-hover py-1"
                    >
                      <span>{isExpanded ? 'Hide Key Contributions' : `View Key Contributions (${exp.contributions.length})`}</span>
                      <ChevronRight
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isExpanded ? 'rotate-90' : ''
                        }`}
                      />
                    </button>

                    {isExpanded && (
                      <div className="pt-2 pb-1 space-y-2.5 animate-fadeIn">
                        {exp.contributions.map((bullet, idx) => (
                          <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-text-muted">
                            <CheckCircle2
                              className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                                isDesign ? 'text-primary' : 'text-secondary'
                              }`}
                            />
                            <span className="leading-relaxed">{bullet}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Skills / Tech Tags */}
                  <div className="flex flex-wrap gap-2 mt-6 pt-5 border-t border-dark-lighter">
                    {exp.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-xs px-2.5 py-1 rounded-md bg-dark text-text-muted border border-dark-lighter font-fira hover:border-primary/40 hover:text-text-main transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;

