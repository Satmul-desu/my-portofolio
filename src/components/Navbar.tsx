"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 px-6 lg:px-12 py-4 flex justify-between items-center ${
        isScrolled
          ? "bg-black/70 backdrop-blur-xl border-b border-white/10 py-3 shadow-lg shadow-black/50"
          : "bg-transparent"
      }`}
    >
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center gap-2 group cursor-pointer"
      >
        <div className="w-9 h-9 bg-blue-600 group-hover:bg-blue-500 transition-colors rounded-xl flex items-center justify-center font-black text-white shadow-md shadow-blue-600/30">
          S
        </div>
        <span className="font-black tracking-tighter text-xl text-white">
          SATRIA<span className="text-blue-500">.</span>
        </span>
      </motion.a>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest text-zinc-400">
        {navLinks.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="hover:text-blue-400 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-blue-500 hover:after:w-full after:transition-all"
          >
            {item.label}
          </a>
        ))}
      </div>

      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden p-2 text-zinc-400 hover:text-white rounded-lg border border-white/10 bg-zinc-900/50"
        aria-label="Toggle Navigation Menu"
      >
        {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-2xl border-b border-white/10 md:hidden flex flex-col p-6 gap-4"
          >
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-bold uppercase tracking-widest text-zinc-300 hover:text-blue-400 transition-colors py-2 border-b border-white/5"
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
