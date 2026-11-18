import React, { useState, useEffect } from 'react';
import { Menu, X, Code2, Sparkles, Send, Github, Linkedin, Instagram, Twitter } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'nav-glass-anime py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Manikeshwar Lagishetti Homepage"
          >
            <div className="w-10 h-10 rounded-xl bg-navy-850 border border-gold-500/40 flex items-center justify-center text-gold-400 font-display font-extrabold text-base shadow-inner group-hover:border-gold-400 group-hover:shadow-gold-glow transition-all">
              ML
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-base sm:text-lg tracking-wide text-white group-hover:text-gold-300 transition-colors block">
                  Manikeshwar Lagishetti
                </span>
                <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-gold-500/10 text-gold-400 border border-gold-500/20 hidden sm:inline-block">
                  DEV
                </span>
              </div>
              <span className="text-[11px] font-mono tracking-wider text-gold-400/90 font-medium block">
                Java Full Stack Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-xs lg:text-sm font-mono text-slate-300 hover:text-gold-300 hover:bg-navy-850/60 rounded-lg transition-all"
              >
                {link.name}
              </a>
            ))}

            {/* Quick Social Mini-Icons */}
            <div className="flex items-center gap-1.5 ml-2 pl-2 border-l border-slate-800">
              <a
                href={personalInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg text-slate-400 hover:text-pink-400 hover:bg-navy-850 transition-colors"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg text-slate-400 hover:text-sky-400 hover:bg-navy-850 transition-colors"
                title="X (Twitter)"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>

            <a
              href="#contact"
              className="ml-3 inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider text-navy-950 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 rounded-lg hover:shadow-gold-glow hover:brightness-110 transition-all duration-200"
            >
              <span>Transmission</span>
              <Send className="w-3.5 h-3.5" />
            </a>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-lg bg-navy-850 border border-gold-500/30 text-slate-200 hover:text-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-500/50"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gold-400" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden nav-glass-anime border-b border-gold-500/20 px-4 pt-3 pb-6 animate-fadeIn">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-lg text-sm font-mono text-slate-200 hover:text-gold-400 hover:bg-navy-850/80 transition-all"
              >
                {link.name}
              </a>
            ))}

            {/* Mobile Social Row */}
            <div className="flex items-center justify-around py-3 border-t border-slate-800">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-gold-400 p-2"
                title="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-gold-400 p-2"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-gold-400" />
              </a>
              <a
                href={personalInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-pink-400 p-2"
                title="Instagram"
              >
                <Instagram className="w-5 h-5 text-pink-400" />
              </a>
              <a
                href={personalInfo.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-sky-400 p-2"
                title="X (Twitter)"
              >
                <Twitter className="w-5 h-5 text-sky-400" />
              </a>
            </div>

            <div className="pt-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-mono font-bold uppercase tracking-wider text-navy-950 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 rounded-lg shadow-gold-glow"
              >
                <span>Contact Me</span>
                <Send className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
