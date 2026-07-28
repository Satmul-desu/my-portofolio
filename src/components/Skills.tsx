"use client";
import React from "react";
import { motion } from "framer-motion";
import { Code, Server, Wrench, CheckCircle2 } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Skills() {
  const categoryIcons = [
    <Code key="code" className="text-blue-400" size={22} />,
    <Server key="server" className="text-cyan-400" size={22} />,
    <Wrench key="wrench" className="text-indigo-400" size={22} />,
  ];

  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-xs font-black text-blue-500 tracking-[0.3em] uppercase mb-2">
          Competencies & Tools
        </h2>
        <h3 className="text-3xl sm:text-4xl font-bold">
          Tech Stack <span className="text-zinc-600">&</span> Expertise
        </h3>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {PORTFOLIO_DATA.skillCategories.map((cat, idx) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-zinc-900/40 border border-white/10 backdrop-blur-md hover:border-blue-500/30 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
                <div className="p-3 bg-zinc-800/80 rounded-2xl border border-white/5">
                  {categoryIcons[idx % categoryIcons.length]}
                </div>
                <h4 className="text-xl font-bold text-white">{cat.title}</h4>
              </div>

              <div className="space-y-3">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-zinc-900/80 border border-white/5 text-sm font-medium text-zinc-200 hover:border-blue-500/30 transition-colors"
                  >
                    <CheckCircle2 size={16} className="text-blue-500 shrink-0" />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
