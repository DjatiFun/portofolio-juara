"use client";

import { motion } from "framer-motion";
import { getHighlightProject } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Trophy,
  Calendar,
  ExternalLink,
  Github,
  Layers,
  CheckCircle2,
  ArrowRight,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";

export const HighlightSection = () => {
  const project = getHighlightProject();

  if (!project) return null;

  return (
    <section className="py-20 md:py-28 bg-gradient-hero relative overflow-hidden" id="highlight">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-12"
        >
          {/* Section Header */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 text-accent">
            <Trophy className="w-4 h-4" />
            <span className="text-sm font-medium">Proyek Unggulan</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-mono">
            <span className="text-foreground">Highlight </span>
            <span className="text-gradient-accent">Achievement</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Proyek yang berhasil meraih penghargaan dan menjadi bukti kemampuan serta dedikasi dalam pengembangan solusi digital.
          </p>
        </motion.div>

        {/* Highlight Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative p-8 md:p-10 rounded-2xl bg-gradient-card border border-accent/30 shadow-elevated overflow-hidden">
            {/* Achievement Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: "spring" }}
              className="absolute top-6 right-6"
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30">
                <Award className="w-5 h-5 text-yellow-500" />
                <span className="font-bold text-yellow-500">{project.achievement?.title}</span>
              </div>
            </motion.div>

            {/* Content */}
            <div className="space-y-6">
              {/* Header */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-muted-foreground text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>{project.year}</span>
                  <span className="w-1 h-1 bg-muted-foreground rounded-full" />
                  <span>{project.achievement?.event}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold font-mono text-gradient-primary">
                  {project.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.summary}
                </p>
              </div>

              {/* Achievement Details */}
              <div className="flex flex-wrap gap-3">
                <Badge variant="outline" className="bg-accent/10 text-accent border-accent/30 py-1.5 px-3">
                  {project.achievement?.level}
                </Badge>
                <Badge variant="outline" className="bg-secondary text-secondary-foreground py-1.5 px-3">
                  {project.role}
                </Badge>
              </div>

              {/* Features Preview */}
              <div className="grid md:grid-cols-2 gap-2">
                {project.features.slice(0, 4).map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-start gap-2 text-muted-foreground text-sm"
                  >
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* Tech Stack Preview */}
              <div className="flex items-center gap-3 flex-wrap">
                <Layers className="w-4 h-4 text-muted-foreground" />
                {[...project.techStack.frontend.slice(0, 2), ...project.techStack.backend.slice(0, 1)].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-mono bg-muted rounded-md text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
                <span className="text-xs text-muted-foreground">
                  +{project.techStack.frontend.length + project.techStack.backend.length - 3} lainnya
                </span>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-4 pt-4 border-t border-border">
                <Button asChild className="gap-2">
                  <Link to={`/project/${project.id}`}>
                    Lihat Detail
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                {project.links.demo && (
                  <Button variant="outline" asChild className="gap-2">
                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  </Button>
                )}
                {project.links.github && (
                  <Button variant="outline" asChild className="gap-2">
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
