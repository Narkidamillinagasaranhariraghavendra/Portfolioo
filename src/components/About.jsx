import React from 'react';
import { User, Code2, Brain, Sparkles, CheckCircle, Target, Lightbulb, Rocket } from 'lucide-react';
import { personalInfo, skillsData } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-20 relative bg-slate-950/60 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
            <User className="w-3.5 h-3.5" /> ABOUT ME
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Passionate About Engineering & <span className="text-cyan-400">Intelligent Solutions</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Bridging Artificial Intelligence theory with modern web application engineering.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Story Panel */}
          <div className="lg:col-span-7 glass-panel rounded-2xl p-6 sm:p-8 space-y-6 flex flex-col justify-between border border-slate-800">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Brain className="w-5 h-5 text-cyan-400" />
                <span>My Journey in Tech</span>
              </h3>
              
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                I am a B.Tech Artificial Intelligence undergraduate at Pragati Engineering College, Kakinada (2023–2027), with an academic record of <strong>8.21/10 CGPA</strong>. My core technical passion lies at the intersection of web application engineering, data structures, and intelligent software systems.
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Through hands-on projects, I have developed full-stack web applications using <strong>React.js, Node.js, Express.js, MongoDB, Socket.IO</strong>, and modern APIs. Additionally, I have solved over <strong>500+ Data Structures and Algorithms</strong> problems across CodeChef, HackerRank, and LeetCode, sharpening my analytical problem-solving and code optimization skills.
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Having completed internships with <strong>YUVA</strong> and the <strong>EY-Microsoft 1M1B Green Initiative</strong>, I thrive in collaborative engineering environments that value continuous learning, code quality, and real-world impact.
              </p>
            </div>

            {/* Core Values Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800/80">
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-center space-y-1">
                <Target className="w-5 h-5 text-cyan-400 mx-auto" />
                <h4 className="text-xs font-bold text-white">Problem Solver</h4>
                <p className="text-[11px] text-slate-400">500+ algorithmic challenges solved</p>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-center space-y-1">
                <Lightbulb className="w-5 h-5 text-indigo-400 mx-auto" />
                <h4 className="text-xs font-bold text-white">Full-Stack Builder</h4>
                <p className="text-[11px] text-slate-400">React, Node, Express, MongoDB</p>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-center space-y-1">
                <Rocket className="w-5 h-5 text-emerald-400 mx-auto" />
                <h4 className="text-xs font-bold text-white">Fast Learner</h4>
                <p className="text-[11px] text-slate-400">Certified across Oracle, Cisco & Salesforce</p>
              </div>
            </div>
          </div>

          {/* Soft Skills & Strengths Panel */}
          <div className="lg:col-span-5 glass-panel rounded-2xl p-6 sm:p-8 space-y-6 border border-slate-800 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-amber-400" />
                <span>Soft Skills & Strengths</span>
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Personal attributes that enhance my team collaboration and engineering output:
              </p>

              <div className="flex flex-wrap gap-2.5">
                {skillsData.softSkills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900/90 text-slate-200 border border-slate-800 text-xs font-medium hover:border-cyan-500/50 hover:text-cyan-300 transition-all hover:scale-[1.02]"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Academic Summary Badge */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-slate-900 via-slate-900 to-cyan-950/40 border border-cyan-500/20 mt-6">
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="text-slate-400 font-mono">Education Status</span>
                <span className="text-cyan-400 font-semibold">2023 – 2027</span>
              </div>
              <p className="text-sm font-bold text-white">
                B.Tech Artificial Intelligence
              </p>
              <p className="text-xs text-slate-400">
                Pragati Engineering College, Kakinada (CGPA: 8.21/10)
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
