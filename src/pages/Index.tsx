import { Helmet } from "react-helmet-async";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { HighlightSection } from "@/components/HighlightSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Footer } from "@/components/Footer";
import { profile } from "@/data/profile";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>{profile.name} - {profile.title} Portfolio</title>
        <meta
          name="description"
          content={`Portfolio ${profile.name}, ${profile.title} dengan proyek inovatif termasuk platform kompetisi Juara 2 tingkat nasional.`}
        />
      </Helmet>

      <main className="min-h-screen bg-background">
        {/* Bagian 1: Hero / Siapa Saya */}
        <HeroSection />

        {/* Bagian 2: Tentang Saya */}
        <AboutSection />

        {/* Bagian 3: Proyek Highlight (Juara 2) */}
        <HighlightSection />

        {/* Bagian 4: Semua Proyek */}
        <ProjectsSection />

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
};

export default Index;
