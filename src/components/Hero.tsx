import React, { useEffect, useState } from 'react';
import { ChevronDown, Download, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { gsap } from 'gsap';
import resumePdf from '../assets/RAJESH K 1 page Resume.pdf';
import profileImage from '../assets/profile 1.png';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = [
    'Full-Stack Developer',
    'GDG OnCampus Organizer',
    'Freelancer',
    'Community Builder',
    'AI Explorer',
    'Tech Educator',
    'Student Mentor'
  ];

  useEffect(() => {
    // Hero animations
    const tl = gsap.timeline({ delay: 2.5 });

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

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-light to-dark opacity-50"></div>

      {/* Main Hero Content */}
      <div className="container mx-auto px-6 z-10 flex items-center justify-center min-h-screen">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full max-w-7xl mx-auto py-20">

          {/* Left Column: Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Title Section */}
            <div className="hero-title mb-8 space-y-4">
              <div className="text-2xl sm:text-3xl md:text-4xl font-light text-text-muted">
                Hi, I'm
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
                <h1 className="gradient-text text-5xl sm:text-6xl md:text-7xl font-bold leading-tight tracking-tight pb-2">
                  Rajesh
                </h1>

                <div className="wave-emoji-container">
                  <span
                    className="wave-emoji text-4xl sm:text-5xl md:text-6xl inline-block transform-gpu"
                    role="img"
                    aria-label="Waving hand"
                  >
                    👋
                  </span>
                </div>
              </div>
            </div>

            {/* Typing Animation */}
            <div className="hero-subtitle mb-8 space-y-6">
              <div className="text-xl sm:text-2xl md:text-3xl text-text-muted min-h-[3rem] flex items-center justify-center lg:justify-start">
                <span className="mr-3">I'm a</span>
                <div className="typing-container relative inline-flex items-center min-w-[250px] justify-start">
                  <span className="text-primary font-semibold font-fira tracking-wide">
                    {displayText}
                  </span>
                  <span className="typing-cursor text-primary ml-1 animate-pulse">
                    |
                  </span>
                </div>
              </div>

              <div className="max-w-2xl mx-auto lg:mx-0">
                <p className="text-lg sm:text-xl text-text-muted leading-relaxed">
                  Passionate about creating exceptional digital experiences through clean code, innovative design, and cutting-edge technology.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-10">
              <a
                href={resumePdf}
                download="Rajesh_K_Resume.pdf"
                className="group relative px-8 py-3 bg-gradient-to-r from-primary to-secondary rounded-full font-semibold text-dark text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 cursor-hover w-full sm:w-auto min-w-[180px] overflow-hidden text-center inline-block"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <Download className="inline-block w-5 h-5 mr-2 group-hover:animate-bounce" />
                  Download Resume
                </span>
              </a>

              <a href="#projects" className="group px-8 py-3 bg-text-main text-dark rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 cursor-hover w-full sm:w-auto min-w-[180px] relative overflow-hidden shadow-[0_0_20px_rgba(var(--color-primary),0.3)] hover:shadow-[0_0_30px_rgba(var(--color-primary),0.5)] border-2 border-transparent text-center flex items-center justify-center">
                <span className="relative z-10 text-dark dark:text-dark">View My Work</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-social group p-3 rounded-full border-2 border-text-muted text-text-muted hover:border-primary hover:text-primary transition-all duration-300 hover:scale-110 cursor-hover relative overflow-hidden"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 group-hover:animate-pulse relative z-10" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="hero-image order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
              <div className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-primary/20 hover:border-primary/40 transition-all duration-500 shadow-2xl">
                <img
                  src={profileImage}
                  alt="Rajesh K"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Floating tech icons decoration could go here if needed */}
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