import React from 'react';
import { ArrowUp, Github, Linkedin, Code, Sparkles, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left Side Branding */}
          <div className="text-center md:text-left space-y-1">
            <h4 className="text-lg font-bold text-white font-mono">
              {personalInfo.fullName}
            </h4>
            <p className="text-xs text-slate-400">
              Full-Stack Developer & Aspiring Software Engineer
            </p>
          </div>

          {/* Social Profiles */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800 transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 text-slate-400 hover:text-sky-400 hover:bg-slate-800 border border-slate-800 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socialLinks.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 text-slate-400 hover:text-amber-400 hover:bg-slate-800 border border-slate-800 transition-colors"
              title="LeetCode"
            >
              <Code className="w-4 h-4" />
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-slate-900 text-slate-400 hover:text-cyan-400 hover:bg-slate-800 border border-slate-800 transition-colors flex items-center gap-2 text-xs font-mono"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>

        </div>

        {/* Bottom Copyright Notice */}
        <div className="mt-8 pt-8 border-t border-slate-900/80 text-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {personalInfo.fullName}. Built with React, Tailwind CSS & AI Precision.</p>
        </div>
      </div>
    </footer>
  );
}
