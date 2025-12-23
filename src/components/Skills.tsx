import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Code, Layout, Server, Database, Globe,
  GitBranch, Terminal, Figma, Cpu, MessageSquare,
  Video, Mic, Image as ImageIcon, Box,
  Zap, PenTool, Cloud, Target, FastForward, Lightbulb
} from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Layout,
      skills: [
        { name: 'HTML5', icon: Code, description: 'Semantic structure, accessibility, SEO basics' },
        { name: 'CSS3 / Bootstrap', icon: Layout, description: 'Responsive layouts, modern UI design' },
        { name: 'JavaScript (ES6+)', icon: Terminal, description: 'DOM manipulation, async logic' },
        { name: 'React.js', icon: Globe, description: 'Component-based UI, hooks, state handling' },
        { name: 'UI/UX Basics', icon: PenTool, description: 'Layout design, user flows, wireframes' },
        { name: 'GSAP', icon: Zap, description: 'Basic UI animations (learning & experimentation)' },
      ]
    },
    {
      title: 'Backend / Programming',
      icon: Server,
      skills: [
        { name: 'Java', icon: Box, description: 'OOP concepts, basic application logic' },
        { name: 'Python', icon: Code, description: 'Automation, scripting, AI/ML project usage' },
        { name: 'Node.js (Basic)', icon: Server, description: 'API handling, server-side logic' },
        { name: 'MongoDB (Basic)', icon: Database, description: 'CRUD operations, schema design' },
        { name: 'REST APIs', icon: Globe, description: 'API integration and data handling' },
      ]
    },
    {
      title: 'Tools & Platforms',
      icon: Terminal,
      skills: [
        { name: 'Git & GitHub', icon: GitBranch, description: 'Version control, collaboration' },
        { name: 'VS Code', icon: Code, description: 'Primary development environment' },
        { name: 'Figma', icon: Figma, description: 'UI design, wireframes, prototyping' },
        { name: 'Canva', icon: PenTool, description: 'Visual content & presentation design' },
        { name: 'Netlify / Vercel', icon: Cloud, description: 'Website deployment' },
        { name: 'Linux (Basic)', icon: Terminal, description: 'Command line usage' },
      ]
    },
    {
      title: 'AI & LLM Tools',
      icon: Cpu,
      skills: [
        { name: 'ChatGPT', icon: MessageSquare, description: 'Prompt engineering, code assistance' },
        { name: 'Gemini (Google AI)', icon: MessageSquare, description: 'Research, ideation, problem solving' },
        { name: 'Antigravity AI', icon: Zap, description: 'Creative AI workflows & experimentation' },
        { name: 'OpenAI Vision', icon: ImageIcon, description: 'Image-based AI processing' },
        { name: 'ElevenLabs', icon: Mic, description: 'AI voice generation' },
        { name: 'VEO 3', icon: Video, description: 'AI video & visual content generation' },
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
    <section id="skills" className="skills-section py-20 bg-dark relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Technologies, tools, and AI workflows I leverage
          </p>
        </div>

        <div className="skills-grid grid md:grid-cols-2 gap-8 max-w-7xl mx-auto mb-20">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category bg-dark-light rounded-2xl p-8 border border-dark-lighter hover:border-primary/30 transition-all duration-300">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-dark rounded-xl text-primary">
                  <category.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-text-main">
                  {category.title}
                </h3>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
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
        <div className="meta-skills-container max-w-7xl mx-auto mb-20">
          <div className="grid md:grid-cols-2 gap-8">
            {metaSkills.map((category, index) => (
              <div key={index} className="meta-skill-card bg-gradient-to-br from-dark-light to-dark p-8 rounded-2xl border border-primary/20 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-500"></div>

                <div className="flex items-center gap-4 mb-8 relative z-10">
                  <div className="p-3 bg-dark rounded-xl text-secondary">
                    <category.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-text-main">
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
          <h3 className="text-2xl font-bold mb-8 text-text-main">
            Also Familiar With
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Python', 'Java', 'React', 'Firebase',
              'Supabase', 'Nginx',
            ].map((tech, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-dark-light border border-dark-lighter rounded-full text-text-muted hover:border-primary hover:text-primary transition-all duration-300 cursor-hover flex items-center gap-2"
              >
                <div className="w-2 h-2 rounded-full bg-primary/50"></div>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;