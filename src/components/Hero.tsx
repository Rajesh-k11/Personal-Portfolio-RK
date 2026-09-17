import React, { useEffect, useState, useRef } from 'react';
import { ChevronDown, Download, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { gsap } from 'gsap';
import resumePdf from '../assets/Resume - Rajesh.pdf';
import profileImage from '../assets/profile 1.png';

const Hero: React.FC = () => {
  const imageCardRef = useRef<HTMLDivElement>(null);
  const [displayText, setDisplayText] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = [
    'Full-Stack Developer',
    'Lead Visual Designer',
    'UI/UX Specialist',
    'Brand Identity Designer',
    'Design Technologist',
    'GDG OnCampus Organizer'
  ];

  useEffect(() => {
    // Hero animations
    const tl = gsap.timeline({ delay: 0.2 });

    tl.fromTo('.hero-title',
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' }
    )
      .fromTo('.hero-subtitle',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
        '-=0.6'
      )
      .fromTo('.hero-cta',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
        '-=0.4'
      )
      .fromTo('.hero-social',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out', stagger: 0.1 },
        '-=0.2'
      )
      .fromTo('.hero-image',
        { x: 50, opacity: 0, scale: 0.8 },
        { x: 0, opacity: 1, scale: 1, duration: 1, ease: 'back.out(1.7)' },
        '-=1'
      );

    // Wave animation
    gsap.to('.wave-emoji', {
      rotation: 20,
      duration: 0.5,
      yoyo: true,
      repeat: -1,
      ease: 'power2.inOut',
      delay: 5
    });

    // Magnetic physics for CTA buttons & social icons
    const magneticBtns = document.querySelectorAll('.magnetic-btn');
    const cleanups: (() => void)[] = [];

    magneticBtns.forEach((btn) => {
      const handleMove = (e: Event) => {
        const mouseEvent = e as MouseEvent;
        const rect = (btn as HTMLElement).getBoundingClientRect();
        const x = mouseEvent.clientX - rect.left - rect.width / 2;
        const y = mouseEvent.clientY - rect.top - rect.height / 2;

        gsap.to(btn, {
          x: x * 0.35,
          y: y * 0.35,
          duration: 0.3,
          ease: 'power2.out',
        });
      };

      const handleLeave = () => {
        gsap.to(btn, {
          x: 0,
          y: 0,
          duration: 0.6,
          ease: 'elastic.out(1.1, 0.4)',
        });
      };

      btn.addEventListener('mousemove', handleMove);
      btn.addEventListener('mouseleave', handleLeave);

      cleanups.push(() => {
        btn.removeEventListener('mousemove', handleMove);
        btn.removeEventListener('mouseleave', handleLeave);
      });
    });

    return () => {
      cleanups.forEach((c) => c());
    };
  }, []);

  // Typing effect
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.substring(0, displayText.length + 1));
          setTypingSpeed(100 + Math.random() * 100);
        } else {
          setTypingSpeed(2000);
          setIsDeleting(true);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentRole.substring(0, displayText.length - 1));
          setTypingSpeed(50 + Math.random() * 50);
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(500);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex, typingSpeed, roles]);

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Rajesh-k11', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/rajeshk1102/', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/The_rajesh_', label: 'Twitter' },
    { icon: Mail, href: 'mailto:rajeshkanthasamy11@gmail.com', label: 'Email' },
  ];

  const handleImageMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = imageCardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -7;
    const rotateY = ((x - centerX) / centerX) * 7;

    gsap.to(card, {
      rotateX,
      rotateY,
      duration: 0.35,
      ease: 'power2.out',
      transformPerspective: 1000,
    });
  };

  const handleImageMouseLeave = () => {
    const card = imageCardRef.current;
    if (!card) return;
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.7,
      ease: 'elastic.out(1.1, 0.4)',
    });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-light to-dark opacity-50"></div>

      {/* Main Hero Content */}
      <div className="container mx-auto px-4 sm:px-6 z-10 flex items-center justify-center min-h-screen pt-24 sm:pt-28 md:pt-20">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center w-full max-w-7xl mx-auto pb-12 sm:pb-20">

          {/* Left Column: Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Title Section */}
            <div className="hero-title mb-6 space-y-2">
              <div className="text-lg sm:text-xl md:text-2xl font-light text-text-muted">
                Hi, I'm
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-4">
                <h1 className="gradient-text text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight pb-1">
                  Rajesh
                </h1>

                <div className="wave-emoji-container">
                  <span
                    role="img"
                    aria-label="waving hand"
                    className="wave-emoji inline-block text-4xl sm:text-5xl md:text-6xl"
                  >
                    👋
                  </span>
                </div>
              </div>

              <div className="hero-subtitle">
                <div className="text-base sm:text-lg md:text-xl text-text-muted mb-2 font-medium tracking-wide">
                  Designer by Passion <span className="text-primary/70">•</span> Developer by Profession
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl text-text-main font-fira font-semibold">
                  I am a{' '}
                  <span className="gradient-text">
                    {displayText}
                  </span>
                  <span className="animate-pulse">|</span>
                </div>
              </div>

              <div className="max-w-2xl mx-auto lg:mx-0">
                <p className="text-base sm:text-lg text-text-muted leading-relaxed">
                  I design experiences that people remember and build products that people rely on. With a passion for visual design and a foundation in full-stack development, I bridge the gap between creativity and technology.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="hero-cta flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-center mb-8 sm:mb-10">
              <a
                href={resumePdf}
                download="Rajesh_K_Resume.pdf"
                className="magnetic-btn group relative px-6 sm:px-8 py-3 bg-gradient-to-r from-primary to-secondary rounded-full font-semibold text-dark text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 cursor-hover w-full sm:w-auto min-w-[160px] sm:min-w-[180px] overflow-hidden text-center inline-block will-change-transform"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <Download className="inline-block w-5 h-5 mr-2 group-hover:animate-bounce" />
                  Download Resume
                </span>
              </a>

              <a href="#projects" className="magnetic-btn group px-6 sm:px-8 py-3 bg-text-main text-dark rounded-full font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 cursor-hover w-full sm:w-auto min-w-[160px] sm:min-w-[180px] relative overflow-hidden shadow-[0_0_20px_rgba(var(--color-primary),0.3)] hover:shadow-[0_0_30px_rgba(var(--color-primary),0.5)] border-2 border-transparent text-center flex items-center justify-center will-change-transform">
                <span className="relative z-10 text-dark dark:text-dark">View My Work</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-4 sm:space-x-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="magnetic-btn hero-social group p-3 rounded-full border-2 border-text-muted text-text-muted hover:border-primary hover:text-primary transition-all duration-300 hover:scale-110 cursor-hover relative overflow-hidden will-change-transform"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 group-hover:animate-pulse relative z-10" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="hero-image order-1 lg:order-2 flex justify-center lg:justify-end">
            <div
              ref={imageCardRef}
              onMouseMove={handleImageMouseMove}
              onMouseLeave={handleImageMouseLeave}
              className="relative w-[270px] h-[360px] sm:w-[330px] sm:h-[440px] md:w-[360px] md:h-[480px] lg:w-[410px] lg:h-[545px] xl:w-[440px] xl:h-[585px] transition-transform duration-300 will-change-transform cursor-hover"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Dynamic Atmospheric Glow Aura */}
              <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-tr from-primary/30 via-secondary/25 to-emerald-400/20 rounded-[44px] sm:rounded-[52px] blur-3xl opacity-70 animate-pulse pointer-events-none"></div>

              {/* Luxury Studio Frame */}
              <div className="relative w-full h-full rounded-[32px] sm:rounded-[40px] overflow-hidden p-1.5 sm:p-2 bg-gradient-to-b from-white/20 via-white/5 to-white/10 border border-white/15 shadow-2xl backdrop-blur-md group">
                <div className="relative w-full h-full rounded-[26px] sm:rounded-[34px] overflow-hidden bg-neutral-950">
                  <img
                    src={profileImage}
                    alt="Rajesh K - Designer & Developer"
                    loading="eager"
                    decoding="async"
                    className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-700 ease-out"
                  />

                  {/* Subtle Cinematic Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent opacity-40 pointer-events-none"></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:flex z-10">
        <div className="flex flex-col items-center text-gray-400 animate-bounce">
          <span className="text-sm mb-2 font-fira">Scroll Down</span>
          <ChevronDown className="w-6 h-6" />
        </div>
      </div>
    </section>
  );
};

export default Hero;