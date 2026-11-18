import React from 'react';
import { ArrowUp, Github, Linkedin, Instagram, Twitter, Mail, Zap, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 border-t border-slate-800/80 py-14 relative overflow-hidden bg-anime-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          
          {/* Brand & Title */}
          <div className="text-center md:text-left space-y-1">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="w-2 h-2 rounded-full bg-gold-400" />
              <h3 className="text-lg font-display font-extrabold text-white tracking-wide">
                {personalInfo.name}
              </h3>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-gold-500/15 text-gold-300 border border-gold-500/30">
                PROD READY
              </span>
            </div>
            <p className="text-xs text-gold-400/90 font-mono">
              {personalInfo.role} • Hyderabad, Telangana
            </p>
          </div>

          {/* Quick Anchor Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-xs font-mono text-slate-400">
            <a href="#about" className="hover:text-gold-300 transition-colors">ABOUT</a>
            <a href="#skills" className="hover:text-gold-300 transition-colors">SKILLS</a>
            <a href="#projects" className="hover:text-gold-300 transition-colors">PROJECTS</a>
            <a href="#education" className="hover:text-gold-300 transition-colors">EDUCATION</a>
            <a href="#certifications" className="hover:text-gold-300 transition-colors">CERTS</a>
            <a href="#contact" className="hover:text-gold-300 transition-colors">CONTACT</a>
          </nav>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-navy-900 border border-slate-800 text-slate-300 hover:text-gold-400 hover:border-gold-500/30 transition-all shadow-gold-glow group"
            aria-label="Scroll back to top"
            title="Return to peak"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Bottom Social Links & Attribution */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-5 text-xs text-slate-400 font-mono">
          <p className="text-center md:text-left text-slate-500">
            © {new Date().getFullYear()} {personalInfo.name}. Engineered with React, Vite & Tailwind CSS.
          </p>

          {/* Social Icons Dock */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 hover:shadow-sm"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
              <span className="hidden sm:inline">GitHub</span>
            </a>

            <span className="text-slate-700">•</span>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-gold-300 transition-colors flex items-center gap-1.5"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4 text-gold-400" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>

            <span className="text-slate-700">•</span>

            <a
              href={personalInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-pink-400 transition-colors flex items-center gap-1.5"
              title="Instagram"
            >
              <Instagram className="w-4 h-4 text-pink-400" />
              <span className="hidden sm:inline">Instagram</span>
            </a>

            <span className="text-slate-700">•</span>

            <a
              href={personalInfo.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-sky-400 transition-colors flex items-center gap-1.5"
              title="X (Twitter)"
            >
              <Twitter className="w-4 h-4 text-sky-400" />
              <span className="hidden sm:inline">X (Twitter)</span>
            </a>

            <span className="text-slate-700">•</span>

            <a
              href={`mailto:${personalInfo.email}`}
              className="text-slate-400 hover:text-gold-300 transition-colors flex items-center gap-1.5"
              title="Email"
            >
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">Email</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
