"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Github, ChevronRight, Terminal, MapPin, GraduationCap } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Hero() {
  return (
    <section
      id="about"
      className="relative pt-36 md:pt-44 pb-20 px-6 max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center"
    >
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="lg:col-span-7"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-6">
          <Terminal size={14} className="animate-pulse" />
          <span>AVAILABLE FOR PROJECTS & COLLABORATION</span>
        </div>

        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight mb-8">
          SOFTWARE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-400">
            ENGINEERING
          </span>
        </h1>

        <p className="text-zinc-400 text-base sm:text-lg max-w-xl leading-relaxed mb-8 border-l-2 border-blue-500/80 pl-6">
          {PORTFOLIO_DATA.bio}
        </p>

        <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-400 mb-10">
          <div className="flex items-center gap-1.5 bg-zinc-900/60 border border-white/10 px-3 py-1.5 rounded-lg">
            <GraduationCap size={16} className="text-blue-400" />
            <span>{PORTFOLIO_DATA.school} ({PORTFOLIO_DATA.major})</span>
          </div>
          <div className="flex items-center gap-1.5 bg-zinc-900/60 border border-white/10 px-3 py-1.5 rounded-lg">
            <MapPin size={16} className="text-blue-400" />
            <span>{PORTFOLIO_DATA.address}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <a
            href="#contact"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold text-white text-sm transition-all duration-300 flex items-center gap-2 shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40 hover:-translate-y-0.5"
          >
            Get in Touch <ChevronRight size={18} />
          </a>
          <a
            href={PORTFOLIO_DATA.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-4 bg-zinc-900 border border-white/10 rounded-xl hover:bg-zinc-800 hover:border-white/20 transition-all text-sm font-semibold flex items-center gap-2.5"
          >
            <Github size={18} />
            <span>GitHub Profile</span>
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="lg:col-span-5 flex justify-center lg:justify-end"
      >
        <div className="relative w-72 sm:w-80 h-96 bg-zinc-900 rounded-[36px] border border-white/10 overflow-hidden group shadow-2xl shadow-blue-950/20">
          <Image
            src="/port.jpg"
            alt={PORTFOLIO_DATA.name}
            fill
            sizes="(max-width: 768px) 288px, 320px"
            priority
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest">
              Education & Field
            </p>
            <p className="text-sm font-bold text-white">{PORTFOLIO_DATA.school}</p>
            <p className="text-xs text-zinc-400 mt-0.5">RPL & TKJ Competency</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
