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
    website?: string;
  };
  stats: {
    projects: number;
    experience: string;
  };
}

export const profile: Profile = {
  name: "Damarjati Adiyuda Muktitama",
  firstName: "Damarjati",
  title: "Backend & Mobile Developer",
  tagline: "Membangun sistem backend dan aplikasi yang scalable dan berdampak",
  shortDescription:
    "Software Engineering student di Universitas Gadjah Mada dengan fokus pada backend dan mobile development. Berpengalaman membangun RESTful API, aplikasi mobile Flutter, serta sistem terintegrasi dengan payment, logistik, dan mapping services.",
  fullDescription: `Saya adalah mahasiswa Diploma Software Engineering di Universitas Gadjah Mada dengan minat utama pada Backend Development dan Mobile Development. Saya terbiasa membangun sistem backend yang scalable, aman, dan terintegrasi dengan berbagai layanan pihak ketiga.

Pengalaman saya mencakup pengembangan RESTful API menggunakan Laravel dan Node.js, pengelolaan database relasional, serta integrasi sistem seperti Midtrans, RajaOngkir, dan OpenStreetMap. Selain backend, saya juga berpengalaman mengembangkan aplikasi mobile menggunakan Flutter untuk Android dan iOS.

Saya aktif mengikuti kompetisi teknologi dan pernah meraih Juara 2 pada Hology Software Development Competition 2025. Pengalaman ini melatih saya untuk bekerja dalam tim, berpikir kritis, dan menghasilkan solusi berkualitas dalam waktu terbatas. Saya percaya bahwa teknologi yang baik adalah teknologi yang memberikan dampak nyata dan memudahkan penggunanya.`,
  avatar: "/Foto Formal.png",
  skills: [
    "Laravel",
    "Node.js",
    "Express.js",
    "RESTful API",
    "MySQL",
    "PostgreSQL",
    "Firebase",
    "Flutter",
    "Next.js",
    "Vue.js",
    "JavaScript",
    "TypeScript",
    "Docker",
    "Git",
    "Midtrans",
    "RajaOngkir",
    "OpenStreetMap",
    "OpenRouteService",
    "Machine Learning"
  ],

  interests: [
    "Backend system architecture",
    "Mobile application development",
    "Scalable web applications",
    "Technology competitions & hackathons",
    "Learning new technologies and system integration"
  ],
  workApproach: [
    "Merancang backend yang scalable dan maintainable",
    "Clean code dan struktur API yang konsisten",
    "Fokus pada reliability, performance, dan security",
    "Kolaborasi aktif dengan frontend dan mobile developer",
    "Continuous improvement melalui testing dan feedback"
  ],
  social: {
    linkedin: "https://www.linkedin.com/in/damarjati-adiyuda-muktitama-43bb34287/",
    email: "djamgt23@gmail.com",
    website: "https://damarjatiam.my.id"
  },
  stats: {
    projects: 4,
    experience: "2.5+ Tahun"
  }
};
