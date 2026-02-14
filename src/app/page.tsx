"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Mail, MapPin, Database, Server, Monitor, Cpu, ChevronRight, ExternalLink, Code2, Globe } from 'lucide-react';

// --- DATA SOURCE SESUAI BIODATA BARU ---
const DATA = {
  name: "Satria Maulana Asrul",
  tagline: "Fullstack Developer & Hardware Enthusiast",
  about: "Hai, saya Satria Maulana Asrul, anak ke-2 dari 3 bersaudara. Saat ini saya kelas 11 di SMK Assalaam Bandung jurusan RPL. Di sini, saya tidak hanya belajar coding (web & aplikasi), tapi juga mendalami ilmu TKJ. Saya kompeten dalam instalasi ISO, IOS, OS, serta troubleshooting kerusakan perangkat keras laptop dan PC.",
  skills: [
    { name: "PostgreSQL (PgSQL)", type: "Database Expert", icon: <Database className="text-blue-400" /> },
    { name: "MySQL & SQLite", type: "Database", icon: <Database className="text-cyan-400" /> },
    { name: "Hardware & OS", type: "IT Support", icon: <Cpu className="text-purple-400" /> },
    { name: "PHP & Node.js", type: "Backend", icon: <Server className="text-green-400" /> },
    { name: "Python & C++", type: "Programming", icon: <Code2 className="text-yellow-400" /> },
    { name: "React & HTML/CSS", type: "Frontend", icon: <Globe className="text-blue-500" /> },
    { name: "Java", type: "Programming", icon: <Code2 className="text-red-500" /> }
  ],
  projects: [
    {
      title: "Enterprise Fullstack App",
      desc: "Sistem manajemen database terintegrasi menggunakan PostgreSQL untuk performa tinggi.",
      tech: ["PgSQL", "Node.js", "Tailwind"]
    },
    {
      title: "Inventory OS System",
      desc: "Aplikasi yang menggabungkan kemampuan software dengan monitoring hardware PC.",
      tech: ["Python", "SQLite", "Hardware API"]
    },
    {
      title: "Modern E-Commerce",
      desc: "Platform toko online cepat dengan manajemen relasi database kompleks di PgSQL.",
      tech: ["PHP", "PostgreSQL", "Javascript"]
    }
  ]
};

export default function SatriaPortfolioFinal() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <main className="min-h-screen bg-[#020202] text-white selection:bg-blue-500 overflow-x-hidden cursor-none">
      
      {/* GLOWING CURSOR EFFECT */}
      <motion.div 
        className="fixed w-4 h-4 bg-blue-500 rounded-full pointer-events-none z-[9999] blur-[2px]"
        animate={{ x: mousePos.x - 8, y: mousePos.y - 8 }}
      />
      <motion.div 
        className="fixed w-64 h-64 bg-blue-600/10 rounded-full pointer-events-none z-0 blur-[100px]"
        animate={{ x: mousePos.x - 128, y: mousePos.y - 128 }}
      />

      {/* HEADER / NAV */}
      <nav className="fixed top-0 w-full z-50 p-6 flex justify-between items-center backdrop-blur-md border-b border-white/5">
        <div className="font-black text-2xl tracking-tighter">SMA<span className="text-blue-500">.</span></div>
        <div className="flex gap-6 items-center">
          <a href="https://github.com/satmul-desu" className="hover:text-blue-400 transition-all"><Github size={20}/></a>
          <button className="bg-white text-black px-5 py-2 rounded-full text-xs font-bold hover:bg-blue-500 hover:text-white transition-all">LET'S TALK</button>
        </div>
      </nav>

      {/* HERO & ABOUT SECTION */}
      <section className="relative pt-32 pb-20 px-6 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-7"
          >
            <h1 className="text-7xl md:text-8xl font-black mb-6 tracking-tighter">
              POSTGRE<span className="text-blue-600">SQL</span> <br /> EXPERT<span className="text-zinc-700">.</span>
            </h1>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8 italic">
              "{DATA.about}"
            </p>
            <div className="flex flex-wrap gap-4">
               <div className="flex items-center gap-2 px-4 py-2 bg-zinc-900 rounded-full border border-white/10 text-xs shadow-xl">
                 <Monitor size={14} className="text-blue-500"/> SMK Assalaam Bandung
               </div>
               <div className="flex items-center gap-2 px-4 py-2 bg-zinc-900 rounded-full border border-white/10 text-xs shadow-xl">
                 <Cpu size={14} className="text-purple-500"/> Hardware Specialist
               </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-square bg-zinc-900 rounded-3xl border border-white/10 overflow-hidden relative group">
              <img src="/port.jpg" alt="Satria" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="h-[1px] w-full bg-white/20 mb-4"></div>
                <p className="text-xs font-mono text-blue-400">SATRIA_MAULANA_ASRUL.EXE</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SKILLS GRID (The Tech Power) */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-12 flex items-center gap-4">
           Mastery <div className="h-[1px] flex-grow bg-white/10"></div>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DATA.skills.map((skill, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.03)" }}
              className="p-6 rounded-2xl border border-white/5 bg-zinc-900/20 backdrop-blur-md flex items-center gap-4 group"
            >
              <div className="p-4 rounded-xl bg-black border border-white/5 group-hover:border-blue-500/50 transition-all">
                {skill.icon}
              </div>
              <div>
                <h4 className="font-bold text-lg">{skill.name}</h4>
                <p className="text-xs text-zinc-500 uppercase tracking-widest">{skill.type}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <h2 className="text-5xl font-black italic">WORKS<span className="text-blue-600">_</span></h2>
          <a href="https://github.com/satmul-desu" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-all font-mono text-sm underline underline-offset-8">
            CHECK_ALL_ON_GITHUB <ExternalLink size={16}/>
          </a>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {DATA.projects.map((p, i) => (
            <div key={i} className="group p-8 rounded-[2rem] bg-zinc-900/40 border border-white/5 hover:bg-blue-600/5 transition-all duration-500">
               <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400">{p.title}</h3>
               <p className="text-zinc-500 text-sm mb-6 leading-relaxed">{p.desc}</p>
               <div className="flex flex-wrap gap-2">
                 {p.tech.map(t => (
                   <span key={t} className="px-3 py-1 bg-black rounded-full text-[10px] font-mono text-zinc-400 border border-white/10">{t}</span>
                 ))}
               </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER CALL TO ACTION */}
      <section className="py-32 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div whileInView={{ scale: [0.9, 1], opacity: [0, 1] }}>
            <h2 className="text-6xl md:text-8xl font-black mb-10 tracking-tighter">READY TO <br /> <span className="text-blue-600 outline-text">BUILD?</span></h2>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
               <a href={`mailto:${DATA.email}`} className="px-12 py-5 bg-blue-600 rounded-full font-black text-xl hover:bg-blue-700 transition-all shadow-[0_0_30px_rgba(37,99,235,0.3)]">
                  SEND MESSAGE
               </a>
               <div className="text-left">
                 <p className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Contact Satria</p>
                 <p className="text-lg font-bold">{DATA.email}</p>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="p-10 text-center text-[10px] text-zinc-700 font-mono tracking-widest">
        DESIGNED BY SATRIA MAULANA ASRUL // 2026 // SMK_ASSALAAM_BANDUNG
      </footer>
    </main>
  );
}