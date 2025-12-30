export interface ProjectMedia {
  type: "image" | "youtube";
  src?: string;
  alt?: string;
  videoId?: string;
  title?: string;
}

export interface ProjectTechStack {
  frontend: string[];
  backend: string[];
  database: string[];
  tools: string[];
}

export interface ProjectLinks {
  demo?: string;
  github?: string;
}

export interface ProjectAchievement {
  title: string;
  event: string;
  level: string;
  year: number;
}

export interface Project {
  id: string;
  title: string;
  year: number;
  category: "competition" | "personal" | "freelance";
  isHighlight: boolean;
  summary: string;
  description: string;
  whyThisProject: string;
  features: string[];
  techStack: ProjectTechStack;
  role: string;
  responsibilities: string[];
  achievement: ProjectAchievement | null;
  media: ProjectMedia[];
  links: ProjectLinks;
}

export const projects: Project[] = [
  {
    id: "smart-competition-web",
    title: "Smart Competition Web Platform",
    year: 2024,
    category: "competition",
    isHighlight: true,
    summary: "Platform web inovatif untuk mengelola kompetisi akademik secara digital dengan fitur real-time scoring dan analytics dashboard yang komprehensif.",
    description: `Smart Competition Web Platform adalah solusi digital komprehensif yang dirancang untuk merevolusi cara penyelenggaraan kompetisi akademik di Indonesia. Platform ini menggabungkan teknologi modern dengan kebutuhan praktis penyelenggara lomba, menciptakan ekosistem yang efisien dan transparan.

Platform ini mampu menangani registrasi peserta secara otomatis, penjadwalan dinamis, sistem penilaian real-time dengan validasi multi-layer, dan dashboard analytics yang memberikan insight mendalam tentang performa peserta dan efektivitas kompetisi.

Dengan antarmuka yang intuitif dan responsif, baik peserta, juri, maupun panitia dapat mengakses informasi yang relevan dengan mudah dari berbagai perangkat. Sistem notifikasi terintegrasi memastikan semua stakeholder selalu mendapat update terbaru.

Keunggulan utama platform ini adalah kemampuannya untuk mengintegrasikan berbagai aspek kompetisi dalam satu sistem terpadu, mengurangi beban administratif hingga 70% dan meningkatkan akurasi penilaian dengan sistem validasi berlapis.`,
    whyThisProject: `Proyek ini dikembangkan sebagai respons terhadap tantangan nyata yang dihadapi penyelenggara kompetisi akademik di Indonesia. Banyak event masih menggunakan proses manual yang rentan error dan memakan waktu.

**Relevansi untuk Lomba:**
- Menyelesaikan masalah nyata dengan solusi teknologi yang terukur
- Mendemonstrasikan kemampuan teknis fullstack development
- Mengintegrasikan berbagai teknologi modern dalam satu ekosistem
- Memiliki dampak sosial yang signifikan bagi komunitas pendidikan

**Aspek Inovasi:**
- Sistem scoring real-time dengan transparansi penuh
- Dashboard analytics dengan visualisasi data yang informatif
- Arsitektur scalable yang dapat menangani ribuan peserta concurrent
- Integrasi notifikasi multi-channel (email, push, in-app)

**Eksekusi Teknis:**
- Clean architecture dengan separation of concerns yang jelas
- Testing coverage tinggi untuk memastikan reliability
- Dokumentasi lengkap untuk maintainability
- Security best practices untuk melindungi data pengguna`,
    features: [
      "Sistem registrasi peserta dengan validasi dokumen otomatis",
      "Dashboard admin dengan real-time analytics dan reporting",
      "Sistem penilaian multi-juri dengan weighted scoring algorithm",
      "Notifikasi real-time via email dan push notification",
      "Leaderboard dinamis dengan filter kategori dan pencarian",
      "Export data ke PDF dan Excel dengan template profesional",
      "Dark mode dan fully responsive design",
      "Sistem backup dan recovery otomatis",
      "Role-based access control untuk keamanan data",
      "API documentation dengan Swagger/OpenAPI"
    ],
    techStack: {
      frontend: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "React Query"],
      backend: ["Laravel", "PHP 8.2", "Redis", "Socket.io"],
      database: ["MySQL", "Redis Cache"],
      tools: ["Docker", "GitHub Actions", "Vercel", "Figma", "Postman"]
    },
    role: "Fullstack Developer",
    responsibilities: [
      "Merancang arsitektur sistem dan database schema dari awal",
      "Mengembangkan UI/UX design dengan pendekatan user-centered",
      "Membangun frontend dengan Next.js dan TypeScript",
      "Mengembangkan REST API dan WebSocket server dengan Laravel",
      "Implementasi sistem autentikasi dan otorisasi multi-role",
      "Optimasi performa frontend dan backend",
      "Setup CI/CD pipeline untuk automated deployment",
      "Menulis dokumentasi teknis dan user guide"
    ],
    achievement: {
      title: "Juara 2",
      event: "Kompetisi Inovasi Teknologi Indonesia",
      level: "Nasional",
      year: 2024
    },
    media: [
      {
        type: "image",
        src: "/images/projects/smart-competition-dashboard.png",
        alt: "Dashboard utama Smart Competition Platform"
      },
      {
        type: "image",
        src: "/images/projects/smart-competition-leaderboard.png",
        alt: "Tampilan leaderboard kompetisi real-time"
      },
      {
        type: "image",
        src: "/images/projects/smart-competition-scoring.png",
        alt: "Interface penilaian untuk juri"
      },
      {
        type: "youtube",
        videoId: "S-_FOYRC5Xw",
        title: "Demo lengkap Smart Competition Web Platform"
      }
    ],
    links: {
      demo: "https://smart-competition.vercel.app",
      github: "https://github.com/ahmadrizky/smart-competition"
    }
  },
  {
    id: "edulearn-lms",
    title: "EduLearn - Learning Management System",
    year: 2023,
    category: "freelance",
    isHighlight: false,
    summary: "Platform e-learning modern untuk institusi pendidikan dengan fitur video streaming, quiz interaktif, dan progress tracking.",
    description: `EduLearn adalah Learning Management System (LMS) yang dikembangkan untuk memenuhi kebutuhan transformasi digital di sektor pendidikan Indonesia. Platform ini menyediakan ekosistem pembelajaran online yang lengkap dan mudah digunakan.

Fitur unggulan mencakup sistem manajemen kursus yang fleksibel, video streaming dengan adaptive bitrate, quiz engine dengan berbagai tipe soal, dan sistem sertifikasi otomatis. Platform ini juga dilengkapi dengan analytics dashboard untuk memantau progress siswa dan efektivitas materi pembelajaran.

Dengan arsitektur microservices, platform ini mampu menangani ribuan pengguna concurrent tanpa mengalami degradasi performa, menjadikannya solusi ideal untuk institusi pendidikan skala menengah hingga besar.`,
    whyThisProject: `Proyek freelance ini mendemonstrasikan kemampuan untuk mengelola proyek end-to-end dengan client nyata. Dari tahap requirement gathering, design, development, hingga deployment dan training pengguna.

EduLearn juga menunjukkan kemampuan dalam membangun sistem yang scalable dan maintainable, dengan dokumentasi lengkap dan code quality yang tinggi. Pengalaman ini sangat relevan untuk menunjukkan profesionalisme dan kemampuan bekerja dalam konteks industri nyata.`,
    features: [
      "Manajemen kursus dan materi pembelajaran",
      "Video streaming dengan adaptive quality",
      "Quiz engine dengan auto-grading",
      "Forum diskusi dan live chat",
      "Progress tracking dan analytics",
      "Sistem sertifikasi digital",
      "Integrasi payment gateway",
      "Mobile-responsive design"
    ],
    techStack: {
      frontend: ["React", "TypeScript", "Chakra UI", "React Query"],
      backend: ["NestJS", "GraphQL", "Bull Queue"],
      database: ["MongoDB", "Elasticsearch"],
      tools: ["AWS S3", "CloudFront", "Stripe", "SendGrid"]
    },
    role: "Lead Developer",
    responsibilities: [
      "Analisis kebutuhan dan perancangan sistem",
      "Koordinasi dengan tim design dan QA",
      "Pengembangan core features",
      "Code review dan mentoring junior developer",
      "Deployment ke production environment",
      "Training dan handover ke client"
    ],
    achievement: null,
    media: [
      {
        type: "image",
        src: "/images/projects/edulearn-course.png",
        alt: "Halaman kursus EduLearn"
      },
      {
        type: "youtube",
        videoId: "S-_FOYRC5Xw",
        title: "Tutorial penggunaan EduLearn"
      }
    ],
    links: {
      demo: "https://edulearn-demo.vercel.app",
      github: "https://github.com/ahmadrizky/edulearn"
    }
  },
  {
    id: "devtools-cli",
    title: "DevTools CLI - Developer Productivity Suite",
    year: 2023,
    category: "personal",
    isHighlight: false,
    summary: "Command-line toolkit open-source untuk meningkatkan produktivitas developer dengan fitur scaffolding, code generation, dan automation.",
    description: `DevTools CLI adalah proyek open-source yang lahir dari kebutuhan personal untuk mengotomatisasi tugas-tugas repetitif dalam workflow pengembangan software. Tool ini menyediakan berbagai utilitas yang membantu developer bekerja lebih efisien.

Fitur utama mencakup project scaffolding dengan berbagai template, code generator untuk boilerplate umum, git workflow automation, dan integration dengan berbagai API populer. Semua command dirancang dengan prinsip UNIX philosophy - melakukan satu hal dengan baik.

Proyek ini telah mendapatkan lebih dari 500 stars di GitHub dan digunakan oleh developer dari berbagai negara, menunjukkan kualitas dan utilitas yang nyata.`,
    whyThisProject: `Proyek personal ini mendemonstrasikan passion terhadap software engineering dan kemampuan untuk mengidentifikasi serta menyelesaikan masalah yang dihadapi komunitas developer.

Dengan membangun tool yang digunakan oleh developer lain, proyek ini menunjukkan pemahaman mendalam tentang developer experience, clean code principles, dan kemampuan dokumentasi yang baik.`,
    features: [
      "Project scaffolding dengan 10+ template",
      "Code generator untuk komponen React",
      "Git workflow automation",
      "Environment management",
      "API integration helpers",
      "Interactive prompts",
      "Plugin system",
      "Comprehensive documentation"
    ],
    techStack: {
      frontend: ["Ink (React for CLI)", "TypeScript"],
      backend: ["Node.js", "Commander.js", "Inquirer"],
      database: ["SQLite (local config)"],
      tools: ["npm", "GitHub Actions", "Semantic Release"]
    },
    role: "Creator & Maintainer",
    responsibilities: [
      "Ideation dan product design",
      "Full development dari scratch",
      "Documentation dan tutorial writing",
      "Community management",
      "Issue triage dan pull request review",
      "Release management"
    ],
    achievement: null,
    media: [
      {
        type: "image",
        src: "/images/projects/devtools-cli-demo.png",
        alt: "Terminal demo DevTools CLI"
      }
    ],
    links: {
      demo: "https://www.npmjs.com/package/devtools-cli",
      github: "https://github.com/ahmadrizky/devtools-cli"
    }
  }
];

// Helper function to get highlight project
export const getHighlightProject = (): Project | undefined => {
  return projects.find(p => p.isHighlight);
};

// Helper function to get project by ID
export const getProjectById = (id: string): Project | undefined => {
  return projects.find(p => p.id === id);
};

// Helper function to filter projects by category
export const getProjectsByCategory = (category: Project["category"] | "all"): Project[] => {
  if (category === "all") return projects;
  return projects.filter(p => p.category === category);
};
