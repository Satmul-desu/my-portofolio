"use client";
import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Layout, Database, Smartphone, Wrench, Network } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Projects() {
  const getProjectIcon = (index: number) => {
    switch (index % 5) {
      case 0:
        return <Layout className="text-blue-400" size={24} />;
      case 1:
        return <Smartphone className="text-cyan-400" size={24} />;
      case 2:
        return <Database className="text-indigo-400" size={24} />;
      case 3:
        return <Wrench className="text-amber-400" size={24} />;
      default:
        return <Network className="text-emerald-400" size={24} />;
    }
  };

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
        <div>
          <h2 className="text-xs font-black text-blue-500 tracking-[0.3em] uppercase mb-2">
            Selected Works
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold">
            Projects <span className="text-zinc-600">&</span> Practical Experience
          </h3>
        </div>
        <a
          href={PORTFOLIO_DATA.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-blue-400 transition-colors"
        >
          View GitHub Repository <ExternalLink size={14} />
        </a>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PORTFOLIO_DATA.projects.map((proj, i) => (
          <motion.div
            key={proj.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="group relative p-1 rounded-[32px] bg-gradient-to-b from-white/10 to-transparent hover:from-blue-500/40 transition-all duration-500 flex"
          >
            <div className="bg-[#0a0a0a] rounded-[31px] p-8 w-full flex flex-col justify-between border border-white/5 group-hover:border-blue-500/20 transition-all">
              <div>
                <div className="mb-6 flex justify-between items-start">
                  <div className="p-3.5 bg-zinc-900 rounded-2xl border border-white/5 group-hover:bg-blue-600/10 transition-colors">
                    {getProjectIcon(i)}
                  </div>
                  {proj.githubUrl && (
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 bg-zinc-900 hover:bg-zinc-800 rounded-xl text-zinc-400 hover:text-white transition-colors border border-white/5"
                      title="Lihat Source Code di GitHub"
                    >
                      <Github size={18} />
                    </a>
                  )}
                </div>

                <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest block mb-2">
                  {proj.category}
                </span>
                <h4 className="text-xl font-bold mb-3 text-white group-hover:text-blue-300 transition-colors">
                  {proj.title}
                </h4>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  {proj.desc}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                {proj.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-semibold px-3 py-1 bg-zinc-900/90 rounded-lg text-zinc-300 border border-white/5"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
