"use client";

import { motion } from "framer-motion";
import { Project } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Trophy, Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const categoryLabels = {
  competition: "Kompetisi",
  personal: "Personal",
  freelance: "Freelance",
};

const categoryColors = {
  competition: "bg-primary/20 text-primary border-primary/30",
  personal: "bg-accent/20 text-accent border-accent/30",
  freelance: "bg-secondary text-secondary-foreground border-border",
};

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group relative bg-gradient-card rounded-xl border border-border/50 overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-glow"
    >
      {/* Highlight indicator */}
      {project.isHighlight && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-500 to-orange-500" />
      )}

      <div className="p-6 space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <Calendar className="w-4 h-4" />
              <span>{project.year}</span>
            </div>
            <h3 className="text-xl font-semibold font-mono text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h3>
          </div>
          <Badge
            variant="outline"
            className={`shrink-0 ${categoryColors[project.category]}`}
          >
            {categoryLabels[project.category]}
          </Badge>
        </div>

        {/* Summary */}
        <p className="text-muted-foreground leading-relaxed line-clamp-2">
          {project.summary}
        </p>

        {/* Achievement */}
        {project.achievement && (
          <div className="flex items-center gap-2 text-yellow-500">
            <Trophy className="w-4 h-4" />
            <span className="text-sm font-medium">
              {project.achievement.title} - {project.achievement.event}
            </span>
          </div>
        )}

        {/* Tech Stack Preview */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.frontend.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-mono bg-muted rounded-md text-muted-foreground"
            >
              {tech}
            </span>
          ))}
          {project.techStack.frontend.length + project.techStack.backend.length > 3 && (
            <span className="px-2.5 py-1 text-xs font-mono bg-muted rounded-md text-muted-foreground">
              +{project.techStack.frontend.length + project.techStack.backend.length - 3}
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-border/50">
          <div className="flex items-center gap-4">
            {project.links.demo && (
              <a
                href={project.links.demo}
                onClick={(e) => e.stopPropagation()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Demo
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                onClick={(e) => e.stopPropagation()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            )}
          </div>
          <Link
            to={`/project/${project.id}`}
            className="flex items-center gap-1 text-sm font-medium text-primary hover:underline"
          >
            Detail
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
};
