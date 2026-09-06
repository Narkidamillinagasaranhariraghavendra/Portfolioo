import React from 'react';
import { Cpu, Code, Database, Layout, Wrench, CheckCircle, BrainCircuit } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
            <Cpu className="w-3.5 h-3.5" /> TECHNICAL SKILLS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Core Competencies & <span className="text-cyan-400">Tech Stack</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Comprehensive skill matrix covering programming languages, frontend/backend engineering, and core CS fundamentals.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Programming Languages Card */}
          <div className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-5 hover:border-cyan-500/40 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                <Code className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg">Languages</h3>
                <p className="text-xs text-slate-400">Core Programming</p>
              </div>
            </div>

            <div className="space-y-3.5 pt-2">
              {skillsData.languages.map((lang, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex justify-between text-xs font-medium">
                    <span className="text-slate-200 flex items-center gap-2">
                      <span>{lang.icon}</span> {lang.name}
                    </span>
                    <span className="text-cyan-400 font-mono">{lang.level}%</span>
                  </div>
                  <div className="w-full bg-slate-900 rounded-full h-2 overflow-hidden border border-slate-800">
                    <div
                      className="bg-gradient-to-r from-cyan-500 to-indigo-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${lang.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Frontend Engineering Card */}
          <div className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-5 hover:border-cyan-500/40 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                <Layout className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg">Frontend Engineering</h3>
                <p className="text-xs text-slate-400">UI & Client State</p>
              </div>
            </div>

            <div className="space-y-3.5 pt-2">
              {skillsData.frontend.map((item, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex justify-between text-xs font-medium">
                    <span className="text-slate-200">{item.name}</span>
                    <span className="text-indigo-400 font-mono">{item.level}%</span>
                  </div>
                  <div className="w-full bg-slate-900 rounded-full h-2 overflow-hidden border border-slate-800">
                    <div
                      className="bg-gradient-to-r from-indigo-500 to-sky-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${item.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Backend Engineering Card */}
          <div className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-5 hover:border-cyan-500/40 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Database className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg">Backend & APIs</h3>
                <p className="text-xs text-slate-400">Server & Real-Time</p>
              </div>
            </div>

            <div className="space-y-3.5 pt-2">
              {skillsData.backend.map((item, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex justify-between text-xs font-medium">
                    <span className="text-slate-200">{item.name}</span>
                    <span className="text-emerald-400 font-mono">{item.level}%</span>
                  </div>
                  <div className="w-full bg-slate-900 rounded-full h-2 overflow-hidden border border-slate-800">
                    <div
                      className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${item.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Row: Core Concepts & Tools Pills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          
          {/* Core CS Concepts */}
          <div className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <BrainCircuit className="w-5 h-5 text-cyan-400" />
              <span>Core Computer Science Concepts</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {skillsData.coreConcepts.map((concept, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-200 p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
                  <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>{concept}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Environments */}
          <div className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Wrench className="w-5 h-5 text-indigo-400" />
              <span>Tools & Deployment Platforms</span>
            </h3>
            <div className="flex flex-wrap gap-2.5 pt-1">
              {skillsData.tools.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-2 rounded-xl bg-slate-900 text-slate-200 border border-slate-800 text-xs font-mono hover:border-indigo-500/40 transition-colors"
                >
                  🛠️ {tool}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
