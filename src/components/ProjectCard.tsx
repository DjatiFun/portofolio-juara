import { Project } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Trophy, Calendar } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
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
  freelance: "bg-secondary text-secondary-foreground border-secondary",
};

export const ProjectCard = ({ project, onClick, index }: ProjectCardProps) => {
  return (
    <article
      onClick={onClick}
      className="group relative cursor-pointer bg-gradient-card rounded-xl border border-border/50 overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-glow animate-slide-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative p-6 space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <Calendar className="w-4 h-4" />
              <span>{project.year}</span>
            </div>
            <h3 className="text-xl font-semibold font-mono text-foreground group-hover:text-primary transition-colors duration-300">
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
        {project.category === "competition" && (
          <div className="flex items-center gap-2 text-primary">
            <Trophy className="w-4 h-4" />
            <span className="text-sm font-medium">{project.achievement}</span>
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
              +{project.techStack.frontend.length + project.techStack.backend.length - 3} lainnya
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 pt-2">
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
      </div>
    </article>
  );
};
