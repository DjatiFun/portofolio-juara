"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projects, Project } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { Code2, Filter } from "lucide-react";

type CategoryFilter = "all" | "competition" | "personal" | "freelance";

export const ProjectsSection = () => {
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
    <section className="py-20 md:py-28 bg-background" id="projects">
      <div className="container px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary">
            <Code2 className="w-4 h-4" />
            <span className="text-sm font-medium">Portfolio Proyek</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-mono">
            <span className="text-foreground">Semua </span>
            <span className="text-gradient-primary">Proyek</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Kumpulan proyek yang menunjukkan kemampuan teknis dan kreativitas dalam pengembangan software.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          <Filter className="w-5 h-5 text-muted-foreground self-center mr-2" />
          {filterButtons.map((btn) => (
            <motion.button
              key={btn.value}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setCategoryFilter(btn.value)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                categoryFilter === btn.value
                  ? "bg-primary text-primary-foreground shadow-glow"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {btn.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12 text-muted-foreground"
          >
            Tidak ada proyek dalam kategori ini.
          </motion.div>
        )}
      </div>
    </section>
  );
};
