import React, { useState } from 'react';
import { 
  Mail, 
  Linkedin, 
  Github, 
  Instagram, 
  Twitter, 
  MapPin, 
  Phone,
  Send, 
  Copy, 
  Check, 
  ExternalLink,
  MessageSquare,
  Sparkles,
  Zap,
  CheckCircle2
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copiedField, setCopiedField] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleCopy = (text, fieldName, e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-navy-950/90 relative overflow-hidden bg-anime-grid">
      {/* Decorative Anime Aura Glows */}
      <div className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-gold-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-850/90 border border-gold-500/30 text-gold-300 text-xs font-mono uppercase tracking-widest mb-3 shadow-gold-glow">
            <Zap className="w-3.5 h-3.5 text-gold-400" />
            <span>TRANSMISSION LINK // CONTACT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Connect <span className="gold-gradient-text">With Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-gold-400 via-gold-500 to-cyan-400 rounded-full mt-3 mb-4" />
          <p className="text-slate-400 max-w-xl text-sm sm:text-base font-light">
            I am actively seeking Entry-Level Software Developer & Java Developer opportunities.
            Reach out directly across any platform below!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact & Social Media Grid */}
          <div className="lg:col-span-5 space-y-3.5">
            
            {/* Status Banner */}
            <div className="p-4 rounded-xl bg-navy-900 border border-emerald-500/30 flex items-start gap-3 shadow-sm">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <div className="text-xs text-slate-300 leading-relaxed">
                <strong className="text-white font-medium block mb-0.5 font-mono">STATUS: IMMEDIATE HIRE AVAILABLE</strong>
                Based in Hyderabad. Available for on-site, hybrid, and remote software engineering roles across India.
              </div>
            </div>

            {/* Email Card (Clickable mailto + Copy) */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="anime-card rounded-xl p-4 flex items-center justify-between group block transition-all"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="p-2.5 rounded-lg bg-navy-850 border border-gold-500/25 text-gold-400 group-hover:bg-gold-500/20 group-hover:border-gold-400/50 transition-colors flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-mono">
                    Direct Email
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-gold-300 transition-colors truncate block">
                    {personalInfo.email}
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={(e) => handleCopy(personalInfo.email, 'email', e)}
                className="p-1.5 rounded-lg bg-navy-850 border border-slate-700/60 text-slate-300 hover:text-gold-300 hover:border-gold-500/30 transition-all flex-shrink-0 ml-2"
                title="Copy email to clipboard"
              >
                {copiedField === 'email' ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </a>

            {/* Phone Card (Clickable call + Copy) */}
            <a
              href={`tel:${personalInfo.rawPhone || personalInfo.phone}`}
              className="anime-card rounded-xl p-4 flex items-center justify-between group block transition-all"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="p-2.5 rounded-lg bg-navy-850 border border-gold-500/25 text-gold-400 group-hover:bg-gold-500/20 group-hover:border-gold-400/50 transition-colors flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-mono">
                    Phone / WhatsApp
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-gold-300 transition-colors block">
                    {personalInfo.phone}
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={(e) => handleCopy(personalInfo.phone, 'phone', e)}
                className="p-1.5 rounded-lg bg-navy-850 border border-slate-700/60 text-slate-300 hover:text-gold-300 hover:border-gold-500/30 transition-all flex-shrink-0 ml-2"
                title="Copy phone to clipboard"
              >
                {copiedField === 'phone' ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </a>

            {/* LinkedIn Card */}
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="anime-card rounded-xl p-4 flex items-center justify-between group block transition-all"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="p-2.5 rounded-lg bg-navy-850 border border-gold-500/25 text-gold-400 group-hover:bg-gold-500/20 group-hover:border-gold-400/50 transition-colors flex-shrink-0">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-mono">
                    Professional Network
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-gold-300 transition-colors truncate block">
                    {personalInfo.linkedinDisplay}
                  </span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-gold-400 transition-colors flex-shrink-0 ml-2" />
            </a>

            {/* GitHub Card */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="anime-card rounded-xl p-4 flex items-center justify-between group block transition-all"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="p-2.5 rounded-lg bg-navy-850 border border-slate-700 text-slate-100 group-hover:border-gold-500/40 group-hover:text-gold-300 transition-colors flex-shrink-0">
                  <Github className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-mono">
                    Code Repositories
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-gold-300 transition-colors truncate block">
                    {personalInfo.githubDisplay}
                  </span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-gold-400 transition-colors flex-shrink-0 ml-2" />
            </a>

            {/* Instagram Card (Requested with icon & link) */}
            <a
              href={personalInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="anime-card rounded-xl p-4 flex items-center justify-between group block transition-all hover:border-pink-500/40"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="p-2.5 rounded-lg bg-navy-850 border border-pink-500/30 text-pink-400 group-hover:bg-pink-500/20 group-hover:border-pink-400/60 transition-colors flex-shrink-0 shadow-[0_0_12px_rgba(244,114,182,0.2)]">
                  <Instagram className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-mono">
                    Instagram Profile
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-pink-300 transition-colors truncate block font-mono">
                    {personalInfo.instagramDisplay}
                  </span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-pink-400 transition-colors flex-shrink-0 ml-2" />
            </a>

            {/* X / Twitter Card (Requested with icon & link) */}
            <a
              href={personalInfo.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="anime-card rounded-xl p-4 flex items-center justify-between group block transition-all hover:border-sky-500/40"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="p-2.5 rounded-lg bg-navy-850 border border-sky-500/30 text-sky-400 group-hover:bg-sky-500/20 group-hover:border-sky-400/60 transition-colors flex-shrink-0 shadow-[0_0_12px_rgba(56,189,248,0.2)]">
                  <Twitter className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-mono">
                    X (Twitter) Channel
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-sky-300 transition-colors truncate block font-mono">
                    {personalInfo.twitterDisplay}
                  </span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-sky-400 transition-colors flex-shrink-0 ml-2" />
            </a>

            {/* Location Card */}
            <div className="anime-card rounded-xl p-4 flex items-center gap-3.5">
              <div className="p-2.5 rounded-lg bg-navy-850 border border-gold-500/20 text-gold-400 flex-shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-mono">
                  Current Headquarters
                </span>
                <span className="text-xs sm:text-sm font-semibold text-white">
                  {personalInfo.location}
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Messaging Form with Anime Styling */}
          <div className="lg:col-span-7">
            <div className="anime-card rounded-2xl p-6 sm:p-8 relative hud-corner">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gold-500/15 border border-gold-500/30 text-gold-400">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-bold text-white">
                      Instant Transmission
                    </h3>
                    <p className="text-xs text-slate-400 font-mono">
                      DIRECT DISPATCH TO MANIKESHWAR
                    </p>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/20">
                  STATUS // READY
                </span>
              </div>

              {formSubmitted ? (
                <div className="p-8 text-center space-y-4 rounded-xl bg-navy-900/90 border border-emerald-500/30">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">
                    Message Dispatched Successfully!
                  </h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Thank you for reaching out. You can also connect directly at{' '}
                    <a href={`mailto:${personalInfo.email}`} className="text-gold-400 hover:underline">
                      {personalInfo.email}
                    </a>{' '}
                    or on LinkedIn.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="mt-3 px-4 py-2 rounded-lg bg-navy-800 text-gold-300 text-xs font-semibold hover:bg-navy-750 transition-colors font-mono"
                  >
                    Send Another Transmission
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-medium text-slate-300 uppercase tracking-wider mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Hiring Manager"
                        className="w-full px-4 py-3 rounded-xl bg-navy-900 border border-slate-800 focus:border-gold-400 focus:outline-none focus:ring-1 focus:ring-gold-400 text-white placeholder-slate-500 text-sm font-sans"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-medium text-slate-300 uppercase tracking-wider mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="recruiter@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-navy-900 border border-slate-800 focus:border-gold-400 focus:outline-none focus:ring-1 focus:ring-gold-400 text-white placeholder-slate-500 text-sm font-sans"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-300 uppercase tracking-wider mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Opportunity: Entry-Level Java / Full Stack Developer"
                      className="w-full px-4 py-3 rounded-xl bg-navy-900 border border-slate-800 focus:border-gold-400 focus:outline-none focus:ring-1 focus:ring-gold-400 text-white placeholder-slate-500 text-sm font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-300 uppercase tracking-wider mb-1.5">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Manikeshwar, we reviewed your Literary Sanctuary and User Management Dashboard projects and would like to schedule an interview..."
                      className="w-full px-4 py-3 rounded-xl bg-navy-900 border border-slate-800 focus:border-gold-400 focus:outline-none focus:ring-1 focus:ring-gold-400 text-white placeholder-slate-500 text-sm resize-none font-sans"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 text-navy-950 font-bold text-sm uppercase tracking-wider shadow-gold-glow hover:shadow-gold-glow-lg hover:brightness-110 transition-all duration-200 font-mono"
                  >
                    <span>Send Transmission</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
