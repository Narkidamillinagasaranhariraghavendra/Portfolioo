import React from 'react';
import { GraduationCap, Award, Calendar, Building, CheckCircle2 } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 relative bg-slate-950/70 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
            <GraduationCap className="w-3.5 h-3.5" /> ACADEMIC BACKGROUND
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & <span className="text-cyan-400">Qualifications</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Consistent academic excellence from secondary school through B.Tech Artificial Intelligence specialization.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="max-w-4xl mx-auto space-y-6">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 relative group flex flex-col md:flex-row justify-between gap-6"
            >
              <div className="space-y-3 flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-cyan-400 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {edu.period}
                  </span>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold">
                    {edu.score}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {edu.degree}
                </h3>

                <p className="text-sm font-semibold text-slate-300 flex items-center gap-2">
                  <Building className="w-4 h-4 text-cyan-400" />
                  <span>{edu.institution}</span>
                </p>

                <p className="text-sm text-slate-400 pt-1 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
