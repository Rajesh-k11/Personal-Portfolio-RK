import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const majorProjects = [
    {
      id: 1,
      title: 'Left2Feed – Real-Time Food Redistribution Platform',
      category: 'Major Project',
      description: 'A full-stack social impact platform designed to reduce food waste. It utilizes AI and geolocation to connect food donors with those in need in real-time.',
      image: 'https://images.pexels.com/photos/6995201/pexels-photo-6995201.jpeg?auto=compress&cs=tinysrgb&w=800', // Placeholder using food distribution theme
      technologies: ['React', 'Node.js', 'MongoDB', 'OpenAI Vision', 'Geolocation'],
      liveUrl: 'https://left2feed.netlify.app/',
      githubUrl: 'https://github.com/Rajesh-k11/Left2feed-Public',
      featured: true
    },
    {
      id: 2,
      title: 'Intelligent Multimodal System',
      category: 'Major Project',
      description: 'An AI-powered automation system using Computer Vision for gesture and voice-based interaction, enabling hands-free control of devices.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800', // Placeholder using AI/Tech theme
      technologies: ['Python', 'OpenCV', 'MediaPipe', 'Speech Recognition', 'AI'],
      liveUrl: 'https://github.com/Rajesh-k11/Multimodal_System',
      githubUrl: 'https://github.com/Rajesh-k11/Multimodal_System',
      featured: true
    }
  ];

  const webProjects = [
    {
      id: 3,
      title: 'CENCON – Symposium Website',
      category: 'Web Development',
      description: 'The official symposium website for Alagappa Chettiar Engineering College. A live, production-deployed project handling event details and registrations.',
      image: 'https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=800', // Placeholder using coding/web theme
      technologies: ['HTML/CSS', 'JavaScript', 'Responsive Design'],
      liveUrl: 'https://cencon.online/',
      githubUrl: 'https://github.com',
      featured: false
    }
  ];

  const personalProjects = [
    {
      id: 4,
      title: 'Portfolio Website',
      category: 'Personal Branding',
      description: 'A personal developer portfolio showcasing projects, skills, and contact information. features smooth animations and a modern dark-themed design.',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800', // Placeholder using workspace/design theme
      technologies: ['React', 'GSAP', 'Tailwind CSS', 'Vite'],
      liveUrl: '#',
      githubUrl: 'https://github.com',
      featured: true
    }
  ];

  const allProjects = [...majorProjects, ...webProjects, ...personalProjects];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Project cards animation
    gsap.fromTo('.project-card',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.projects-container',
          start: 'top 80%',
        }
      }
    );
  }, []);

  const ProjectCard = ({ project }: { project: any }) => (
    <div
      onClick={() => setSelectedProject(project.id)}
      className="project-card group relative bg-dark rounded-2xl overflow-hidden border border-dark-lighter hover:border-primary/30 transition-all duration-300 cursor-hover h-full flex flex-col"
    >
      <div className="relative overflow-hidden h-48 shrink-0">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {project.featured && (
          <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-primary to-secondary text-dark text-sm font-bold rounded-full">
            Featured
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-text-main mb-2 group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-text-muted text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 3).map((tech: string, index: number) => (
              <span
                key={index}
                className="px-2 py-1 bg-dark-lighter text-primary text-xs rounded-md font-fira"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 py-1 bg-dark-lighter text-text-muted text-xs rounded-md">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>

          <div className="flex gap-4">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary hover:text-secondary transition-colors duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="w-4 h-4" />
              <span className="text-sm">Live Demo</span>
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-text-muted hover:text-text-main transition-colors duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="w-4 h-4" />
              <span className="text-sm">Code</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="projects-container py-20 bg-dark-light relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </div>

        <div className="max-w-7xl mx-auto space-y-16">
          {/* Major Projects */}
          <div>
            <h3 className="text-2xl font-bold text-text-main mb-8 border-l-4 border-primary pl-4">
              Major Projects <span className="text-text-muted text-base font-normal ml-2">(High impact, complex, long-term)</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {majorProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>

          {/* Web Development Projects */}
          <div>
            <h3 className="text-2xl font-bold text-text-main mb-8 border-l-4 border-secondary pl-4">
              Web Development Projects <span className="text-text-muted text-base font-normal ml-2">(Client work + real deployment)</span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {webProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>

          {/* Personal Branding Project */}
          <div>
            <h3 className="text-2xl font-bold text-text-main mb-8 border-l-4 border-purple-500 pl-4">
              Personal Branding Project <span className="text-text-muted text-base font-normal ml-2">(Showcases you)</span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {personalProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </div>

        {/* Project Modal */}
        {selectedProject && createPortal(
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-dark-light rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-primary/30">
              {(() => {
                const project = allProjects.find(p => p.id === selectedProject);
                if (!project) return null;

                return (
                  <div>
                    <div className="relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover"
                      />
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="absolute top-4 right-4 w-10 h-10 bg-dark/80 rounded-full flex items-center justify-center text-white hover:bg-primary hover:text-dark transition-all duration-300"
                      >
                        ×
                      </button>
                    </div>
                    <div className="p-8">
                      <h3 className="text-3xl font-bold text-text-main mb-4">{project.title}</h3>
                      <p className="text-text-muted mb-6">{project.description}</p>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-primary mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-3">
                          {project.technologies.map((tech: string, index: number) => (
                            <span
                              key={index}
                              className="px-4 py-2 bg-dark border border-dark-lighter rounded-lg text-text-main font-fira"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-dark font-semibold rounded-lg hover:scale-105 transition-transform duration-300"
                        >
                          <ExternalLink className="w-5 h-5" />
                          View Live Demo
                        </a>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-dark transition-all duration-300"
                        >
                          <Github className="w-5 h-5" />
                          View Code
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>,
          document.body
        )}
      </div>
    </section>
  );
};

export default Projects;