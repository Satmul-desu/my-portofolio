import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://github.com/satmul-desu"),
  title: "Satria Maulana Asrul | Software Engineering & Network Specialist",

  description: "Portofolio Satria Maulana Asrul - Siswa SMK Assalaam Bandung jurusan RPL (Rekayasa Perangkat Lunak) & TKJ. Pengembang Aplikasi Web & Teknisi Jaringan.",
  keywords: [
    "Satria Maulana Asrul",
    "SMK Assalaam Bandung",
    "RPL",
    "TKJ",
    "Software Engineering",
    "Fullstack Developer",
    "Web Developer Bandung",
    "PHP",
    "Node.js",
    "PostgreSQL",
    "Teknisi Jaringan"
  ],
  authors: [{ name: "Satria Maulana Asrul" }],
  openGraph: {
    title: "Satria Maulana Asrul - Software Engineering & Network Portfolio",
    description: "Siswa RPL & TKJ SMK Assalaam Bandung. Web Development, Database Management, & IT Support Services.",
    url: "https://github.com/satmul-desu",
    siteName: "Satria Maulana Asrul Portfolio",
    images: [
      {
        url: "/port.jpg",
        width: 800,
        height: 800,
        alt: "Satria Maulana Asrul",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#050505] text-zinc-100 selection:bg-blue-500/30`}
      >
        {children}
      </body>
    </html>
  );
}

