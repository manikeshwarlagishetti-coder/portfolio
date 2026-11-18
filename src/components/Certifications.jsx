import React from 'react';
import { 
  Award, 
  Cloud, 
  CheckCircle, 
  Sparkles, 
  BookOpen, 
  Layers, 
  ExternalLink,
  ShieldCheck,
  Cpu,
  Database,
  HardDrive,
  Zap,
  Activity
} from 'lucide-react';
import { certificationsData, personalInfo } from '../data/portfolioData';

export default function Certifications() {
  const [nxtwaveCert, awsCert] = certificationsData;

  const awsBadges = [
    {
      title: "AWS Educate Getting Started: Compute",
      domain: "EC2, Elastic Compute & Virtualization",
      icon: Cpu,
      color: "from-amber-500/20 to-orange-500/20 text-amber-400 border-amber-500/40"
    },
    {
      title: "AWS Educate Getting Started: Databases",
      domain: "Amazon RDS, DynamoDB & Relational Cloud Data",
      icon: Database,
      color: "from-blue-500/20 to-cyan-500/20 text-cyan-400 border-cyan-500/40"
    },
    {
      title: "AWS Educate Getting Started: Storage",
      domain: "Amazon S3, EBS & Object/Block Persistence",
      icon: HardDrive,
      color: "from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/40"
    },
    {
      title: "AWS Educate Getting Started: Serverless",
      domain: "AWS Lambda, API Gateway & Microservices",
      icon: Zap,
      color: "from-purple-500/20 to-pink-500/20 text-purple-400 border-purple-500/40"
    },
    {
      title: "AWS Educate Getting Started: Cloud Operations",
      domain: "CloudWatch, Monitoring, Security & IAM",
      icon: Activity,
      color: "from-rose-500/20 to-amber-500/20 text-rose-400 border-rose-500/40"
    }
  ];

  return (
    <section id="certifications" className="py-24 bg-navy-950 relative overflow-hidden bg-anime-grid">
      {/* Decorative Aura Glows */}
      <div className="absolute top-1/3 left-0 w-[450px] h-[450px] bg-amber-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-850/90 border border-gold-500/30 text-gold-300 text-xs font-mono uppercase tracking-widest mb-3 shadow-gold-glow">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>CREDENTIAL VERIFICATION // CERTIFIED</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Training & <span className="gold-gradient-text">Live Credly Badges</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-gold-400 via-gold-500 to-cyan-400 rounded-full mt-3 mb-4" />
          <p className="text-slate-400 max-w-xl text-sm sm:text-base font-light">
            Verified technical training in Full Stack Software Engineering and officially authenticated AWS digital badges.
          </p>
        </div>

        {/* ========================================================= */}
        {/* AWS EDUCATE LIVE CREDLY BADGES SHOWCASE                   */}
        {/* ========================================================= */}
        <div className="mb-14">
          <div className="anime-card rounded-2xl p-6 sm:p-8 border border-amber-500/30 shadow-2xl relative overflow-hidden hud-corner">
            
            {/* Credly Banner Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-800 pb-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shadow-gold-glow flex-shrink-0">
                  <Cloud className="w-7 h-7" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/15 text-amber-300 border border-amber-500/30 uppercase font-semibold">
                      OFFICIAL AWS DIGITAL CREDENTIALS
                    </span>
                    <span className="text-xs text-emerald-400 flex items-center gap-1 font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      Live On Credly
                    </span>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mt-1">
                    Amazon Web Services (AWS) Educate Badges
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-light mt-0.5">
                    Authenticated digital credentials verifying foundational competency across key AWS architecture domains.
                  </p>
                </div>
              </div>

              {/* Direct Link to Credly Profile */}
              <a
                href={personalInfo.credly}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 text-navy-950 font-bold text-xs uppercase tracking-wider hover:brightness-110 shadow-gold-glow transition-all flex-shrink-0 font-mono"
              >
                <span>Verify All Badges on Credly</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Individual AWS Badges Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {awsBadges.map((badge, bIdx) => {
                const Icon = badge.icon;
                return (
                  <a
                    key={bIdx}
                    href={personalInfo.credly}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl bg-navy-900/90 border border-slate-800 hover:border-amber-500/50 hover:bg-navy-850 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden shadow-sm hover:shadow-gold-glow"
                  >
                    {/* Badge Icon Shield */}
                    <div>
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${badge.color} border flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="text-xs font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                        {badge.title.replace("AWS Educate ", "")}
                      </h4>
                      <p className="text-[10px] text-slate-400 font-light mt-1.5 leading-relaxed">
                        {badge.domain}
                      </p>
                    </div>

                    {/* Bottom Status */}
                    <div className="mt-4 pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono">
                      <span className="text-amber-400/90 flex items-center gap-1">
                        <CheckCircle className="w-3 h-3 text-emerald-400" />
                        <span>Issued</span>
                      </span>
                      <span className="text-slate-500 group-hover:text-amber-300 transition-colors flex items-center gap-0.5">
                        <span>Credly</span>
                        <ExternalLink className="w-2.5 h-2.5" />
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Credly Profile Footer Callout */}
            <div className="mt-6 pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Issuer: Amazon Web Services Training and Certification (Verified via Credly)</span>
              </span>
              <a
                href={personalInfo.credly}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:underline flex items-center gap-1"
              >
                <span>{personalInfo.credlyDisplay}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

          </div>
        </div>

        {/* ========================================================= */}
        {/* NXTWAVE JAVA FULL STACK DEVELOPER TRAINING               */}
        {/* ========================================================= */}
        <div className="anime-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between hud-corner">
          <div>
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="p-3 rounded-xl bg-navy-850 border border-gold-500/25 text-gold-400">
                <Award className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-gold-500/15 text-gold-300 border border-gold-500/25">
                {nxtwaveCert.category}
              </span>
            </div>

            <h3 className="text-xl font-display font-bold text-white">
              {nxtwaveCert.title}
            </h3>
            <p className="text-xs font-mono font-semibold text-gold-400/90 mt-1 uppercase tracking-wide">
              {nxtwaveCert.organization}
            </p>

            <p className="text-sm text-slate-300 mt-4 leading-relaxed font-light">
              {nxtwaveCert.description}
            </p>

            {/* Topics Completed */}
            <div className="mt-6">
              <h4 className="text-xs uppercase tracking-wider text-slate-400 font-mono font-semibold mb-3">
                CORE MODULES & PROJECTS COMPLETED:
              </h4>
              <div className="flex flex-wrap gap-2">
                {nxtwaveCert.topics.map((topic, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-3 py-1.5 rounded-lg bg-navy-900 border border-slate-800 text-slate-200 text-xs font-mono font-medium flex items-center gap-1.5 hover:border-gold-500/30 transition-colors"
                  >
                    <CheckCircle className="w-3 h-3 text-gold-400 flex-shrink-0" />
                    <span>{topic}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
            <span className="text-slate-400">STATUS</span>
            <span className="text-emerald-400 font-medium flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              COMPLETED & VERIFIED
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
