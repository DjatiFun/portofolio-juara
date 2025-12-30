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

export interface Project {
  id: string;
  title: string;
  year: number;
  category: "competition" | "personal" | "freelance";
  summary: string;
  description: string;
  whyThisProject: string;
  features: string[];
  techStack: ProjectTechStack;
  role: string;
  responsibilities: string[];
  achievement: string;
  media: ProjectMedia[];
  links: ProjectLinks;
}

export const projects: Project[] = [
  {
    id: "smart-competition-web",
    title: "Smart Competition Web Platform",
    year: 2024,
    category: "competition",
    summary: "Platform web inovatif untuk mengelola kompetisi akademik secara digital dengan fitur real-time scoring dan analytics.",
    description: `Smart Competition Web Platform adalah solusi digital komprehensif yang dirancang untuk merevolusi cara penyelenggaraan kompetisi akademik di Indonesia. Platform ini menggabungkan teknologi modern dengan kebutuhan praktis penyelenggara lomba, menciptakan ekosistem yang efisien dan transparan.

Platform ini mampu menangani registrasi peserta, penjadwalan otomatis, sistem penilaian real-time, dan dashboard analytics yang komprehensif. Dengan antarmuka yang intuitif, baik peserta maupun juri dapat mengakses informasi yang relevan dengan mudah.

Keunggulan utama platform ini adalah kemampuannya untuk mengintegrasikan berbagai aspek kompetisi dalam satu sistem terpadu, mengurangi beban administratif hingga 70% dan meningkatkan akurasi penilaian dengan sistem validasi berlapis.`,
    whyThisProject: `Proyek ini sangat relevan untuk lomba teknologi karena menyelesaikan masalah nyata yang dihadapi oleh penyelenggara kompetisi di Indonesia. Dengan memanfaatkan teknologi web modern, platform ini mendemonstrasikan kemampuan teknis tingkat lanjut sekaligus memberikan dampak sosial yang signifikan.

Aspek inovasi terlihat dari implementasi sistem scoring real-time yang transparan, integrasi notifikasi multi-channel, dan dashboard analytics yang memberikan insight mendalam tentang performa peserta. Proyek ini juga menunjukkan pemahaman mendalam tentang User Experience, accessibility, dan security best practices.

Kombinasi antara kompleksitas teknis, relevansi sosial, dan eksekusi yang matang menjadikan proyek ini representasi ideal dari kemampuan pengembangan software modern.`,
    features: [
      "Sistem registrasi peserta dengan validasi dokumen otomatis",
      "Dashboard admin dengan real-time analytics dan reporting",
      "Sistem penilaian multi-juri dengan weighted scoring",
      "Notifikasi real-time via email dan push notification",
      "Leaderboard dinamis dengan filter kategori",
      "Export data ke PDF dan Excel",
      "Dark mode dan responsive design",
      "Sistem backup dan recovery otomatis"
    ],
    techStack: {
      frontend: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      backend: ["Node.js", "Express", "Socket.io"],
      database: ["PostgreSQL", "Redis"],
      tools: ["Docker", "GitHub Actions", "Vercel", "Figma"]
    },
    role: "Fullstack Developer",
    responsibilities: [
      "Merancang arsitektur sistem dan database schema",
      "Mengembangkan frontend dengan React dan TypeScript",
      "Membangun REST API dan WebSocket server",
      "Implementasi sistem autentikasi dan otorisasi",
      "Optimasi performa dan SEO",
      "Deployment dan maintenance production server"
    ],
    achievement: "Juara 2 Tingkat Nasional - Kompetisi Inovasi Teknologi Indonesia 2024",
    media: [
      {
        type: "image",
        src: "/images/projects/smart-competition-dashboard.png",
        alt: "Dashboard utama Smart Competition Platform"
      },
      {
        type: "image",
        src: "/images/projects/smart-competition-leaderboard.png",
        alt: "Tampilan leaderboard kompetisi"
      },
      {
        type: "youtube",
        videoId: "S-_FOYRC5Xw",
        title: "Demo lengkap Smart Competition Web Platform"
      }
    ],
    links: {
      demo: "https://smart-competition.vercel.app",
      github: "https://github.com/developer/smart-competition"
    }
  },
  {
    id: "edulearn-lms",
    title: "EduLearn - Learning Management System",
    year: 2023,
    category: "freelance",
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
      frontend: ["Next.js", "TypeScript", "Chakra UI", "React Query"],
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
    achievement: "Successfully deployed untuk 5 institusi pendidikan dengan 10,000+ active users",
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
      github: "https://github.com/developer/edulearn"
    }
  },
  {
    id: "devtools-cli",
    title: "DevTools CLI - Developer Productivity Suite",
    year: 2023,
    category: "personal",
    summary: "Command-line toolkit untuk meningkatkan produktivitas developer dengan fitur scaffolding, code generation, dan automation.",
    description: `DevTools CLI adalah proyek open-source yang lahir dari kebutuhan personal untuk mengotomatisasi tugas-tugas repetitif dalam workflow pengembangan software. Tool ini menyediakan berbagai utilitas yang membantu developer bekerja lebih efisien.

Fitur utama mencakup project scaffolding dengan berbagai template, code generator untuk boilerplate umum, git workflow automation, dan integration dengan berbagai API populer. Semua command dirancang dengan prinsip UNIX philosophy - melakukan satu hal dengan baik.

Proyek ini telah mendapatkan lebih dari 500 stars di GitHub dan digunakan oleh developer dari berbagai negara, menunjukkan kualitas dan utilitas yang nyata.`,
    whyThisProject: `Proyek personal ini mendemonstrasikan passion terhadap software engineering dan kemampuan untuk mengidentifikasi serta menyelesaikan masalah yang dihadapi komunitas developer.

Dengan membangun tool yang digunakan oleh developer lain, proyek ini menunjukkan pemahaman mendalam tentang developer experience, clean code principles, dan kemampuan dokumentasi yang baik. Kontribusi ke open-source juga menunjukkan kolaborasi dan tanggung jawab terhadap komunitas.`,
    features: [
      "Project scaffolding dengan 10+ template",
      "Code generator untuk komponen React",
      "Git workflow automation (commit, branch, release)",
      "Environment management",
      "API integration helpers",
      "Interactive prompts dan colorful output",
      "Plugin system untuk extensibility",
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
    achievement: "500+ GitHub Stars, 50+ Contributors, Featured di JavaScript Weekly",
    media: [
      {
        type: "image",
        src: "/images/projects/devtools-cli-demo.png",
        alt: "Terminal demo DevTools CLI"
      }
    ],
    links: {
      demo: "https://www.npmjs.com/package/devtools-cli",
      github: "https://github.com/developer/devtools-cli"
    }
  }
];
