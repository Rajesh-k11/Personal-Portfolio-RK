import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Hardware-accelerated quickTo for buttery smooth 120fps motion
    const setDotX = gsap.quickTo(dot, 'x', { duration: 0.08, ease: 'power3' });
    const setDotY = gsap.quickTo(dot, 'y', { duration: 0.08, ease: 'power3' });
    const setRingX = gsap.quickTo(ring, 'x', { duration: 0.22, ease: 'power2.out' });
    const setRingY = gsap.quickTo(ring, 'y', { duration: 0.22, ease: 'power2.out' });

    const handleMouseMove = (e: MouseEvent) => {
      setDotX(e.clientX);
      setDotY(e.clientY);
      setRingX(e.clientX);
      setRingY(e.clientY);
    };

    const handleMouseEnter = () => {
      gsap.to(ring, { scale: 1.7, opacity: 0.9, borderColor: '#00f260', duration: 0.3, ease: 'power2.out' });
      gsap.to(dot, { scale: 0, duration: 0.2 });
    };

    const handleMouseLeave = () => {
      gsap.to(ring, { scale: 1, opacity: 0.4, borderColor: '#00f260', duration: 0.3, ease: 'power2.out' });
      gsap.to(dot, { scale: 1, duration: 0.2 });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Attach listeners to interactive elements
    const attachHover = () => {
      const elements = document.querySelectorAll('a, button, .cursor-hover, .bento-card');
      elements.forEach((el) => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
    };

    attachHover();
    const timer = setTimeout(attachHover, 1000);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-primary pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden md:block opacity-40 will-change-transform"
      />
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-primary pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden md:block will-change-transform"
      />
    </>
  );
};

export default CustomCursor;