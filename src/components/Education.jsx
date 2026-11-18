import React from 'react';
import { GraduationCap, Award, Calendar, MapPin, CheckCircle2, Sparkles } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-24 bg-navy-950/80 relative overflow-hidden bg-anime-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-850/90 border border-gold-500/30 text-gold-300 text-xs font-mono uppercase tracking-widest mb-3 shadow-gold-glow">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>ACADEMIC FOUNDATION // EDUCATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Formal <span className="gold-gradient-text">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-gold-400 via-gold-500 to-cyan-400 rounded-full mt-3 mb-4" />
        </div>

        <div className="max-w-3xl mx-auto">
          {educationData.map((item, idx) => (
            <div
              key={idx}
              className="anime-card rounded-2xl p-6 sm:p-8 relative overflow-hidden hud-corner"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-slate-800 pb-5 mb-5">
                <div className="space-y-1">
                  <span className="text-xs uppercase tracking-wider text-gold-400 font-mono font-semibold block">
                    UNDERGRADUATE DEGREE // 2025 GRADUATION
                  </span>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                    {item.degree}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 pt-1 font-medium font-sans">
                    <span className="text-gold-300">{item.institution}</span>
                    <span className="flex items-center gap-1 text-slate-400 font-mono">
                      <MapPin className="w-3.5 h-3.5 text-gold-400" />
                      {item.location}
                    </span>
                  </div>
                </div>

                <div className="flex sm:flex-col items-center sm:items-end justify-between gap-2">
                  <span className="px-3 py-1 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-300 font-bold text-sm font-mono shadow-sm">
                    {item.cgpa}
                  </span>
                  <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.period}
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs uppercase tracking-wider text-slate-400 font-mono font-semibold mb-2">
                  CURRICULUM & KEY COMPETENCIES:
                </h4>
                {item.highlights.map((highlight, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 font-light">
                    <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
