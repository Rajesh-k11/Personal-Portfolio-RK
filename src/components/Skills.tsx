import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Code, Layout, Server, Database, Globe,
  GitBranch, Terminal, Figma, Cpu, MessageSquare,
  Video, Mic, Image as ImageIcon, Box,
  Zap, PenTool, Cloud, Target, FastForward, Lightbulb, Palette
} from 'lucide-react';

// Brand SVGs for Familiar With section
const PythonIcon: React.FC = () => (
  <svg className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" viewBox="0 0 24 24">
    <path fill="#3776AB" d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.005 2.75h5.813v.825H3.922s-3.828-.434-3.828 5.656c0 6.09 3.34 5.797 3.34 5.797h1.996v-2.734s-.109-3.266 3.207-3.266h5.457s3.152.05 3.152-3.031V3.03S17.656 0 11.914 0zm-2.82 1.637a1.05 1.05 0 0 1 1.05 1.051 1.05 1.05 0 0 1-1.05 1.05 1.05 1.05 0 0 1-1.05-1.05 1.05 1.05 0 0 1 1.05-1.05z" />
    <path fill="#FFD43B" d="M12.086 24c6.094 0 5.715-2.656 5.715-2.656l-.004-2.75h-5.813v-.825h8.097s3.828.434 3.828-5.656c0-6.09-3.34-5.797-3.34-5.797h-1.996v2.734s.109 3.266-3.207 3.266H9.906s-3.152-.05-3.152 3.031v5.657S6.344 24 12.086 24zm2.82-1.637a1.05 1.05 0 0 1-1.05-1.051 1.05 1.05 0 0 1 1.05-1.05 1.05 1.05 0 0 1 1.05 1.05 1.05 1.05 0 0 1-1.05 1.05z" />
  </svg>
);

const JavaIcon: React.FC = () => (
  <svg className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" viewBox="0 0 24 24">
    <path d="M8.85 18.78c0 .24 1.83.43 4.09.43 2.25 0 4.08-.19 4.08-.43 0-.24-1.83-.43-4.08-.43-2.26 0-4.09.19-4.09.43zM6.9 20.46c0 .32 2.7.58 6.04.58 3.34 0 6.04-.26 6.04-.58s-2.7-.58-6.04-.58c-3.34 0-6.04.26-6.04.58z" fill="#5382A1" />
    <path d="M12.94 15.65c1.68-.86 3.12-1.99 3.01-2.99-.08-.75-.89-1.22-1.52-1.42-.51-.16-1.12-.22-1.74-.29-1.07-.11-2.15-.22-3.13-.53-.84-.27-1.5-.7-1.42-1.45.12-1.14 1.77-1.92 3.32-2.19l.34-.06c.39-.07.78-.13 1.18-.18 2.05-.28 4.22-.38 5.7 1.05.65.63.98 1.45.89 2.37-.15 1.5-1.53 2.82-3.47 3.82l-.4.21c-.88.45-1.85.87-2.76 1.66z" fill="#E76F00" />
    <path d="M11.66 2.36c.64.67.66 1.61.1 2.38-.63.85-1.71 1.4-2.6 1.94-.48.29-.95.58-1.34.91-.45.38-.68.8-.57 1.25.13.56.71.97 1.44 1.13.78.17 1.71.13 2.65.09l.86-.04c1.1-.05 2.22-.09 3.19.22.84.27 1.48.82 1.57 1.54.12.98-.74 1.88-2.02 2.45l-.46.21c-.76.35-1.58.64-2.4 1.05-1.25.62-2.45 1.45-2.75 2.62-.2 1.04.38 1.97 1.4 2.54.99.55 2.29.74 3.63.78.43.01.87.01 1.3 0 2.27-.05 4.54-.53 5.48-2.21.14-.25.25-.52.33-.8l.2-.76-.66.42c-1.18.75-2.67 1.05-4.14 1.08-1.11.02-2.2-.09-2.98-.5-.51-.27-.7-.66-.63-1.02.08-.43.51-.83 1.24-1.19.78-.38 1.77-.69 2.76-1.11 1.63-.69 3.13-1.63 3.32-3.15.14-1.11-.37-2.14-1.29-2.84-1.23-.93-2.98-1.11-4.71-1.09l-.76.01c-.93.01-1.86.03-2.68-.11-.53-.09-.85-.31-.9-.55-.07-.3.12-.64.55-.95.42-.31.97-.58 1.54-.86 1.24-.61 2.59-1.37 2.92-2.58.26-1.03-.23-1.99-1.14-2.61-.43-.3-.95-.49-1.5-.59l-.65-.12.44.57z" fill="#E76F00" />
  </svg>
);

const ReactLogoIcon: React.FC = () => (
  <svg className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" viewBox="-11.5 -10.23174 23 20.46348">
    <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
    <g stroke="#61DAFB" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

const FirebaseIcon: React.FC = () => (
  <svg className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" viewBox="0 0 24 24">
    <path d="M3.89 15.672L6.255.461A.542.542 0 0 1 7.27.288l2.543 4.771-5.923 10.613z" fill="#FFA000" />
    <path d="M16.836 7.026a.544.544 0 0 0-.916-.279L3.89 15.672l7.946 4.492a1.867 1.867 0 0 0 1.836 0l5.164-13.138z" fill="#F57C00" />
    <path d="M20.681 19.119L18.679 6.679a.544.544 0 0 0-.916-.279L3.89 15.672l8.784 4.962c.57.322 1.266.322 1.836 0l6.171-1.515z" fill="#FFCA28" />
  </svg>
);

const SupabaseIcon: React.FC = () => (
  <svg className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" viewBox="0 0 24 24">
    <path
      d="M21.362 9.354H12V.396a.396.396 0 0 0-.716-.233L.12 14.342a.396.396 0 0 0 .307.642H12v8.62a.396.396 0 0 0 .716.233l11.164-14.18a.396.396 0 0 0-.307-.642z"
      fill="#3ECF8E"
    />
  </svg>
);

const NginxIcon: React.FC = () => (
  <svg className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" viewBox="0 0 24 24">
    <path
      d="M12 0L1.605 6v12L12 24l10.395-6V6L12 0zm6.518 16.513h-2.316l-6.39-8.42v8.42H7.495V7.487h2.316l6.39 8.42V7.487h2.317v9.026z"
      fill="#009639"
    />
  </svg>
);

const familiarTech = [
  { name: 'Python', icon: PythonIcon },
  { name: 'Java', icon: JavaIcon },
  { name: 'React', icon: ReactLogoIcon },
  { name: 'Firebase', icon: FirebaseIcon },
  { name: 'Supabase', icon: SupabaseIcon },
  { name: 'Nginx', icon: NginxIcon },
];

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Design & Creative Tools',
      icon: Figma,
      skills: [
        { name: 'Figma', icon: Figma, description: 'UI/UX design, interactive prototyping & design systems' },
        { name: 'Visual Identity', icon: PenTool, description: 'Event branding, stage visuals & brand guidelines' },
        { name: 'Design Systems', icon: Box, description: 'Component libraries, design tokens & typography scales' },
        { name: 'Presentation & Stage Visuals', icon: ImageIcon, description: 'Keynote decks, conference screens & displays' },
        { name: 'Canva / Adobe Tools', icon: Palette, description: 'Social creatives, marketing kits & launch posters' },
        { name: 'Human-Centered UI/UX', icon: Layout, description: 'User journey mapping, wireframing & usability testing' },
      ]
    },
    {
      title: 'Frontend Engineering',
      icon: Layout,
      skills: [
        { name: 'React.js', icon: Globe, description: 'Component architectures, hooks & state management' },
        { name: 'TypeScript / JavaScript (ES6+)', icon: Terminal, description: 'Type-safe programming, async patterns' },
        { name: 'Tailwind CSS', icon: Layout, description: 'Utility-first modern styling & design token alignment' },
        { name: 'HTML5 & CSS3', icon: Code, description: 'Semantic structure, accessibility & responsive layouts' },
        { name: 'GSAP Animations', icon: Zap, description: 'Fluid scroll-driven animations & micro-interactions' },
        { name: 'Figma-to-Code', icon: FastForward, description: 'Pixel-perfect translation of designs to production UI' },
      ]
    },
    {
      title: 'Backend & Cloud',
      icon: Server,
      skills: [
        { name: 'Node.js & Express.js', icon: Server, description: 'Production-grade RESTful APIs & MVC architecture' },
        { name: 'MongoDB', icon: Database, description: 'Document data modeling & CRUD operations' },
        { name: 'REST APIs & Webhooks', icon: Globe, description: 'Third-party integrations & real-time event webhooks' },
        { name: 'Voice Automation', icon: Mic, description: 'Inbound/outbound voice platform workflows' },
        { name: 'Git & GitHub', icon: GitBranch, description: 'Version control, branch workflows & collaboration' },
        { name: 'Vercel / Netlify', icon: Cloud, description: 'Continuous deployment & cloud hosting' },
      ]
    },
    {
      title: 'AI & Emerging Tech',
      icon: Cpu,
      skills: [
        { name: 'OpenAI Vision & LLMs', icon: ImageIcon, description: 'Multimodal vision processing & prompt engineering' },
        { name: 'Voice AI & Speech Recognition', icon: Mic, description: 'Audio processing & synthetic voice pipelines' },
        { name: 'Computer Vision & MediaPipe', icon: Cpu, description: 'Gesture detection & real-time visual tracking' },
        { name: 'AI-Assisted Engineering', icon: Zap, description: 'Accelerated development & intelligent workflows' },
        { name: 'Gemini / ChatGPT', icon: MessageSquare, description: 'Research, ideation & automated problem solving' },
        { name: 'VEO 3 / Creative AI', icon: Video, description: 'Generative AI visual content exploration' },
      ]
    }
  ];

  const metaSkills = [
    {
      title: 'Technical Strengths',
      icon: Target,
      skills: [
        { name: 'Rapid App Development', description: 'Using AI-assisted workflows' },
        { name: 'Frontend Focus', description: 'Clean UI and usability' },
        { name: 'Problem Solving', description: 'Structured logic and experimentation' },
        { name: 'Prototyping', description: 'Translating ideas into working prototypes' },
      ]
    },
    {
      title: 'AI & Productivity',
      icon: FastForward,
      skills: [
        { name: 'AI-Assisted Coding', description: 'Debugging and refactoring with AI' },
        { name: 'Prompt Engineering', description: 'For content, code, and ideation' },
        { name: 'Faster MVP Development', description: 'Using LLMs and AI tools' },
      ]
    }
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Skill categories animation
    gsap.fromTo('.skill-category',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.skills-grid',
          start: 'top 80%',
        }
      }
    );

    // Meta skills animation
    gsap.fromTo('.meta-skill-card',
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.meta-skills-container',
          start: 'top 85%',
        }
      }
    );
  }, []);

  return (
    <section id="skills" className="skills-section py-12 sm:py-16 md:py-20 bg-dark relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-text-muted text-base sm:text-lg max-w-2xl mx-auto">
            Technologies, tools, and AI workflows I leverage
          </p>
        </div>

        <div className="skills-grid grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 max-w-7xl mx-auto mb-12 sm:mb-20">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category bg-dark-light rounded-2xl p-5 sm:p-8 border border-dark-lighter hover:border-primary/30 transition-all duration-300">
              <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-8">
                <div className="p-3 bg-dark rounded-xl text-primary">
                  <category.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-text-main">
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="bg-dark p-4 rounded-xl border border-dark-lighter hover:border-primary/30 transition-all duration-300 group hover:-translate-y-1">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 text-primary/60 group-hover:text-primary transition-colors">
                        <skill.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-main group-hover:text-primary transition-colors mb-1">
                          {skill.name}
                        </h4>
                        <p className="text-sm text-text-muted leading-tight">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technical Strengths & AI Productivity */}
        <div className="meta-skills-container max-w-7xl mx-auto mb-12 sm:mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
            {metaSkills.map((category, index) => (
              <div key={index} className="meta-skill-card bg-gradient-to-br from-dark-light to-dark p-5 sm:p-8 rounded-2xl border border-primary/20 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-500"></div>

                <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-8 relative z-10">
                  <div className="p-3 bg-dark rounded-xl text-secondary">
                    <category.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-text-main">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4 relative z-10">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
                      <Lightbulb className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-text-main">
                          {skill.name}
                        </h4>
                        <p className="text-sm text-text-muted leading-tight">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Familiar With Section */}
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-text-main">
            Also Familiar With
          </h3>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {familiarTech.map((tech, index) => (
              <span
                key={index}
                className="px-5 py-2.5 sm:px-6 sm:py-3 bg-dark-light border border-dark-lighter hover:border-primary/40 rounded-full text-text-main hover:text-primary transition-all duration-300 cursor-hover flex items-center gap-2.5 text-xs sm:text-sm font-medium shadow-sm hover:shadow-md hover:scale-105"
              >
                <tech.icon />
                <span>{tech.name}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;