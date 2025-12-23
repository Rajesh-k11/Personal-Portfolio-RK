import React, { useEffect, useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const form = useRef<HTMLFormElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate contact section
    gsap.fromTo('.contact-content',
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.contact-section',
          start: 'top 80%',
        }
      }
    );

    gsap.fromTo('.contact-form',
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.contact-section',
          start: 'top 80%',
        }
      }
    );
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!form.current) return;

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setIsSubmitting(false);
      setSubmitStatus('success');
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', title: '', message: '' });

      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch (error) {
      console.error('Email error:', error);
      setIsSubmitting(false);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'rajeshkanthasamy11@gmail.com',
      link: 'mailto:rajeshkanthasamy11@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 9659315589',
      link: 'tel:+919659315589'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Namakkal, Tamil Nadu',
      link: 'https://maps.google.com'
    }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Rajesh-k11', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/rajeshk1102/', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/The_rajesh_', label: 'Twitter' },
  ];

  return (
    <section id="contact" className="contact-section py-20 bg-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="contact-content">
            <h3 className="text-2xl font-bold text-text-main mb-8">Let's Connect</h3>
            <p className="text-text-muted mb-8 leading-relaxed">
              I’m open to discussions around projects, internships, collaborations, events, or general tech conversations. Whether you’re reaching out with an idea, an opportunity, or a quick question, feel free to drop a message.
            </p>

            {/* Contact Info */}
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-dark-light rounded-lg border border-dark-lighter hover:border-primary/30 transition-all duration-300 cursor-hover group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="w-6 h-6 text-dark" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-main group-hover:text-primary transition-colors duration-300">
                      {info.title}
                    </h4>
                    <p className="text-text-muted">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>


            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-text-main mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-dark-light border border-dark-lighter rounded-lg flex items-center justify-center text-text-muted hover:border-primary hover:text-primary hover:scale-110 transition-all duration-300 cursor-hover"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          < div className="contact-form" >
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-muted mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-dark-light border border-dark-lighter rounded-lg text-text-main placeholder-text-muted focus:border-primary focus:outline-none transition-colors duration-300"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-muted mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-dark-light border border-dark-lighter rounded-lg text-text-main placeholder-text-muted focus:border-primary focus:outline-none transition-colors duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="title" className="block text-sm font-medium text-text-muted mb-2">
                  Subject *
                </label>
                <div className="relative">
                  <select
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-dark-light border border-dark-lighter rounded-lg text-text-main focus:border-primary focus:outline-none transition-colors duration-300 appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select a subject</option>
                    <option value="Project collaboration">Project collaboration</option>
                    <option value="Internship / job opportunity">Internship / job opportunity</option>
                    <option value="Internship / job opportunity">Freelance opportunity / Custom work</option>
                    <option value="Event / speaker invite">Event / speaker invite</option>
                    <option value="General inquiry">General inquiry</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-text-muted">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-muted mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4} // Reduced default rows
                  className="w-full px-4 py-3 bg-dark-light border border-dark-lighter rounded-lg text-text-main placeholder-text-muted focus:border-primary focus:outline-none transition-colors duration-300 resize-none md:h-32" // Added specific height classes
                  placeholder="Tell me about your idea, opportunity, question, or anything you'd like to discuss..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 cursor-hover ${isSubmitting
                  ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                  : submitStatus === 'success'
                    ? 'bg-green-600 text-white'
                    : 'bg-gradient-to-r from-primary to-secondary text-dark hover:scale-105 hover:shadow-lg hover:shadow-primary/25'
                  }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </span>
                ) : submitStatus === 'success' ? (
                  'Message Sent Successfully!'
                ) : submitStatus === 'error' ? (
                  'Failed to Send. Try Again.'
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <Send className="w-5 h-5" />
                    Send Message
                  </span>
                )}
              </button>

              {submitStatus === 'success' && (
                <p className="text-green-400 text-center">
                  Thank you for your message! I'll get back to you soon.
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-400 text-center">
                  Something went wrong. Please try again later or email me directly.
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-dark-lighter text-center">
          <p className="text-text-muted">
            © 2025 Rajesh K. Built with ❤️ using React, GSAP, and Tailwind CSS.
          </p>
        </div>
      </div>
    </section >
  );
};

export default Contact;