import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Palette, Brain, Coffee, Trophy, X, Award } from 'lucide-react';
import profilePhoto from '../assets/profile-photo.jpg';
import awardImage from '../assets/Award.jpg';
import isteImage from '../assets/ISTE0386.JPG';

interface AwardData {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  icon: typeof Trophy;
}

const About: React.FC = () => {
  const [openModalId, setOpenModalId] = useState<string | null>(null);

  const awards: AwardData[] = [
    {
      id: 'apj',
      image: awardImage,
      title: 'Dr. APJ Abdul Kalam Award',
      subtitle: 'Best Engineering College Student',
      description: 'Recognized for academic performance, leadership, and active contribution to technical and community initiatives.',
      badge: 'Prestigious Achievement',
      icon: Trophy,
    },
    {
      id: 'iste',
      image: isteImage,
      title: 'ISTE Award',
      subtitle: 'Indian Society for Technical Education',
      description: 'Honored by ISTE for outstanding contribution to technical education, student development, and active participation in knowledge-sharing initiatives.',
      badge: 'Academic Excellence',
      icon: Award,
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // About section animations
    gsap.fromTo('.about-image',
      { x: -100, opacity: 0, scale: 0.8 },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about-section',
          start: 'top 80%',
        }
      }
    );

    gsap.fromTo('.about-content',
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about-section',
          start: 'top 80%',
        }
      }
    );

    // Award cards animation
    gsap.fromTo('.award-card',
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.awards-grid',
          start: 'top 85%',
        }
      }
    );
  }, []);

  const experiences = [
    {
      year: '2025',
      title: 'Organizer – Google Developer Groups On Campus (GDGoC)',
      company: 'Paavai Engineering College',
      description: 'Organizing technical sessions, workshops, and hackathons. Collaborate with peers and speakers to deliver learning-focused events and promote hands-on development among students.'
    },
    {
      year: 'Jul 2024 – Aug 2024',
      title: 'Software Development Intern (Frontend)',
      company: 'Aastrazen Technologies',
      description: 'Designed and developed a responsive marketing website for a digital agency. Worked on UI implementation, layout responsiveness, and real-world development workflows in a team environment.'
    },
    {
      year: '2025',
      title: 'Secretary – Department of Information Technology',
      company: 'Paavai Engineering College',
      description: 'Coordinated department-level technical events and workshops. Managed communication, planning, and execution to ensure smooth delivery of academic and technical activities.'
    },
    {
      year: '2023 - Present',
      title: 'Volunteer – Talent Quest for India',
      company: 'Talent Quest for India',
      description: 'Conducted technology awareness sessions for rural school students. Supported initiatives focused on digital literacy, career guidance, and student engagement.'
    }
  ];

  const highlights = [
    { icon: Code, title: 'Clean Code', description: 'Writing maintainable and scalable code' },
    { icon: Palette, title: 'UI/UX Design', description: 'Creating beautiful and intuitive interfaces' },
    { icon: Brain, title: 'Problem Solving', description: 'Finding innovative solutions to complex challenges' },
    { icon: Coffee, title: 'Continuous Learning', description: 'Always exploring new technologies and trends' },
  ];

  return (
    <section id="about" className="about-section py-12 sm:py-16 md:py-20 bg-dark-light relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-text-muted text-base sm:text-lg max-w-2xl mx-auto">
            Passionate developer with a love for creating digital experiences that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-20">
          {/* Profile Image */}
          <div className="about-image">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[480px] lg:h-[580px] mx-auto rounded-2xl overflow-hidden border-4 border-primary/20 hover:border-primary/40 transition-all duration-300 relative shadow-2xl">
                <img
                  src={profilePhoto}
                  alt="Rajesh K"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="about-content">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-primary">Hello! I'm Rajesh</h3>
            <div className="space-y-3 sm:space-y-4 text-text-muted leading-relaxed text-sm sm:text-base">
              <p>
                I'm Rajesh K, an Information Technology undergraduate with a strong interest in software development, frontend engineering, and building products that solve real problems. I enjoy working across the full development flow — from designing user-friendly interfaces to implementing functional, scalable solutions.
              </p>
              <p>
                I have hands-on experience through internships and academic projects, where I've built responsive websites, AI-powered systems, and real-world applications with social impact. My work on projects like Left2Feed reflects my interest in combining technology with meaningful use cases.
              </p>
              <p>
                Beyond development, I actively contribute to the tech community. I was part of the organizing team for DevFest Salem, where I helped streamline workflows and contributed to increasing event-related sales from 0 to 750 registrations through better coordination and execution. I'm also an organizer at Google Developer Groups On Campus (GDGoC) at Paavai Engineering College, where I help plan and deliver technical sessions and events.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-8">
              {highlights.map((item, index) => (
                <div key={index} className="p-3 sm:p-4 bg-dark rounded-lg border border-dark-lighter hover:border-primary/30 transition-all duration-300 cursor-hover group">
                  <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="font-semibold text-text-main mb-1 text-sm sm:text-base group-hover:text-primary transition-colors duration-300">{item.title}</h4>
                  <p className="text-xs sm:text-sm text-text-muted">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>


        {/* Awards & Recognition */}
        <div className="mb-12 sm:mb-20">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-text-main mb-4">
              Awards & <span className="gradient-text">Recognition</span>
            </h3>
          </div>

          <div className="awards-grid grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {awards.map((award) => (
              <div
                key={award.id}
                className="award-card bg-dark p-5 sm:p-8 rounded-2xl border border-dark-lighter hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex flex-col items-center text-center">
                  {/* Award Image */}
                  <div className="w-full mb-5 sm:mb-6">
                    <div
                      className="relative rounded-xl overflow-hidden border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 group cursor-pointer h-[250px] sm:h-[280px] md:h-[300px]"
                      onClick={() => setOpenModalId(award.id)}
                    >
                      <img
                        src={award.image}
                        alt={award.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                        <span className="text-white text-xs sm:text-sm font-medium bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">Click to Expand</span>
                      </div>
                    </div>
                  </div>

                  {/* Award Info */}
                  <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <award.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0" />
                    <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-text-main">{award.title}</h4>
                  </div>
                  <h5 className="text-base sm:text-lg text-secondary font-medium mb-3 sm:mb-4">{award.subtitle}</h5>
                  <p className="text-text-muted leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                    {award.description}
                  </p>
                  <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-primary/10 rounded-full text-primary text-xs sm:text-sm font-semibold border border-primary/20">
                    <span className="w-2 h-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                    {award.badge}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Award Image Modal */}
        {openModalId && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setOpenModalId(null)}
          >
            <div className="relative inline-block" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setOpenModalId(null)}
                className="absolute top-3 right-3 z-20 p-2 bg-dark/70 rounded-full text-white hover:text-primary hover:bg-dark transition-all duration-300"
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={awards.find(a => a.id === openModalId)?.image}
                alt={awards.find(a => a.id === openModalId)?.title}
                className="max-w-[90vw] sm:max-w-2xl max-h-[60vh] object-contain rounded-lg shadow-2xl border-2 border-primary/20"
              />
            </div>
          </div>
        )}

        {/* Experience Timeline */}
        <div className="timeline">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
            My <span className="gradient-text">Journey</span>
          </h3>
          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-6 sm:pl-8 pb-8 sm:pb-12 last:pb-0 group">
                <div className="absolute left-0 top-0 w-3 h-3 sm:w-4 sm:h-4 bg-primary rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                <div className="absolute left-[5px] sm:left-2 top-3 sm:top-4 w-0.5 h-full bg-gradient-to-b from-primary to-transparent"></div>
                <div className="bg-dark p-4 sm:p-6 rounded-lg border border-dark-lighter hover:border-primary/30 transition-all duration-300 ml-4 sm:ml-6 group-hover:transform group-hover:scale-[1.02] sm:group-hover:scale-105">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2 sm:mb-3">
                    <h4 className="text-base sm:text-xl font-semibold text-text-main group-hover:text-primary transition-colors duration-300">{exp.title}</h4>
                    <span className="text-primary font-fira text-xs sm:text-sm mt-1 md:mt-0">{exp.year}</span>
                  </div>
                  <p className="text-secondary font-medium mb-1 sm:mb-2 text-sm sm:text-base">{exp.company}</p>
                  <p className="text-text-muted text-sm sm:text-base">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;