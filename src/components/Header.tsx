import React, { useEffect, useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { gsap } from 'gsap';
import logo from '../assets/LOGO.png';

interface HeaderProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'services', label: 'Services' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    gsap.fromTo('.header',
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 2.2, ease: 'power3.out' }
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, delay: 0.1, ease: 'power3.out' }
    );

    // Update active section based on scroll
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(navItems[index].id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="header fixed top-0 left-0 right-0 z-40 bg-dark/80 backdrop-blur-md border-b border-dark-lighter">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold gradient-text font-fira flex items-center">
            <img src={logo} alt="RK Logo" className="h-10 w-auto" />
          </div>
    <header className="header fixed top-0 left-0 right-0 z-40 bg-dark/85 backdrop-blur-md border-b border-dark-lighter transition-colors duration-300">
      <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-3.5">
        <div className="flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
            className="text-2xl font-bold gradient-text font-fira flex items-center cursor-hover shrink-0"
          >
            <img src={logo} alt="RK Logo" className="h-9 sm:h-10 w-auto object-contain" />
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
          <ul className="hidden lg:flex items-center space-x-1 xl:space-x-1.5 bg-dark-light/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-dark-lighter text-sm font-medium">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-3 py-2 transition-colors duration-300 cursor-hover ${activeSection === item.id
                    ? 'text-primary'
                    : 'text-text-muted hover:text-text-main'
                    }`}
                  className={`relative px-3 py-1.5 rounded-full transition-all duration-200 cursor-hover text-xs xl:text-sm font-medium ${
                    activeSection === item.id
                      ? 'text-primary bg-dark-lighter font-semibold shadow-xs'
                      : 'text-text-muted hover:text-text-main hover:bg-dark-lighter/50'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></span>
                  )}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-dark-lighter transition-colors text-text-main cursor-hover"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-4">
          {/* Right Action Hub: Theme Toggle & Mobile Menu */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Prominent Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-dark-lighter transition-colors text-text-main cursor-hover"
              className="group relative flex items-center justify-center w-10 h-10 rounded-xl bg-dark-light border border-dark-lighter hover:border-primary/50 text-text-main hover:text-primary transition-all duration-300 shadow-xs hover:shadow-md cursor-hover"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-amber-400 group-hover:rotate-90 transition-transform duration-500" />
              ) : (
                <Moon className="w-5 h-5 text-indigo-500 group-hover:-rotate-12 transition-transform duration-500" />
              )}
            </button>

            {/* Mobile / Tablet Menu Hamburger (visible on < lg) */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-text-main cursor-hover"
              className="lg:hidden p-2 rounded-xl bg-dark-light border border-dark-lighter text-text-main hover:text-primary transition-colors cursor-hover"
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {/* Mobile Navigation Drawer */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <ul className="space-y-4">
          <div className="lg:hidden mt-3 pt-3 pb-3 border-t border-dark-lighter/70 animate-fade-in">
            <ul className="grid grid-cols-2 gap-2 mb-3">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left px-3 py-2 transition-colors duration-300 cursor-hover ${activeSection === item.id
                      ? 'text-primary'
                      : 'text-text-muted hover:text-text-main'
                      }`}
                    className={`w-full text-left px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors cursor-hover ${
                      activeSection === item.id
                        ? 'text-primary bg-dark-lighter font-semibold'
                        : 'text-text-muted hover:text-text-main hover:bg-dark-light'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>

            <div className="pt-2 border-t border-dark-lighter/50 flex items-center justify-between px-1">
              <span className="text-xs text-text-muted">Color Theme</span>
              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-dark-light border border-dark-lighter text-xs text-text-main hover:text-primary transition-colors cursor-hover"
              >
                {theme === 'dark' ? (
                  <>
                    <Sun size={14} className="text-amber-400" />
                    <span>Light Mode</span>
                  </>
                ) : (
                  <>
                    <Moon size={14} className="text-indigo-500" />
                    <span>Dark Mode</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;