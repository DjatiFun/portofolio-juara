import { Project } from "@/data/projects";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  ExternalLink,
  Github,
  Trophy,
  Calendar,
  User,
  Layers,
  CheckCircle2,
  Play,
} from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  open: boolean;
  onClose: () => void;
}

const categoryLabels = {
  competition: "Kompetisi",
  personal: "Personal",
  freelance: "Freelance",
};

export const ProjectModal = ({ project, open, onClose }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0 bg-card border-border overflow-hidden">
        <ScrollArea className="max-h-[90vh]">
          <div className="p-6 md:p-8 space-y-8">
            {/* Header */}
            <DialogHeader className="space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="outline" className="bg-primary/20 text-primary border-primary/30">
                  {categoryLabels[project.category]}
                </Badge>
                <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>{project.year}</span>
                </div>
              </div>
              <DialogTitle className="text-2xl md:text-3xl font-mono text-gradient-primary">
                {project.title}
              </DialogTitle>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {project.summary}
              </p>
            </DialogHeader>

            {/* Achievement */}
            {project.achievement && (
              <div className="flex items-center gap-3 p-4 bg-primary/10 rounded-lg border border-primary/20">
                <Trophy className="w-6 h-6 text-primary shrink-0" />
                <span className="font-medium text-primary">{project.achievement}</span>
              </div>
            )}

            {/* Role & Responsibilities */}
            <section className="space-y-4">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold">Role: {project.role}</h3>
              </div>
              <ul className="grid gap-2">
                {project.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-1 shrink-0" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Description */}
            <section className="space-y-4">
              <h3 className="text-lg font-semibold">Deskripsi Proyek</h3>
              <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {project.description}
              </div>
            </section>

            {/* Why This Project */}
            <section className="space-y-4 p-5 bg-secondary/50 rounded-lg border border-border">
              <h3 className="text-lg font-semibold text-gradient-accent">
                Mengapa Proyek Ini Relevan?
              </h3>
              <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {project.whyThisProject}
              </div>
            </section>

            {/* Features */}
            <section className="space-y-4">
              <h3 className="text-lg font-semibold">Fitur Utama</h3>
              <ul className="grid md:grid-cols-2 gap-2">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-1 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Tech Stack */}
            <section className="space-y-4">
              <div className="flex items-center gap-2">
                <Layers className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold">Tech Stack</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {Object.entries(project.techStack).map(([category, techs]) => (
                  <div key={category} className="space-y-2">
                    <h4 className="text-sm font-medium text-muted-foreground capitalize">
                      {category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {techs.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 text-sm font-mono bg-muted rounded-md text-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Media */}
            {project.media.length > 0 && (
              <section className="space-y-4">
                <h3 className="text-lg font-semibold">Media</h3>
                <div className="grid gap-4">
                  {project.media.map((item, i) => (
                    <div key={i} className="rounded-lg overflow-hidden border border-border">
                      {item.type === "youtube" && item.videoId ? (
                        <div className="relative aspect-video">
                          <iframe
                            src={`https://www.youtube.com/embed/${item.videoId}`}
                            title={item.title || "Video demo"}
                            className="absolute inset-0 w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                      ) : item.type === "image" && item.src ? (
                        <div className="relative aspect-video bg-muted flex items-center justify-center">
                          <div className="text-muted-foreground text-sm">
                            {item.alt || "Project image"}
                          </div>
                        </div>
                      ) : null}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Links */}
            <div className="flex flex-wrap gap-3 pt-4 border-t border-border">
              {project.links.demo && (
                <Button asChild className="gap-2">
                  <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                    Lihat Demo
                  </a>
                </Button>
              )}
              {project.links.github && (
                <Button variant="outline" asChild className="gap-2">
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                    Source Code
                  </a>
                </Button>
              )}
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
