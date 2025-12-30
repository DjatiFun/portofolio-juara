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
    id: "tuntun-app",
    title: "Tuntun - Assistive App for Visually Impaired",
    year: 2025,
    category: "competition",
    isHighlight: true,
    summary: "Aplikasi mobile pendamping untuk tunanetra yang menyediakan deteksi rintangan real-time, navigasi berbasis peta, serta panduan suara untuk mobilitas mandiri di ruang publik.",
    description: `Tuntun adalah aplikasi mobile inovatif yang dirancang untuk membantu pengguna tunanetra bergerak secara aman dan mandiri di lingkungan publik. Menggabungkan computer vision untuk deteksi rintangan, integrasi peta dari OpenStreetMap dan OpenRouteService, serta fitur voice command dan audio feedback.

Aplikasi ini memberikan pengalaman aksesibel penuh dengan UI/UX yang dioptimalkan untuk screen reader seperti TalkBack, memungkinkan pengguna menyampaikan tujuan melalui suara dan menerima panduan navigasi langkah demi langkah secara audio.`,
    whyThisProject: `Proyek ini memiliki dampak sosial tinggi dengan memberdayakan penyandang disabilitas visual di Indonesia. Pengembangan melibatkan testing langsung dengan user nyata dan iterasi berdasarkan feedback, menunjukkan komitmen terhadap inclusive design.

Relevansi:
- Solusi teknologi untuk masalah aksesibilitas nyata
- Kombinasi backend scalable dan mobile development cross-platform
- Pengalaman fullstack dengan integrasi third-party services kompleks
- Kontribusi terhadap inklusi sosial melalui teknologi`,
    features: [
      "Deteksi rintangan real-time menggunakan computer vision via kamera",
      "Navigasi step-by-step dengan integrasi OpenStreetMap & OpenRouteService",
      "Speech-to-text untuk input tujuan secara suara",
      "Text-to-speech untuk feedback navigasi audio",
      "UI/UX fully accessible dengan kompatibilitas TalkBack/VoiceOver",
      "Routing dan location processing real-time",
      "Testing dengan user tunanetra untuk validasi fitur"
    ],
    techStack: {
      frontend: ["Flutter", "Dart"],
      backend: ["Flask"], // Asumsi RESTful
      database: ["Mysl", "MongoDB"], // Untuk location data
      tools: ["Firebase", "Yolo", "OpenStreetMap API", "Git", "Android Studio"]
    },
    role: "Backend & Mobile Developer",
    responsibilities: [
      "Designed and built RESTful APIs to support navigation, location processing, and obstacle-detection data flow.",
      "Developed backend logic for routing, user actions, and integration with mapping services.",
      "Implemented efficient data handling and ensured stable communication between backend and mobile app.",
      "Optimized server performance, debugged issues, and ensured overall system reliability.",
      "Built the mobile application using Flutter for both Android and iOS.",
      "Integrated computer vision for real-time obstacle detection.",
      "Implemented speech-to-text and text-to-speech features.",
      "Created accessible UI/UX and conducted user testing with visually impaired individuals."
    ],
    achievement: {
      title: "Juara 2",
      event: "Hology Software Development Competition",
      level: "Nasional",
      year: 2025
    },
    media: [
      {
        type: "youtube",
        videoId: "H7f9_UtPBtw",
        title: "Demo lengkap Tuntun"
      }
    ],
    links: {
      // demo: jika ada link Play Store/App Store
      // github jika open source
    }
  },
  {
    id: "ambilprestasi-platform",
    title: "AmbilPrestasi - Learning Platform for Competitions",
    year: 2025,
    category: "freelance",
    isHighlight: false,
    summary: "Platform pembelajaran premium berbasis web yang menyediakan kursus terstruktur untuk meningkatkan skill presentasi, penyusunan proposal, kesiapan kompetisi, dan kompetensi lainnya guna meraih prestasi akademik maupun non-akademik.",
    description: `AmbilPrestasi adalah platform e-learning inovatif yang dirancang khusus untuk membantu pengguna di Indonesia meraih prestasi melalui pembelajaran terstruktur dan berkualitas. Platform ini menyediakan ratusan materi video, modul PDF, forum diskusi, serta konsultasi langsung dengan mentor berpengalaman.

Dengan model berlangganan terjangkau, pengguna mendapatkan akses penuh ke semua kursus, update berkala, dan komunitas eksklusif. Platform ini telah membantu lebih dari 300 pemenang lomba dan memiliki ribuan peserta aktif, membuktikan dampak nyata dalam meningkatkan kemampuan kompetitif peserta.`,
    whyThisProject: `Proyek ini merupakan kontribusi signifikan dalam ekosistem pendidikan dan pengembangan skill di Indonesia, khususnya untuk persiapan kompetisi. Sebagai backend developer, saya bertanggung jawab penuh atas fondasi teknis platform yang scalable dan secure.

Relevansi:
- Menyelesaikan masalah aksesibilitas pembelajaran berkualitas untuk prestasi
- Mendemonstrasikan kemampuan backend development modern
- Dampak sosial tinggi dengan membantu ribuan peserta meraih prestasi
- Arsitektur yang mendukung pertumbuhan pengguna secara eksponensial

Inovasi Teknis:
- Sistem manajemen kursus dan enrollment yang efisien
- Role-based access control untuk student dan instructor
- Optimasi database untuk handling data kursus dan progress pengguna
- Integrasi seamless antara backend dan frontend`,
    features: [
      "Akses unlimited ke 180+ video pembelajaran dan 90+ modul PDF",
      "Sistem enrollment dan subscription management",
      "Progress tracking individual per kursus",
      "Forum diskusi dan konsultasi dengan mentor",
      "Role-based dashboard (student & instructor)",
      "Download materi PDF eksklusif",
      "Update kursus berkala dan komunitas eksklusif",
      "Personal learning path (pada paket premium)",
      "Secure authentication dan data protection"
    ],
    techStack: {
      frontend: ["React", "Next.js", "Tailwind CSS"], // Asumsi umum untuk platform modern; tanyakan jika berbeda
      backend: ["Node.js", "Express", "JWT"], // Asumsi berdasarkan RESTful API; tanyakan detail framework
      database: ["MySQL"], // Asumsi scalable; tanyakan yang actual
      tools: ["Docker", "Postman", "Git"]
    },
    role: "Backend Developer",
    responsibilities: [
      "Designed and developed RESTful APIs for course management, enrollment, and learning progress.",
      "Built and optimized the database schema to support scalable course and user data structures.",
      "Implemented secure user authentication and role-based access control (students & instructors).",
      "Developed backend business logic for course modules, lessons, and progress tracking.",
      "Ensured seamless integration between frontend and backend services.",
      "Performed testing, debugging, and performance optimization for backend services."
    ],
    achievement: null,
    media: [
      {
        type: "image",
        src: "/images/projects/ambilprestasi.png",
        alt: "Dashboard utama AmbilPrestasi"
      },
    ],
    links: {
      demo: "https://ambilprestasi.my.id"
    }
  },

  {
    id: "samikados-ecommerce",
    title: "Samikados - On-Demand Printing E-Commerce",
    year: 2025,
    category: "personal",
    isHighlight: false,
    summary: "Platform e-commerce cetak custom on-demand untuk berbagai produk seperti merchandise, kaos, canvas, dengan sistem messaging antar pembeli-penjual serta pembayaran fleksibel.",
    description: `Samikados adalah platform e-commerce khusus jasa cetak custom yang menghubungkan pelanggan dengan penjual secara langsung. Mendukung berbagai kategori produk cetak seperti T-Shirt, merchandise, canvas, dan lainnya.

Fitur unggulan termasuk sistem messaging internal untuk koordinasi order, integrasi logistik real-time, dan opsi pembayaran beragam (transfer bank dengan pengiriman atau COD saat pickup di store).`,
    whyThisProject: `Proyek ini menunjukkan kemampuan membangun backend e-commerce yang robust dan scalable, dengan integrasi payment gateway serta API eksternal logistik – pengalaman industri nyata yang relevan untuk sistem transaksional.`,
    features: [
      "Katalog produk custom printing multi-kategori",
      "Sistem messaging internal antara customer dan seller",
      "Integrasi RajaOngkir untuk kalkulasi ongkos kirim real-time",
      "Payment gateway Midtrans (multi metode)",
      "Opsi pembayaran transfer + delivery atau COD pickup",
      "Manajemen order dan tracking",
      "Dashboard seller dan admin"
    ],
    techStack: {
      frontend: ["Vue.js", "Blade"], // Asumsi
      backend: ["Laravel", "PHP"], // Umum untuk e-commerce Indonesia dengan payment integration
      database: ["MySQL"],
      tools: ["RajaOngkir API", "Midtrans", "Git"]
    },
    role: "Backend Developer",
    responsibilities: [
      "Developed a robust and scalable backend application for the Samikados E-commerce platform.",
      "Integrated logistics functionality using the RajaOngkir API for real-time shipping cost calculations.",
      "Implemented secure and reliable payment processing through Midtrans payment gateway integration."
    ],
    achievement: null,
    media: [
      {
        type: "image",
        src: "/images/projects/samikados-admin.png",
        alt: "Homepage Samikados Admin Panel"
      },
      {
        type: "image",
        src: "/images/projects/samikados-seller.png",
        alt: "Homepage Samikados Seller Panel"
      },
      {
        type: "image",
        src: "/images/projects/samikados.png",
        alt: "Homepage Samikados Customer"
      },
    ],
    links: {
      // demo: jika ada URL live
    }
  },
  {
    id: "rdk-ugm-web",
    title: "RDK UGM - Ramadhan di Kampus Website",
    year: 2025,
    category: "personal",
    isHighlight: false,
    summary: "Website resmi untuk event tahunan Ramadhan di Kampus UGM, menyediakan informasi jadwal, pembicara, agenda harian, donasi, serta fitur interaktif seperti game RDK Quest.",
    description: `RDK UGM adalah platform web resmi untuk program Ramadhan di Kampus yang diselenggarakan oleh LDK Jama’ah Shalahuddin Universitas Gadjah Mada. Situs ini menyajikan informasi lengkap tentang jadwal kegiatan (Mimbar Subuh, SAMUDRA, Public Lecture), profil pembicara, opsi donasi, serta elemen interaktif untuk memperkaya pengalaman pengunjung selama bulan Ramadan.`,
    whyThisProject: `Kontribusi pada event keagamaan dan sosial berskala universitas ternama, dengan fokus pada interactive frontend dan accessibility untuk audiens luas.`,
    features: [
      "Jadwal dinamis kegiatan Ramadan harian",
      "Profil dan agenda pembicara",
      "Fitur donasi (uang, logistik, makanan)",
      "Interactive game 'RDK Quest'",
      "Responsive design untuk akses multi-device",
      "Informasi event lengkap dan update real-time"
    ],
    techStack: {
      frontend: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Phaser3"],
      backend: [], // Jika static atau minimal
      database: [],
      tools: ["Vercel", "Figma", "Git"]
    },
    role: "Frontend Developer",
    responsibilities: [
      "Implemented interactive components such as the “RDK Quest” game interface.",
      "Built dynamic schedule and agenda pages for daily Ramadan activities.",
      "Integrated donation UI features to support user donations.",
      "Ensured accessibility and usability across devices."
    ],
    achievement: null,
    media: [
      {
        type: "image",
        src: "images/projects/rdk-foto.png",
        alt: "Homepage RDK UGM"
      },
      {
        type: "image",
        src: "images/projects/rdk-quest.png",
        alt: "Interface RDK Quest game"
      }
    ],
    links: {
      demo: "https://js.ugm.ac.id/rdk" // Berdasarkan info aktual
    }
  }
];

// Helper functions tetap sama
export const getHighlightProject = (): Project | undefined => {
  return projects.find(p => p.isHighlight);
};

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(p => p.id === id);
};

export const getProjectsByCategory = (category: Project["category"] | "all"): Project[] => {
  if (category === "all") return projects;
  return projects.filter(p => p.category === category);
};