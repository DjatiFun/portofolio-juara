export interface Profile {
  name: string;
  title: string;
  tagline: string;
  description: string;
  avatar: string;
  skills: string[];
  social: {
    github?: string;
    linkedin?: string;
    email?: string;
    instagram?: string;
  };
  stats: {
    projects: number;
    achievement: string;
    yearActive: number;
  };
}

export const profile: Profile = {
  name: "Ahmad Rizky Pratama",
  title: "Fullstack Developer",
  tagline: "Membangun solusi digital yang berdampak",
  description: `Seorang developer yang passionate dalam menciptakan aplikasi web modern dan inovatif. Fokus pada pengembangan solusi teknologi yang tidak hanya fungsional, tetapi juga memberikan pengalaman pengguna yang luar biasa.

Dengan pengalaman dalam berbagai proyek kompetisi dan freelance, saya telah mengasah kemampuan dalam React, TypeScript, Node.js, dan berbagai teknologi modern lainnya. Berkomitmen untuk terus belajar dan berkontribusi pada komunitas developer Indonesia.`,
  avatar: "/profile-avatar.png",
  skills: [
    "React",
    "TypeScript",
    "Node.js",
    "Next.js",
    "PostgreSQL",
    "Tailwind CSS",
    "Docker",
    "Git",
  ],
  social: {
    github: "https://github.com/ahmadrizky",
    linkedin: "https://linkedin.com/in/ahmadrizky",
    email: "ahmad@example.com",
    instagram: "https://instagram.com/ahmadrizky",
  },
  stats: {
    projects: 3,
    achievement: "Juara 2 Nasional",
    yearActive: 2024,
  },
};
