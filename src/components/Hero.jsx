import React from 'react';
import { 
  ArrowRight, 
  Github, 
  Linkedin, 
  Code, 
  Terminal, 
  Award, 
  BrainCircuit, 
  Sparkles, 
  Download, 
  CheckCircle2,
  Mail,
  Phone
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-glow-radial">
      {/* Abstract Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Information & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* AI Specialization Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs sm:text-sm font-medium">
              <BrainCircuit className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span>Artificial Intelligence Specialization (2023–2027)</span>
            </div>

            {/* Name Heading */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I'm <br />
                <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                  {personalInfo.fullName}
                </span>
              </h1>
              <p className="text-lg sm:text-xl font-semibold text-slate-300 flex items-center justify-center lg:justify-start gap-2">
                <Terminal className="w-5 h-5 text-cyan-400" />
                <span>Full-Stack Developer & Aspiring Software Engineer</span>
              </p>
            </div>

            {/* Summary */}
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed mx-auto lg:mx-0">
              {personalInfo.summary}
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all hover:-translate-y-0.5"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 border border-slate-700/60 font-semibold text-sm transition-all hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Get In Touch</span>
              </a>

              <a
                href="/resume.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900/60 hover:bg-slate-800 text-slate-300 border border-slate-800 font-medium text-sm transition-colors"
              >
                <Download className="w-4 h-4 text-indigo-400" />
                <span>View / Download Resume</span>
              </a>
            </div>

            {/* Coding & Social Profile Links */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <span className="text-xs text-slate-500 font-mono uppercase tracking-wider w-full sm:w-auto text-center">Profiles:</span>
              
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-xs font-mono flex items-center gap-1.5 transition-colors"
              >
                <Github className="w-3.5 h-3.5 text-cyan-400" />
                GitHub
              </a>

              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-xs font-mono flex items-center gap-1.5 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-sky-400" />
                LinkedIn
              </a>

              <a
                href={personalInfo.socialLinks.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-amber-400 border border-slate-800 text-xs font-mono flex items-center gap-1.5 transition-colors"
              >
                <Code className="w-3.5 h-3.5 text-amber-400" />
                LeetCode
              </a>

              <a
                href={personalInfo.socialLinks.hackerrank}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-emerald-400 border border-slate-800 text-xs font-mono flex items-center gap-1.5 transition-colors"
              >
                <Award className="w-3.5 h-3.5 text-emerald-400" />
                HackerRank
              </a>

              <a
                href={personalInfo.socialLinks.codechef}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-violet-400 border border-slate-800 text-xs font-mono flex items-center gap-1.5 transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5 text-violet-400" />
                CodeChef
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Profile Card & Stats Grid */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Cyber Profile Display Card */}
            <div className="glass-panel rounded-2xl p-6 relative overflow-hidden border border-slate-800 shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
              
              {/* Header Avatar Placeholder / Tech Badge */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-500 via-sky-600 to-indigo-600 flex items-center justify-center text-white text-2xl font-bold font-mono shadow-lg shadow-cyan-500/30">
                  NS
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">{personalInfo.shortName}</h3>
                  <p className="text-xs text-cyan-400 font-mono">B.Tech AI @ Pragati Engg. College</p>
                  <p className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                    Available for SDE Opportunities
                  </p>
                </div>
              </div>

              {/* Quick Tech Badges */}
              <div className="space-y-3 pt-2 border-t border-slate-800/80">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-mono">Primary Stack</span>
                  <span className="text-slate-200 font-semibold">Python • React • Node.js</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-mono">Database</span>
                  <span className="text-slate-200 font-semibold">MongoDB • SQL</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-mono">Core Focus</span>
                  <span className="text-slate-200 font-semibold">DSA & Web Architecture</span>
                </div>
              </div>

              {/* Status Pills */}
              <div className="grid grid-cols-2 gap-2 mt-6">
                <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
                  <div className="text-xs text-slate-400">Academic CGPA</div>
                  <div className="text-lg font-extrabold text-cyan-400 font-mono">8.21 / 10</div>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
                  <div className="text-xs text-slate-400">DSA Solved</div>
                  <div className="text-lg font-extrabold text-emerald-400 font-mono">500+</div>
                </div>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-3">
              {personalInfo.stats.map((stat, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-xl glass-panel border border-slate-800/80 flex flex-col justify-between hover:border-cyan-500/40 transition-colors"
                >
                  <span className="text-2xl sm:text-3xl font-extrabold font-mono bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                    {stat.value}{stat.suffix}
                  </span>
                  <span className="text-xs text-slate-400 mt-1 font-medium">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
