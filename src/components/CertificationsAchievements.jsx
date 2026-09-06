import React from 'react';
import { Award, ShieldCheck, Trophy, Sparkles, Code, CheckCircle, ExternalLink } from 'lucide-react';
import { certificationsData, achievementsData, personalInfo } from '../data/portfolioData';

export default function CertificationsAchievements() {
  return (
    <section id="certifications" className="py-20 relative bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
            <Award className="w-3.5 h-3.5" /> RECOGNITION & CREDENTIALS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Industry Certifications & <span className="text-cyan-400">Achievements</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Verified credentials from Oracle, Salesforce, Cisco, NPTEL, and competitive programming milestones.
          </p>
        </div>

        {/* Highlight Banner: 500+ DSA Problems Solved */}
        <div className="mb-12 glass-panel rounded-2xl p-6 sm:p-8 border border-amber-500/30 bg-gradient-to-r from-slate-950 via-slate-900 to-amber-950/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-500 to-yellow-600 flex items-center justify-center text-white text-2xl shadow-lg shadow-amber-500/30">
                <Trophy className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-mono text-amber-400 uppercase tracking-wider font-semibold">Milestone Achievement</span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white">500+ DSA Problems Solved</h3>
                <p className="text-xs sm:text-sm text-slate-300">Across CodeChef, HackerRank, and LeetCode</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2">
              <a
                href={personalInfo.socialLinks.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl bg-slate-900 text-amber-300 border border-amber-500/30 text-xs font-mono font-semibold hover:border-amber-400 hover:text-amber-200 transition-all flex items-center gap-1.5"
              >
                LeetCode
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href={personalInfo.socialLinks.hackerrank}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl bg-slate-900 text-emerald-300 border border-emerald-500/30 text-xs font-mono font-semibold hover:border-emerald-400 hover:text-emerald-200 transition-all flex items-center gap-1.5"
              >
                HackerRank
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href={personalInfo.socialLinks.codechef}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl bg-slate-900 text-violet-300 border border-violet-500/30 text-xs font-mono font-semibold hover:border-violet-400 hover:text-violet-200 transition-all flex items-center gap-1.5"
              >
                CodeChef
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {certificationsData.map((cert, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-2xl p-6 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 flex items-start gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-105 transition-transform">
                {cert.icon}
              </div>

              <div className="space-y-1.5 flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-cyan-400 font-medium">{cert.issuer}</span>
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {cert.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
