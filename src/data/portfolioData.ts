export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Project {
  title: string;
  category: string;
  desc: string;
  tech: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured?: boolean;
}

export const PORTFOLIO_DATA = {
  name: "Satria Maulana Asrul",
  role: "Software Engineering & Network Specialist",
  tagline: "Software Engineering Student @ SMK Assalaam Bandung",
  school: "SMK Assalaam Bandung",
  major: "Rekayasa Perangkat Lunak (RPL)",
  email: "satmul.aja009@gmail.com",
  github: "github.com/satmul-desu",
  githubUrl: "https://github.com/satmul-desu",
  address: "Bandung, Jawa Barat, Indonesia",
  bio: "Siswa SMK Assalaam Bandung jurusan Rekayasa Perangkat Lunak (RPL) yang berfokus pada pengembangan aplikasi web Fullstack & Sistem Manajemen. Memiliki pemahaman kuat dalam pemrograman Web, Pengelolaan Database, serta keahlian pendukung di bidang Teknik Komputer & Jaringan (TKJ) seperti instalasi OS, jaringan LAN/UTP, dan hardware troubleshooting.",
  
  skillCategories: [
    {
      title: "Web Development",
      skills: [
        { name: "HTML5" },
        { name: "CSS3 / Tailwind" },
        { name: "JavaScript (ES6+)" },
        { name: "PHP" },
        { name: "Node.js" },
        { name: "React / Next.js" },
      ],
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "MySQL" },
        { name: "PostgreSQL" },
        { name: "SQLite" },
        { name: "Express.js" },
        { name: "RESTful API" },
      ],
    },
    {
      title: "IT Support & Networking",
      skills: [
        { name: "Instalasi OS & ISO" },
        { name: "Teknisi Jaringan (LAN/UTP)" },
        { name: "Service Hardware Laptop/PC" },
        { name: "Troubleshooting Sistem" },
      ],
    },
  ] as SkillCategory[],

  projects: [
    {
      title: "Employee Management System",
      category: "Fullstack Management",
      desc: "Platform manajemen data karyawan modern dengan fitur autentikasi multi-role, operasi CRUD lengkap, dan dashboard analitik admin.",
      tech: ["PHP", "PostgreSQL", "Tailwind CSS"],
      githubUrl: "https://github.com/satmul-desu",
      featured: true,
    },
    {
      title: "E-Commerce Web Application",
      category: "Digital Store Platform",
      desc: "Website toko online interaktif dilengkapi keranjang belanja dinamis, sistem checkout, dan manajemen produk real-time.",
      tech: ["Node.js", "Express", "MySQL", "JavaScript"],
      githubUrl: "https://github.com/satmul-desu",
      featured: true,
    },
    {
      title: "Point of Sale (POS) Kasir UMKM",
      category: "Business Tools",
      desc: "Aplikasi kasir ringan untuk UMKM dengan pemantauan stok otomatis, riwayat transaksi, dan laporan penjualan digital.",
      tech: ["PHP", "SQLite", "JavaScript"],
      githubUrl: "https://github.com/satmul-desu",
      featured: true,
    },
    {
      title: "Perbaikan Hardware & Maintenance PC",
      category: "IT Support Services",
      desc: "Layanan perbaikan hardware laptop/PC, pembersihan sistem pendingin, replacement sparepart, serta optimasi performa perangkat.",
      tech: ["Hardware Repair", "Diagnostics", "Maintenance"],
      featured: false,
    },
    {
      title: "Instalasi & Konfigurasi Jaringan LAN",
      category: "Networking Services",
      desc: "Perancangan dan pengkabelan jaringan LAN/UTP, crimping RJ45, serta konfigurasi router dan switch untuk skala lokal.",
      tech: ["UTP / LAN", "MikroTik Basic", "Network Setup"],
      featured: false,
    },
  ] as Project[],
};
