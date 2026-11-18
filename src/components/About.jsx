import React from 'react';
import { User, Code2, Server, Database, CheckCircle2, BookOpen, GraduationCap, Sparkles, Shield, Zap } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const pillars = [
    {
      icon: Server,
      title: 'Backend Engineering',
      desc: 'Building resilient REST APIs, implementing JWT authentication, and managing JPA/Hibernate ORM with MySQL databases.'
    },
    {
      icon: Code2,
      title: 'Frontend Development',
      desc: 'Creating interactive user interfaces using React.js, Redux Toolkit, and modern CSS/Tailwind for cross-device compatibility.'
    },
    {
      icon: Database,
      title: 'Database Architecture',
      desc: 'Designing normalized relational schemas in MySQL, optimizing queries, and handling data persistence reliably.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-navy-950 relative overflow-hidden bg-anime-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-850/90 border border-gold-500/30 text-gold-300 text-xs font-mono uppercase tracking-widest mb-3 shadow-gold-glow">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>PROFILE & BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            About <span className="gold-gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-gold-400 via-gold-500 to-cyan-400 rounded-full mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Story & Biography */}
          <div className="lg:col-span-7 space-y-6">
            <div className="anime-card rounded-2xl p-6 sm:p-8 hud-corner">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-5">
                <div className="flex items-center gap-3.5">
                  <img
                    src="/profile2.jpg"
                    alt="Manikeshwar Lagishetti"
                    className="w-12 h-12 rounded-xl object-cover object-top border-2 border-gold-500/40 shadow-gold-glow"
                  />
                  <div>
                    <h3 className="text-xl font-display font-bold text-white flex items-center gap-2">
                      Professional Background
                    </h3>
                    <span className="text-xs text-gold-400/90 font-mono block">
                      Manikeshwar Lagishetti // Java Full Stack Developer
                    </span>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-gold-400 px-2 py-0.5 rounded bg-gold-500/10 border border-gold-500/20 hidden sm:inline-block">
                  DEVELOPER LOG // 01
                </span>
              </div>

              <div className="space-y-4 text-slate-300 leading-relaxed font-light">
                <p>
                  I am an <strong className="text-white font-medium">Entry-Level Java Full Stack Developer</strong> with hands-on project experience engineering and shipping complete web applications using <strong className="text-white font-medium">Java, Spring Boot, React.js, MySQL, JavaScript, and REST APIs</strong>.
                </p>
                <p>
                  My highlight project is <strong className="text-gold-300 font-medium">Literary Sanctuary</strong>—a Goodreads-inspired full-stack application built from the ground up and deployed live to production. Through building it, I gained deep practical familiarity with end-to-end software delivery: from relational schema design and Spring Security JWT filters to responsive React components and cloud hosting.
                </p>
                <p>
                  Having graduated with a <strong className="text-white font-medium">B.Com in Computer Applications</strong> (7.41 CGPA) along with extensive Java Full Stack Developer training, I combine business understanding with technical problem solving. I am actively seeking an <strong className="text-gold-300 font-medium">entry-level Software Developer or Java Developer role</strong> where I can write clean code, contribute to production systems, and continue growing with a collaborative team.
                </p>
              </div>

              {/* Quick Facts */}
              <div className="mt-8 pt-6 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-navy-850 border border-gold-500/20 text-gold-400">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-mono">EDUCATION</span>
                    <span className="text-sm font-medium text-white">B.Com Computer Applications (2025)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-navy-850 border border-gold-500/20 text-gold-400">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-mono">LOCATION</span>
                    <span className="text-sm font-medium text-white">{personalInfo.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pillars & Skill Focus */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-sm font-mono uppercase tracking-wider text-gold-400 px-1 flex items-center gap-2">
              <Zap className="w-4 h-4 text-gold-400" />
              <span>CORE ARCHITECTURAL DISCIPLINES</span>
            </h3>

            {pillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="anime-card rounded-xl p-5 group transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-navy-850 border border-gold-500/20 text-gold-400 group-hover:bg-gold-500/20 group-hover:border-gold-400/50 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-white group-hover:text-gold-300 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-sm text-slate-400 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Seeking Box */}
            <div className="rounded-xl p-5 bg-gradient-to-br from-navy-850 to-navy-900 border border-gold-500/30 shadow-gold-glow">
              <div className="flex items-center gap-2 text-gold-300 text-xs font-mono font-semibold uppercase tracking-wider mb-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>IMMEDIATE READINESS // OPEN TO WORK</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Open to full-time on-site, hybrid, or remote positions as an Entry-Level Java Developer, Full Stack Developer, or Software Engineer.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
