export interface Profile {
  name: string;
  firstName: string;
  title: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  avatar: string;
  skills: string[];
  interests: string[];
  workApproach: string[];
  social: {
    github?: string;
    linkedin?: string;
    email?: string;
    instagram?: string;
  };
  stats: {
    projects: number;
    achievement: string;
    experience: string;
  };
}

export const profile: Profile = {
  name: "Ahmad Rizky Pratama",
  firstName: "Ahmad",
  title: "Fullstack Developer",
  tagline: "Membangun solusi digital yang berdampak",
  shortDescription: "Seorang developer yang passionate dalam menciptakan aplikasi web modern, inovatif, dan memberikan pengalaman pengguna yang luar biasa.",
  fullDescription: `Saya adalah seorang Fullstack Developer dengan fokus pada pengembangan aplikasi web modern menggunakan teknologi terkini. Perjalanan saya di dunia programming dimulai sejak bangku SMA, dan terus berkembang hingga saat ini.

Ketertarikan saya pada teknologi web dimulai dari keinginan untuk menciptakan solusi digital yang tidak hanya fungsional, tetapi juga memberikan pengalaman pengguna yang optimal. Saya percaya bahwa teknologi seharusnya memudahkan kehidupan, bukan mempersulit.

Saya aktif mengikuti berbagai kompetisi teknologi sebagai wadah untuk mengasah kemampuan dan mengukur diri dengan developer lain. Pengalaman lomba mengajarkan saya untuk bekerja di bawah tekanan, berpikir kritis, dan menghasilkan solusi inovatif dalam waktu terbatas.`,
  avatar: "/profile-avatar.png",
  skills: [
    "React / Next.js",
    "TypeScript",
    "Laravel",
    "Node.js",
    "PostgreSQL / MySQL",
    "Tailwind CSS",
    "Docker",
    "Git & GitHub"
  ],
  interests: [
    "Pengembangan aplikasi web fullstack",
    "UI/UX Design dan user experience",
    "Kompetisi teknologi dan hackathon",
    "Open source contribution",
    "Sharing knowledge dan mentoring"
  ],
  workApproach: [
    "User-centered design - selalu mengutamakan kebutuhan pengguna",
    "Clean code dan best practices untuk maintainability",
    "Iterative development dengan feedback loop yang cepat",
    "Dokumentasi yang jelas untuk kolaborasi tim",
    "Continuous learning untuk mengikuti perkembangan teknologi"
  ],
  social: {
    github: "https://github.com/ahmadrizky",
    linkedin: "https://linkedin.com/in/ahmadrizky",
    email: "ahmad@example.com",
    instagram: "https://instagram.com/ahmadrizky"
  },
  stats: {
    projects: 3,
    achievement: "Juara 2 Nasional",
    experience: "2+ Tahun"
  }
};
