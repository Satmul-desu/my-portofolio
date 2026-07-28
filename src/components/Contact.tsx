"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<{
    loading: boolean;
    success?: boolean;
    message?: string;
  }>({ loading: false });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        loading: false,
        success: false,
        message: "Mohon isi semua bidang formulir.",
      });
      return;
    }

    setStatus({ loading: true });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus({
          loading: false,
          success: true,
          message: data.message || "Pesan kamu berhasil terkirim!",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({
          loading: false,
          success: false,
          message: data.error || "Gagal mengirim pesan. Silakan coba lagi.",
        });
      }
    } catch {
      setStatus({
        loading: false,
        success: false,
        message: "Terjadi kesalahan jaringan. Silakan coba lagi nanti.",
      });
    }
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-b from-zinc-900/80 to-zinc-950 p-8 sm:p-12 rounded-[36px] border border-white/10 relative overflow-hidden"
      >
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center text-blue-400 mx-auto mb-6 rotate-6 border border-blue-500/20">
            <Mail size={32} />
          </div>
          <h2 className="text-4xl sm:text-6xl font-black mb-4 tracking-tight">
            LET'S CONNECT<span className="text-blue-500">.</span>
          </h2>
          <p className="text-zinc-400 text-base leading-relaxed">
            Tertarik untuk bekerja sama, diskusi project, atau ada pertanyaan seputar Rekayasa Perangkat Lunak & Jaringan? Kirim pesan langsung melalui formulir di bawah ini.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-5">
          <div>
            <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
              Nama Lengkap
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Masukkan nama kamu"
              className="w-full px-4 py-3.5 bg-zinc-900/90 border border-white/10 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors text-sm"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
              Alamat Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="nama@email.com"
              className="w-full px-4 py-3.5 bg-zinc-900/90 border border-white/10 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors text-sm"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
              Pesan
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tuliskan pesan atau penawaran kamu di sini..."
              className="w-full px-4 py-3.5 bg-zinc-900/90 border border-white/10 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors text-sm resize-none"
              required
            />
          </div>

          {status.message && (
            <div
              className={`p-4 rounded-xl flex items-center gap-3 text-sm ${
                status.success
                  ? "bg-emerald-500/10 border border-emerald-500/20 text-emerald-400"
                  : "bg-red-500/10 border border-red-500/20 text-red-400"
              }`}
            >
              {status.success ? (
                <CheckCircle2 size={18} className="shrink-0" />
              ) : (
                <AlertCircle size={18} className="shrink-0" />
              )}
              <span>{status.message}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={status.loading}
            className="w-full py-4 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 text-white font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm shadow-lg shadow-blue-600/25"
          >
            {status.loading ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                <span>Mengirim Pesan...</span>
              </>
            ) : (
              <>
                <span>Kirim Pesan Sekarang</span>
                <Send size={16} />
              </>
            )}
          </button>
        </form>

        <div className="mt-12 text-center pt-8 border-t border-white/5">
          <p className="text-xs text-zinc-500 mb-2">Atau hubungi langsung via email:</p>
          <a
            href={`mailto:${PORTFOLIO_DATA.email}`}
            className="text-sm font-bold text-blue-400 hover:underline"
          >
            {PORTFOLIO_DATA.email}
          </a>
        </div>
      </motion.div>
    </section>
  );
}
