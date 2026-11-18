import React from 'react';
import { 
  ExternalLink, 
  Github, 
  Layers, 
  ShieldCheck, 
  Database, 
  Server, 
  Sparkles, 
  BookOpen, 
  Users, 
  Check, 
  ArrowUpRight,
  Terminal,
  Cpu
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  const [project1, project2] = projectsData;

  return (
    <section id="projects" className="py-24 bg-navy-950 relative overflow-hidden bg-anime-grid">
      {/* Anime Background Glows */}
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-gold-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-850/90 border border-gold-500/30 text-gold-300 text-xs font-mono uppercase tracking-widest mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>PROJECT ARCHIVES // FEATURED WORK</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Featured <span className="gold-gradient-text">Deployments</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-gold-400 via-gold-500 to-cyan-400 rounded-full mt-3 mb-4" />
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base font-light">
            Production-grade applications built from relational schema design to live cloud infrastructure.
          </p>
        </div>

        <div className="space-y-14">
          
          {/* ========================================================= */}
          {/* PROJECT 1: LITERARY SANCTUARY (FLAGSHIP FULL-STACK)      */}
          {/* ========================================================= */}
          <div className="anime-card rounded-2xl overflow-hidden border border-gold-500/30 group">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              {/* Left Column: Visual UI Mockup / Showcase */}
              <div className="lg:col-span-5 bg-navy-900/90 p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-800 relative">
                {/* Anime corner bracket */}
                <div className="absolute top-3 left-3 text-[10px] font-mono text-gold-400/60">
                  [ PROJ_01 // FULL-STACK ]
                </div>

                <div className="pt-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-gold-500/15 text-gold-300 text-xs font-semibold border border-gold-500/30 font-mono">
                      ★ S-RANK // FULL STACK
                    </span>
                    <span className="text-xs text-emerald-400 flex items-center gap-1.5 font-medium font-mono">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                      Live on Railway
                    </span>
                  </div>

                  {/* App Visual Preview Frame */}
                  <div className="rounded-xl bg-navy-950 border border-gold-500/25 p-4 shadow-2xl relative overflow-hidden group-hover:border-gold-400/50 transition-all">
                    {/* Fake Browser Toolbar */}
                    <div className="flex items-center justify-between border-b border-slate-800 pb-2.5 mb-3">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <div className="text-[10px] text-slate-300 font-mono bg-navy-900 px-3 py-0.5 rounded border border-slate-800 truncate max-w-[210px] text-center">
                        goodreads-project-production.up.railway.app
                      </div>
                    </div>

                    {/* Visual UI Elements */}
                    <div className="space-y-3">
                      {/* Search & Header Preview */}
                      <div className="flex items-center justify-between bg-navy-900/90 p-2.5 rounded-lg border border-slate-800">
                        <div className="flex items-center gap-2">
                          <BookOpen className="w-4 h-4 text-gold-400" />
                          <span className="text-xs font-bold text-white tracking-wide">
                            Literary Sanctuary
                          </span>
                        </div>
                        <div className="flex gap-1 text-[10px] font-mono">
                          <span className="px-2 py-0.5 rounded bg-gold-500/20 text-gold-300">
                            Shelves
                          </span>
                          <span className="px-2 py-0.5 rounded bg-navy-800 text-slate-300">
                            Goals
                          </span>
                        </div>
                      </div>

                      {/* Mock Book Grid Preview */}
                      <div className="grid grid-cols-3 gap-2">
                        <div className="p-2 rounded bg-navy-900 border border-slate-800 text-center space-y-1">
                          <div className="h-14 rounded bg-gradient-to-b from-slate-700 to-slate-800 flex items-center justify-center text-[10px] text-slate-200 font-medium p-1">
                            Clean Code
                          </div>
                          <span className="text-[9px] text-gold-400 block font-semibold">★★★★★</span>
                          <span className="text-[8px] text-emerald-400 block font-mono">Read</span>
                        </div>
                        <div className="p-2 rounded bg-navy-900 border border-gold-500/40 text-center space-y-1">
                          <div className="h-14 rounded bg-gradient-to-b from-navy-800 to-navy-700 flex items-center justify-center text-[10px] text-gold-300 font-medium p-1">
                            Spring Boot
                          </div>
                          <span className="text-[9px] text-gold-400 block font-semibold">★★★★☆</span>
                          <span className="text-[8px] text-amber-300 block font-mono">Reading</span>
                        </div>
                        <div className="p-2 rounded bg-navy-900 border border-slate-800 text-center space-y-1">
                          <div className="h-14 rounded bg-gradient-to-b from-slate-700 to-slate-800 flex items-center justify-center text-[10px] text-slate-200 font-medium p-1">
                            Algorithms
                          </div>
                          <span className="text-[9px] text-gold-400 block font-semibold">★★★★★</span>
                          <span className="text-[8px] text-blue-300 block font-mono">Want to Read</span>
                        </div>
                      </div>

                      {/* Reading Goal Progress Widget Preview */}
                      <div className="bg-navy-900/90 p-2.5 rounded-lg border border-slate-800">
                        <div className="flex justify-between text-[11px] mb-1">
                          <span className="text-slate-300 font-medium">2026 Reading Goal</span>
                          <span className="text-gold-400 font-semibold font-mono">18 / 25 Books</span>
                        </div>
                        <div className="w-full bg-navy-950 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-gradient-to-r from-gold-400 to-cyan-400 h-full w-[72%] rounded-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Architecture badge */}
                <div className="mt-6 pt-4 border-t border-slate-800">
                  <span className="text-[10px] text-slate-400 block uppercase tracking-wider mb-1 font-mono">
                    ARCHITECTURE // SYSTEM SPEC
                  </span>
                  <p className="text-xs font-mono text-gold-300/90">
                    {project1.architecture}
                  </p>
                </div>
              </div>

              {/* Right Column: Details, Features & Links */}
              <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div>
                  <div className="space-y-1">
                    <span className="text-xs uppercase tracking-wider text-gold-400 font-mono font-semibold">
                      {project1.category}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                      {project1.title}
                    </h3>
                    <p className="text-sm font-medium text-slate-300">
                      {project1.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed font-light mt-4">
                    {project1.description}
                  </p>

                  {/* Key Implementation Highlights */}
                  <div className="mt-5 space-y-2.5">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono">
                      CORE ARCHITECTURE & CAPABILITIES:
                    </h4>
                    <ul className="space-y-2">
                      {project1.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                          <Check className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="mt-6">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2.5 font-mono">
                      TECH ARSENAL:
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {project1.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md bg-navy-850 border border-gold-500/25 text-gold-300 text-xs font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Buttons (Clickable Links) */}
                <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center gap-3">
                  <a
                    href={project1.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 text-navy-950 font-bold text-xs uppercase tracking-wider hover:brightness-110 shadow-gold-glow transition-all"
                  >
                    <span>Launch Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={project1.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-navy-850 hover:bg-navy-800 border border-slate-700 hover:border-gold-500/40 text-slate-200 text-xs uppercase tracking-wider font-semibold transition-all"
                  >
                    <Github className="w-3.5 h-3.5 text-gold-400" />
                    <span>View GitHub Code</span>
                  </a>
                </div>

              </div>

            </div>
          </div>

          {/* ========================================================= */}
          {/* PROJECT 2: USER MANAGEMENT DASHBOARD (NOW WITH LIVE LINK) */}
          {/* ========================================================= */}
          <div className="anime-card rounded-2xl overflow-hidden border border-blue-500/30 group">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              {/* Left Column: UI Component Preview */}
              <div className="lg:col-span-5 bg-navy-900/90 p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-800 relative">
                <div className="absolute top-3 left-3 text-[10px] font-mono text-cyan-400/70">
                  [ PROJ_02 // REACT UI ]
                </div>

                <div className="pt-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-cyan-500/15 text-cyan-300 text-xs font-semibold border border-cyan-500/30 font-mono">
                      ★ FRONTEND DASHBOARD
                    </span>
                    <span className="text-xs text-emerald-400 flex items-center gap-1.5 font-medium font-mono">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                      Live on Vercel
                    </span>
                  </div>

                  {/* Dashboard Preview Box with Live Vercel Domain */}
                  <div className="rounded-xl bg-navy-950 border border-cyan-500/25 p-4 shadow-2xl relative overflow-hidden group-hover:border-cyan-400/50 transition-all">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-2.5 mb-3">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <div className="text-[10px] text-cyan-300/90 font-mono bg-navy-900 px-3 py-0.5 rounded border border-slate-800 truncate max-w-[220px] text-center">
                        user-management-dashboard-vert.vercel.app
                      </div>
                    </div>

                    {/* Mock Table */}
                    <div className="space-y-2 text-xs">
                      <div className="flex items-center justify-between bg-navy-900/90 p-2 rounded-lg border border-slate-800">
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-cyan-400" />
                          <span className="text-xs font-semibold text-white">Users Portal</span>
                        </div>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono">
                          + Add User
                        </span>
                      </div>

                      <div className="grid grid-cols-3 text-[10px] uppercase text-slate-400 font-semibold px-2 py-1 bg-navy-900 rounded font-mono">
                        <span>User</span>
                        <span>Role</span>
                        <span className="text-right">Actions</span>
                      </div>
                      <div className="grid grid-cols-3 items-center px-2 py-1.5 rounded bg-navy-900/70 border border-slate-800/80 text-[11px]">
                        <span className="text-white font-medium">Alex Morgan</span>
                        <span className="text-cyan-300 font-mono text-[10px]">Admin</span>
                        <span className="text-right text-gold-400 font-mono text-[10px]">Edit | Del</span>
                      </div>
                      <div className="grid grid-cols-3 items-center px-2 py-1.5 rounded bg-navy-900/70 border border-slate-800/80 text-[11px]">
                        <span className="text-white font-medium">Sarah Chen</span>
                        <span className="text-cyan-300 font-mono text-[10px]">Developer</span>
                        <span className="text-right text-gold-400 font-mono text-[10px]">Edit | Del</span>
                      </div>
                      <div className="grid grid-cols-3 items-center px-2 py-1.5 rounded bg-navy-900/70 border border-slate-800/80 text-[11px]">
                        <span className="text-white font-medium">David Ross</span>
                        <span className="text-cyan-300 font-mono text-[10px]">Analyst</span>
                        <span className="text-right text-gold-400 font-mono text-[10px]">Edit | Del</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800">
                  <span className="text-[10px] text-slate-400 block uppercase tracking-wider mb-1 font-mono">
                    ARCHITECTURE // SYSTEM SPEC
                  </span>
                  <p className="text-xs font-mono text-cyan-300">
                    {project2.architecture}
                  </p>
                </div>
              </div>

              {/* Right Column: Details & Live/GitHub Links */}
              <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div>
                  <div className="space-y-1">
                    <span className="text-xs uppercase tracking-wider text-cyan-400 font-mono font-semibold">
                      {project2.category}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                      {project2.title}
                    </h3>
                    <p className="text-sm font-medium text-slate-300">
                      {project2.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed font-light mt-4">
                    {project2.description}
                  </p>

                  <div className="mt-5 space-y-2.5">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono">
                      KEY CAPABILITIES:
                    </h4>
                    <ul className="space-y-2">
                      {project2.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                          <Check className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2.5 font-mono">
                      TECH ARSENAL:
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {project2.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md bg-navy-850 border border-cyan-500/25 text-cyan-200 text-xs font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Buttons: BOTH Live Demo & GitHub */}
                <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center gap-3">
                  <a
                    href={project2.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-500 text-navy-950 font-bold text-xs uppercase tracking-wider hover:brightness-110 shadow-[0_0_20px_rgba(56,189,248,0.35)] transition-all"
                  >
                    <span>Launch Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={project2.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-navy-850 hover:bg-navy-800 border border-slate-700 hover:border-cyan-500/40 text-slate-200 text-xs uppercase tracking-wider font-semibold transition-all"
                  >
                    <Github className="w-3.5 h-3.5 text-cyan-400" />
                    <span>View GitHub Repositories</span>
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
