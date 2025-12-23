import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const LoadingScreen: React.FC = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.to('.loading-text', {
      opacity: 1,
      duration: 0.5,
    })
      .to('.loading-bar', {
        width: '100%',
        duration: 1.5,
        ease: 'power2.inOut',
      })
      .to('.loading-screen', {
        opacity: 0,
        duration: 0.5,
        delay: 0.2,
      });
  }, []);

  return (
    <div className="loading-screen fixed inset-0 bg-dark z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="loading-text opacity-0 mb-8">
          <h1 className="text-4xl font-bold gradient-text mb-2">Rajesh K</h1>
          <p className="text-text-muted font-fira">Loading portfolio<span className="loading-dots"></span></p>
        </div>
        <div className="w-64 h-1 bg-dark-lighter rounded-full overflow-hidden">
          <div className="loading-bar h-full bg-gradient-to-r from-primary to-secondary rounded-full w-0"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;