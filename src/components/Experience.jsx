import React from 'react';
import { Briefcase, Building2, Calendar, CheckCircle2, ChevronRight, Leaf, ShieldCheck } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
            <Briefcase className="w-3.5 h-3.5" /> INTERNSHIP EXPERIENCE
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Industry & Practical <span className="text-cyan-400">Experience</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Applying software engineering standards and technology-driven problem solving in real-world environments.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {experienceData.map((exp, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-2xl p-6 sm:p-8 space-y-5 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 relative group flex flex-col justify-between"
            >
              {/* Background Subtle Accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-bl-full pointer-events-none group-hover:bg-cyan-500/10 transition-colors" />

              <div className="space-y-4">
                {/* Badge Header */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-mono">
                    {idx === 0 ? <ShieldCheck className="w-3.5 h-3.5" /> : <Leaf className="w-3.5 h-3.5 text-emerald-400" />}
                    {exp.type}
                  </span>
                  <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.period}
                  </span>
                </div>

                {/* Role & Company */}
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {exp.role}
                  </h3>
                  <div className="text-sm font-semibold text-slate-300 flex items-center gap-2 mt-1">
                    <Building2 className="w-4 h-4 text-cyan-400" />
                    <span>{exp.company}</span>
                  </div>
                </div>

                {/* Key Achievements Bullet List */}
                <ul className="space-y-3 pt-2">
                  {exp.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                      <ChevronRight className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills Tags */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-2">
                {exp.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2.5 py-1 rounded-md bg-slate-900 text-slate-400 text-xs font-mono border border-slate-800"
                  >
                    #{skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
