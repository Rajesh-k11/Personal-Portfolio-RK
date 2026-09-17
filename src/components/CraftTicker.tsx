import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const CraftTicker: React.FC = () => {
  const tickerRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<gsap.core.Tween | null>(null);

  const crafts = [
    'Figma',
    'Event Branding',
    'React & TypeScript',
    'Stage Visuals',
    'Node.js & Express',
    'Design Systems',
    'Voice Automation',
    'GSAP Micro-Interactions',
    'Full Stack Architecture',
    'User Experience (UI/UX)'
  ];

  useEffect(() => {
    const el = tickerRef.current;
    if (!el) return;

    animRef.current = gsap.to(el, {
      xPercent: -50,
      repeat: -1,
      duration: 30,
      ease: 'none',
    });

    return () => {
      animRef.current?.kill();
    };
  }, []);

  return (
    <div
      className="w-full py-3.5 bg-dark-light/40 border-y border-white/5 overflow-hidden backdrop-blur-sm select-none"
      onMouseEnter={() => animRef.current?.pause()}
      onMouseLeave={() => animRef.current?.play()}
    >
      <div ref={tickerRef} className="flex whitespace-nowrap will-change-transform w-fit">
        {[...crafts, ...crafts, ...crafts].map((craft, idx) => (
          <div key={idx} className="flex items-center mx-4 sm:mx-6 text-xs sm:text-sm font-semibold tracking-wider text-text-muted/60 font-fira">
            <span className="hover:text-primary transition-colors cursor-default">{craft}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary/30 mx-4 sm:mx-6"></span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CraftTicker;

