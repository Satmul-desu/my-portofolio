import React from "react";
import { MapPin, Github, Mail } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/5 px-6 lg:px-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-zinc-500">
      <div className="flex flex-col sm:flex-row items-center gap-3">
        <p className="font-semibold text-zinc-400">
          © {currentYear} {PORTFOLIO_DATA.name}. All rights reserved.
        </p>
        <span className="hidden sm:inline text-zinc-700">•</span>
        <span className="text-zinc-500">{PORTFOLIO_DATA.school}</span>
      </div>

      <div className="flex items-center gap-2 font-mono">
        <MapPin size={15} className="text-blue-500" />
        <span>{PORTFOLIO_DATA.address}</span>
      </div>

      <div className="flex items-center gap-6 uppercase font-bold tracking-wider">
        <a
          href={PORTFOLIO_DATA.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors flex items-center gap-1.5"
        >
          <Github size={14} />
          <span>GitHub</span>
        </a>
        <a
          href={`mailto:${PORTFOLIO_DATA.email}`}
          className="hover:text-white transition-colors flex items-center gap-1.5"
        >
          <Mail size={14} />
          <span>Email</span>
        </a>
      </div>
    </footer>
  );
}
