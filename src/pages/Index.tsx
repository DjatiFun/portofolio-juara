import { useState } from "react";
import { projects, Project } from "@/data/projects";
import { HeroSection } from "@/components/HeroSection";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectModal } from "@/components/ProjectModal";
import { Helmet } from "react-helmet-async";
import { Filter } from "lucide-react";

type CategoryFilter = "all" | "competition" | "personal" | "freelance";

const Index = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>("all");

  const filteredProjects = projects.filter(
    (project) => categoryFilter === "all" || project.category === categoryFilter
  );

  const filterButtons: { value: CategoryFilter; label: string }[] = [
    { value: "all", label: "Semua" },
    { value: "competition", label: "Kompetisi" },
    { value: "personal", label: "Personal" },
    { value: "freelance", label: "Freelance" },
  ];

  return (
    <>
      <Helmet>
        <title>Portfolio Developer - Proyek & Karya Digital</title>
        <meta
          name="description"
          content="Portfolio developer dengan proyek inovatif, termasuk platform kompetisi yang meraih Juara 2 tingkat nasional. Lihat karya digital terbaik."
        />
      </Helmet>

      <main className="min-h-screen bg-background">
        <HeroSection />

        {/* Projects Section */}
        <section className="container px-4 py-16 md:py-24" id="projects">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-mono">
              <span className="text-gradient-primary">Proyek</span> Unggulan
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Berbagai proyek yang menunjukkan kemampuan teknis dan kreativitas dalam pengembangan software.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            <Filter className="w-5 h-5 text-muted-foreground self-center mr-2" />
            {filterButtons.map((btn) => (
              <button
                key={btn.value}
                onClick={() => setCategoryFilter(btn.value)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  categoryFilter === btn.value
                    ? "bg-primary text-primary-foreground shadow-glow"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              Tidak ada proyek dalam kategori ini.
            </div>
          )}
        </section>

        {/* Footer */}
        <footer className="border-t border-border py-8">
          <div className="container px-4 text-center text-muted-foreground text-sm">
            <p>© 2024 Portfolio Developer. Dibuat dengan ❤️ dan kopi.</p>
          </div>
        </footer>

        {/* Project Modal */}
        <ProjectModal
          project={selectedProject}
          open={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </main>
    </>
  );
};

export default Index;
