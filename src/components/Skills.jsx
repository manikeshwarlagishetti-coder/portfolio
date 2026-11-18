import React, { useState } from 'react';
import { 
  Code2, 
  Server, 
  Database, 
  Wrench, 
  CheckCircle, 
  Cpu, 
  ShieldCheck, 
  Layers, 
  FileCode, 
  GitBranch,
  Sparkles
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'backend', label: 'Backend (Java & Spring)', icon: Server },
    { id: 'frontend', label: 'Frontend (React & UI)', icon: Code2 },
    { id: 'database', label: 'Database & SQL', icon: Database },
    { id: 'tools', label: 'Tools & DevOps', icon: Wrench },
  ];

  const categoryCards = [
    {
      id: 'backend',
      title: 'Backend & Java Ecosystem',
      icon: Server,
      accent: 'border-gold-500/30',
      description: 'Building secure, scalable, and decoupled backend services and business logic.',
      skills: skillsData.backend
    },
    {
      id: 'frontend',
      title: 'Frontend & UI Engineering',
      icon: Code2,
      accent: 'border-cyan-500/30',
      description: 'Developing reactive single-page applications with centralized state management.',
      skills: skillsData.frontend
    },
    {
      id: 'database',
      title: 'Database & Data Persistence',
      icon: Database,
      accent: 'border-emerald-500/30',
      description: 'Relational data modeling, schema normalization, and transactional queries.',
      skills: skillsData.database
    },
    {
      id: 'tools',
      title: 'Development Tools & Build',
      icon: Wrench,
      accent: 'border-purple-500/30',
      description: 'Version control, dependency management, and build automation.',
      skills: skillsData.tools
    }
  ];

  const filteredCards = activeTab === 'all' 
    ? categoryCards 
    : categoryCards.filter(c => c.id === activeTab);

  return (
    <section id="skills" className="py-24 bg-navy-950/70 relative overflow-hidden bg-anime-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-850/90 border border-gold-500/30 text-gold-300 text-xs font-mono uppercase tracking-widest mb-3 shadow-gold-glow">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>TECHNICAL ARSENAL // SKILLS MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Technical <span className="gold-gradient-text">Mastery</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-gold-400 via-gold-500 to-cyan-400 rounded-full mt-3 mb-4" />
          <p className="text-slate-400 max-w-xl text-sm sm:text-base font-light">
            Core stack technologies practiced and applied in production-deployed full stack projects.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-medium transition-all duration-200 flex items-center gap-2 ${
                  isActive
                    ? 'bg-gradient-to-r from-gold-500 to-gold-400 text-navy-950 font-bold shadow-gold-glow'
                    : 'bg-navy-850/80 text-slate-300 hover:text-gold-300 hover:bg-navy-800 border border-slate-800'
                }`}
              >
                {tab.icon && <tab.icon className="w-3.5 h-3.5" />}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Grouped Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCards.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                className="anime-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between hud-corner"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-5">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-lg bg-navy-850 border border-gold-500/25 text-gold-400 shadow-sm">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-display font-bold text-white">
                          {category.title}
                        </h3>
                        <p className="text-xs text-slate-400 mt-0.5">
                          {category.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Skills Badges with Role Description */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {category.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className={`p-3 rounded-xl bg-navy-900/90 border transition-all duration-200 flex flex-col justify-between ${
                          skill.highlight
                            ? 'border-gold-500/35 hover:border-gold-400 hover:bg-navy-850/90'
                            : 'border-slate-800 hover:border-slate-700 hover:bg-navy-850/60'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-sm text-white font-sans">
                            {skill.name}
                          </span>
                          {skill.highlight && (
                            <span className="w-1.5 h-1.5 rounded-full bg-gold-400 shadow-[0_0_8px_#d4af37]" />
                          )}
                        </div>
                        <span className="text-[11px] text-slate-400 font-mono mt-1">
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Verification Note */}
                <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs text-slate-400 font-mono">
                  <CheckCircle className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
                  <span>Applied hands-on in full-stack project implementations</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
