import React, { useState } from 'react';
import { 
  ArrowRight, 
  Code2, 
  Database, 
  ExternalLink, 
  Github, 
  Linkedin, 
  Instagram, 
  Twitter, 
  Layers, 
  Sparkles, 
  Terminal,
  Zap,
  Flame,
  Award,
  CheckCircle2,
  ShieldCheck,
  UserCheck,
  ChevronLeft,
  ChevronRight,
  SlidersHorizontal,
  Image as ImageIcon
} from 'lucide-react';
import { personalInfo, projectsData } from '../data/portfolioData';

export default function Hero() {
  const [activeTab, setActiveTab] = useState('portrait'); // 'portrait' | 'code'
  const [photoIndex, setPhotoIndex] = useState(0); // 0 = Executive Black, 1 = Crimson Blazer
  const [activeFilter, setActiveFilter] = useState('gold'); // 'natural' | 'gold' | 'cyber' | 'noir'
  
  const featuredProject = projectsData[0];

  const photos = [
    {
      src: '/profile2.jpg',
      title: 'Executive Studio Portrait',
      edition: 'Black Formal Suit',
      tag: 'Studio Headshot',
      badge: 'PROD ARCHITECT'
    },
    {
      src: '/profile1.jpg',
      title: 'Outdoor Crimson Edition',
      edition: 'Black Blazer & Silk Red',
      tag: 'Classic Portrait',
      badge: 'CREATIVE ENGINEER'
    }
  ];

  const filters = [
    { id: 'natural', label: 'Natural', class: 'brightness-105 contrast-105' },
    { id: 'gold', label: 'Gold Aura', class: 'brightness-110 contrast-110 saturate-125 sepia-[0.12]' },
    { id: 'cyber', label: 'Cyber Spirit', class: 'brightness-110 contrast-115 saturate-120' },
    { id: 'noir', label: 'Noir', class: 'grayscale contrast-125 brightness-105' },
  ];

  const currentPhoto = photos[photoIndex];
  const currentFilterObj = filters.find(f => f.id === activeFilter) || filters[0];

  const nextPhoto = () => {
    setPhotoIndex((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setPhotoIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-anime-grid">
      {/* Decorative Anime Aura Circles & Rotating Rune Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gold-500/10 rounded-full blur-[160px] pointer-events-none animate-pulse-aura" />
      <div className="absolute top-1/3 left-10 w-[350px] h-[350px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-purple-500/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Rotating Background Anime Tech Ring */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[720px] h-[720px] rounded-full border border-gold-500/10 border-dashed pointer-events-none animate-rune-spin hidden lg:block opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text, Status, & Social Dock */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-850/90 border border-gold-500/30 text-gold-300 text-xs font-mono tracking-wide shadow-gold-glow">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
              <span className="text-emerald-400 font-semibold font-mono">STATUS: ACTIVE</span>
              <span className="text-slate-300">• SEEKING SOFTWARE DEVELOPER ROLES</span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-gold-400">
                <Zap className="w-3.5 h-3.5 text-gold-400" />
                <span>JAVA FULL STACK DEVELOPER</span>
              </div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white leading-tight">
                {personalInfo.name}
              </h1>
              <h2 className="text-2xl sm:text-3xl font-display font-bold gold-gradient-text flex items-center gap-3">
                <span>{personalInfo.role}</span>
              </h2>
            </div>

            {/* Bio text */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-light">
              Architecting resilient backend microservices and intuitive reactive interfaces with{' '}
              <strong className="text-white font-medium">Java, Spring Boot, React.js, and MySQL</strong>.
              Creator of <span className="text-gold-300 font-medium">Literary Sanctuary</span> and active holder of{' '}
              <a href={personalInfo.credly} target="_blank" rel="noopener noreferrer" className="text-gold-400 hover:underline font-medium inline-flex items-center gap-1">
                <span>AWS Educate Badges</span>
                <ExternalLink className="w-3 h-3 inline" />
              </a>.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 text-navy-950 font-bold text-sm tracking-wide shadow-gold-glow hover:shadow-gold-glow-lg hover:brightness-110 transition-all duration-200"
              >
                <span>View Deployments</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-navy-850/80 hover:bg-navy-800 text-slate-200 hover:text-white border border-gold-500/30 hover:border-gold-400/60 font-semibold text-sm tracking-wide transition-all duration-200"
              >
                <span>Contact Me</span>
              </a>

              <a
                href={personalInfo.credly}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl bg-gradient-to-r from-amber-500/15 to-orange-500/15 hover:from-amber-500/25 hover:to-orange-500/25 text-amber-300 border border-amber-500/40 text-xs font-mono font-semibold tracking-wide transition-all shadow-sm"
              >
                <Award className="w-4 h-4 text-amber-400" />
                <span>Credly Badges ↗</span>
              </a>
            </div>

            {/* Social Media Dock (GitHub, LinkedIn, Instagram, Twitter/X) */}
            <div className="pt-2">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2.5">
                SOCIAL TRANSMISSION CHANNELS:
              </span>
              <div className="flex flex-wrap items-center gap-2.5">
                {/* GitHub */}
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-navy-850/90 hover:bg-navy-800 text-slate-300 hover:text-white border border-slate-700/60 hover:border-gold-500/40 text-xs font-mono font-medium transition-all group"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4 text-slate-400 group-hover:text-gold-400 transition-colors" />
                  <span>GitHub</span>
                </a>

                {/* LinkedIn */}
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-navy-850/90 hover:bg-navy-800 text-slate-300 hover:text-white border border-slate-700/60 hover:border-gold-500/40 text-xs font-mono font-medium transition-all group"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4 text-gold-400 group-hover:text-gold-300 transition-colors" />
                  <span>LinkedIn</span>
                </a>

                {/* Instagram */}
                <a
                  href={personalInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-navy-850/90 hover:bg-navy-800 text-slate-300 hover:text-pink-300 border border-slate-700/60 hover:border-pink-500/50 text-xs font-mono font-medium transition-all group shadow-sm hover:shadow-[0_0_15px_rgba(244,114,182,0.3)]"
                  title="Instagram Profile"
                >
                  <Instagram className="w-4 h-4 text-pink-400 group-hover:scale-110 transition-transform" />
                  <span>Instagram</span>
                </a>

                {/* Twitter / X */}
                <a
                  href={personalInfo.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-navy-850/90 hover:bg-navy-800 text-slate-300 hover:text-sky-300 border border-slate-700/60 hover:border-sky-500/50 text-xs font-mono font-medium transition-all group shadow-sm hover:shadow-[0_0_15px_rgba(56,189,248,0.3)]"
                  title="Twitter / X Profile"
                >
                  <Twitter className="w-4 h-4 text-sky-400 group-hover:scale-110 transition-transform" />
                  <span>X (Twitter)</span>
                </a>
              </div>
            </div>

            {/* Quick Tech Highlights Badge Row */}
            <div className="pt-3 border-t border-slate-800/80 flex flex-wrap items-center gap-2 text-xs text-slate-400 font-mono">
              <span className="text-gold-400 font-semibold">[ CORE STACK ]:</span>
              <span className="px-2.5 py-1 rounded bg-navy-850 border border-slate-800 text-slate-300">Java</span>
              <span className="px-2.5 py-1 rounded bg-navy-850 border border-slate-800 text-slate-300">Spring Boot</span>
              <span className="px-2.5 py-1 rounded bg-navy-850 border border-slate-800 text-slate-300">Spring Security</span>
              <span className="px-2.5 py-1 rounded bg-navy-850 border border-slate-800 text-slate-300">React.js</span>
              <span className="px-2.5 py-1 rounded bg-navy-850 border border-slate-800 text-slate-300">MySQL</span>
              <span className="px-2.5 py-1 rounded bg-navy-850 border border-slate-800 text-slate-300">REST APIs</span>
            </div>
          </div>

          {/* Right Column: Premium Anime Profile Presentation & Code HUD */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Main Showcase Card with Full-Length Profile Slider */}
            <div className="anime-card rounded-2xl p-5 sm:p-6 relative overflow-hidden backdrop-blur-2xl hud-corner">
              
              {/* Header Tabs: Profile (renamed from Shinobi Profile) & Spring Boot Code */}
              <div className="flex items-center justify-between border-b border-gold-500/20 pb-3.5 mb-4">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveTab('portrait')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all flex items-center gap-1.5 ${
                      activeTab === 'portrait'
                        ? 'bg-gold-500 text-navy-950 shadow-gold-glow'
                        : 'bg-navy-850 text-slate-300 hover:text-gold-300 border border-slate-800'
                    }`}
                  >
                    <UserCheck className="w-3.5 h-3.5" />
                    <span>Profile</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('code')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all flex items-center gap-1.5 ${
                      activeTab === 'code'
                        ? 'bg-gold-500 text-navy-950 shadow-gold-glow'
                        : 'bg-navy-850 text-slate-300 hover:text-gold-300 border border-slate-800'
                    }`}
                  >
                    <Terminal className="w-3.5 h-3.5" />
                    <span>Spring Boot API</span>
                  </button>
                </div>

                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-gold-500/15 text-gold-300 border border-gold-500/30">
                  PHOTO {photoIndex + 1} / {photos.length}
                </span>
              </div>

              {/* View 1: Full-Length Profile Slider with Interactive Filters */}
              {activeTab === 'portrait' && (
                <div className="relative group animate-fadeIn space-y-3">
                  
                  {/* Sliding Filter Bar */}
                  <div className="flex items-center justify-between bg-navy-900/90 p-2 rounded-xl border border-slate-800 text-xs font-mono">
                    <span className="text-[10px] text-gold-400 flex items-center gap-1 uppercase font-semibold pl-1">
                      <SlidersHorizontal className="w-3 h-3 text-gold-400" />
                      <span>Filter:</span>
                    </span>
                    <div className="flex items-center gap-1">
                      {filters.map((f) => (
                        <button
                          key={f.id}
                          onClick={() => setActiveFilter(f.id)}
                          className={`px-2 py-0.5 rounded-md text-[10px] transition-all ${
                            activeFilter === f.id
                              ? 'bg-gold-500 text-navy-950 font-bold shadow-sm'
                              : 'text-slate-400 hover:text-white hover:bg-navy-800'
                          }`}
                        >
                          {f.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Portrait Container - Full Length Display Without Cropping */}
                  <div className="relative rounded-2xl overflow-hidden border-2 border-gold-500/40 shadow-2xl bg-navy-950">
                    
                    {/* Glowing Top Aura Accent */}
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent z-20" />
                    
                    {/* Full-Length Image Frame with Object Contain */}
                    <div className="relative h-[440px] sm:h-[490px] w-full flex items-center justify-center bg-navy-950/95 overflow-hidden">
                      <img
                        key={currentPhoto.src + activeFilter}
                        src={currentPhoto.src}
                        alt={`Manikeshwar Lagishetti - ${currentPhoto.title}`}
                        className={`h-full w-auto max-h-[440px] sm:max-h-[490px] object-contain mx-auto filter transition-all duration-500 ${currentFilterObj.class}`}
                      />
                      
                      {/* Subtle Bottom Ambient Gradient */}
                      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-navy-950 via-navy-950/60 to-transparent pointer-events-none" />
                    </div>

                    {/* Floating HUD Chip Top-Right */}
                    <div className="absolute top-3 right-3 z-20">
                      <div className="px-2.5 py-1 rounded-lg bg-navy-900/90 backdrop-blur-md border border-gold-500/50 text-gold-300 text-[11px] font-mono shadow-gold-glow flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3 text-gold-400" />
                        <span className="font-bold">{currentPhoto.badge}</span>
                      </div>
                    </div>

                    {/* Floating HUD Chip Top-Left */}
                    <div className="absolute top-3 left-3 z-20">
                      <div className="px-2.5 py-1 rounded-lg bg-navy-900/90 backdrop-blur-md border border-emerald-500/40 text-emerald-400 text-[10px] font-mono flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                        <span>{currentPhoto.tag}</span>
                      </div>
                    </div>

                    {/* Left & Right Slider Arrow Buttons */}
                    <button
                      onClick={prevPhoto}
                      className="absolute left-2.5 top-1/2 -translate-y-1/2 z-30 w-9 h-9 rounded-full bg-navy-900/80 hover:bg-gold-500 text-slate-200 hover:text-navy-950 border border-gold-500/30 flex items-center justify-center transition-all shadow-lg hover:scale-110 active:scale-95"
                      aria-label="Previous Photo"
                      title="Previous Photo"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>

                    <button
                      onClick={nextPhoto}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 z-30 w-9 h-9 rounded-full bg-navy-900/80 hover:bg-gold-500 text-slate-200 hover:text-navy-950 border border-gold-500/30 flex items-center justify-center transition-all shadow-lg hover:scale-110 active:scale-95"
                      aria-label="Next Photo"
                      title="Next Photo"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>

                    {/* Bottom Floating Info Overlay */}
                    <div className="absolute bottom-3 inset-x-3 z-20 bg-navy-900/90 backdrop-blur-xl p-3 rounded-xl border border-gold-500/30 shadow-xl">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-[10px] font-mono text-gold-400 tracking-wider uppercase block">
                            DEV IDENTIFIER // {currentPhoto.edition}
                          </span>
                          <h4 className="text-sm sm:text-base font-display font-bold text-white tracking-wide">
                            {personalInfo.name}
                          </h4>
                        </div>

                        {/* Slider Dot Indicators */}
                        <div className="flex items-center gap-1.5">
                          {photos.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={() => setPhotoIndex(idx)}
                              className={`h-2 rounded-full transition-all ${
                                photoIndex === idx
                                  ? 'w-6 bg-gold-400 shadow-gold-glow'
                                  : 'w-2 bg-slate-700 hover:bg-slate-500'
                              }`}
                              aria-label={`View photo ${idx + 1}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Photo Switcher Selector Buttons */}
                  <div className="grid grid-cols-2 gap-2 pt-1 font-mono text-xs">
                    <button
                      onClick={() => setPhotoIndex(0)}
                      className={`p-2 rounded-xl border transition-all text-left flex items-center gap-2 ${
                        photoIndex === 0
                          ? 'border-gold-500 bg-navy-850/90 text-gold-300 shadow-gold-glow'
                          : 'border-slate-800 bg-navy-900/60 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <span className="w-2 h-2 rounded-full bg-gold-400" />
                      <div>
                        <span className="font-bold block text-white text-[11px]">Photo 1: Studio Black</span>
                        <span className="text-[9px] text-slate-400 block">Formal Headshot</span>
                      </div>
                    </button>

                    <button
                      onClick={() => setPhotoIndex(1)}
                      className={`p-2 rounded-xl border transition-all text-left flex items-center gap-2 ${
                        photoIndex === 1
                          ? 'border-gold-500 bg-navy-850/90 text-gold-300 shadow-gold-glow'
                          : 'border-slate-800 bg-navy-900/60 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <span className="w-2 h-2 rounded-full bg-rose-400" />
                      <div>
                        <span className="font-bold block text-white text-[11px]">Photo 2: Crimson Blazer</span>
                        <span className="text-[9px] text-slate-400 block">Outdoor Edition</span>
                      </div>
                    </button>
                  </div>
                </div>
              )}

              {/* View 2: Spring Boot Architecture Code Snippet */}
              {activeTab === 'code' && (
                <div className="animate-fadeIn">
                  <div className="font-mono text-xs leading-relaxed text-slate-300 space-y-1.5 overflow-x-auto pb-2 min-h-[350px]">
                    <p className="text-slate-500">// Modern Spring Boot & Security Configuration</p>
                    <p>
                      <span className="text-gold-400">@RestController</span>
                    </p>
                    <p>
                      <span className="text-gold-400">@RequestMapping</span>
                      <span className="text-emerald-300">("/api/v1/sanctuary")</span>
                    </p>
                    <p>
                      <span className="text-purple-400">public class</span>{' '}
                      <span className="text-cyan-300 font-semibold">BookController</span> {'{'}
                    </p>
                    <div className="pl-4 space-y-1 text-slate-300 border-l border-gold-500/30 my-1">
                      <p className="text-slate-500">// JWT Authenticated shelf & reviews</p>
                      <p>
                        <span className="text-gold-400">@GetMapping</span>
                        <span className="text-emerald-300">("/shelves/{'{userId}'}")</span>
                      </p>
                      <p>
                        <span className="text-purple-400">public</span>{' '}
                        <span className="text-cyan-300">ResponseEntity</span>
                        <span className="text-slate-400">&lt;UserShelvesDTO&gt;</span>{' '}
                        <span className="text-amber-200">getShelves</span>(...) {'{'}
                      </p>
                      <p className="pl-4 text-emerald-300/90">
                        return ResponseEntity.ok(shelfService.loadUserBooks());
                      </p>
                      <p>{'}'}</p>
                    </div>
                    <p>{'}'}</p>
                  </div>
                </div>
              )}

              {/* Live Project Snapshot Callout */}
              <div className="mt-4 pt-4 border-t border-gold-500/20 bg-navy-950/80 rounded-xl p-4 border border-slate-800">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-gold-400 font-mono font-semibold">
                      FLAGSHIP CLOUD DEPLOYMENT
                    </span>
                    <h4 className="text-sm font-bold text-white mt-0.5">
                      Literary Sanctuary
                    </h4>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                      Full-stack book discovery, custom shelves & JWT authentication.
                    </p>
                  </div>
                  <a
                    href={featuredProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 p-2.5 rounded-xl bg-gold-500/20 text-gold-300 hover:bg-gold-500 hover:text-navy-950 border border-gold-500/40 transition-all duration-200 shadow-gold-glow"
                    title="Open Live Application"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-800 font-mono">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
                    Railway Production
                  </span>
                  <a
                    href={featuredProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gold-300 transition-colors flex items-center gap-1"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>View Repository</span>
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
