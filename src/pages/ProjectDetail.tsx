"use client";

import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { getProjectById } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Trophy,
  Calendar,
  User,
  Layers,
  CheckCircle2,
  Award,
  Target,
} from "lucide-react";

const categoryLabels = {
  competition: "Kompetisi",
  personal: "Personal",
  freelance: "Freelance",
};

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? getProjectById(id) : undefined;

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{project.title} - Portfolio Ahmad Rizky Pratama</title>
        <meta name="description" content={project.summary} />
      </Helmet>

      <main className="min-h-screen bg-background">
        {/* Header */}
        <div className="bg-gradient-hero border-b border-border">
          <div className="container px-4 py-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Kembali ke Beranda
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-hero py-16 md:py-24">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto space-y-6">
              {/* Badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-wrap items-center gap-3"
              >
                <Badge variant="outline" className="bg-primary/20 text-primary border-primary/30">
                  {categoryLabels[project.category]}
                </Badge>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>{project.year}</span>
                </div>
                {project.achievement && (
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30">
                    <Award className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm font-medium text-yellow-500">
                      {project.achievement.title}
                    </span>
                  </div>
                )}
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold font-mono text-gradient-primary"
              >
                {project.title}
              </motion.h1>

              {/* Summary */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-muted-foreground leading-relaxed"
              >
                {project.summary}
              </motion.p>

              {/* Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
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
              </motion.div>
            </div>
          </div>
        </section>

        {/* Achievement */}
        {project.achievement && (
          <section className="py-12 bg-gradient-to-r from-yellow-500/5 via-orange-500/5 to-yellow-500/5 border-y border-yellow-500/20">
            <div className="container px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6 text-center md:text-left"
              >
                <div className="p-4 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20">
                  <Trophy className="w-10 h-10 text-yellow-500" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-yellow-500">{project.achievement.title}</h2>
                  <p className="text-muted-foreground">
                    {project.achievement.event} • Tingkat {project.achievement.level} • {project.achievement.year}
                  </p>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Content */}
        <section className="py-16 md:py-24">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto space-y-16">
              {/* Role & Responsibilities */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <User className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold font-mono">Role & Kontribusi</h2>
                </div>
                <div className="p-6 rounded-xl bg-gradient-card border border-border">
                  <h3 className="text-lg font-semibold text-primary mb-4">{project.role}</h3>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {project.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-1 shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold font-mono">Deskripsi Proyek</h2>
                <div className="prose prose-lg prose-invert max-w-none">
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {project.description}
                  </p>
                </div>
              </motion.div>

              {/* Why This Project */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <Target className="w-5 h-5 text-accent" />
                  </div>
                  <h2 className="text-2xl font-bold font-mono">Mengapa Proyek Ini?</h2>
                </div>
                <div className="p-6 rounded-xl bg-accent/5 border border-accent/20">
                  <div className="text-muted-foreground leading-relaxed whitespace-pre-line prose prose-sm prose-invert max-w-none">
                    {project.whyThisProject}
                  </div>
                </div>
              </motion.div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold font-mono">Fitur Utama</h2>
                <ul className="grid md:grid-cols-2 gap-3">
                  {project.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-start gap-2 p-3 rounded-lg bg-secondary/50 text-foreground"
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary mt-1 shrink-0" />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Tech Stack */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Layers className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold font-mono">Tech Stack</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {Object.entries(project.techStack).map(([category, techs]) => (
                    <div key={category} className="space-y-3">
                      <h3 className="text-sm font-medium text-muted-foreground capitalize">
                        {category}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {techs.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 text-sm font-mono bg-muted rounded-lg text-foreground border border-border"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Media */}
              {project.media.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold font-mono">Media & Demo</h2>
                  <div className="grid gap-6">
                    {project.media.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="rounded-xl overflow-hidden border border-border"
                      >
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
                          <div className="relative aspect-video bg-muted">
                            <img
                              src={item.src.startsWith("/") ? item.src : `/${item.src}`}
                              alt={item.alt || "Project screenshot"}
                              className="absolute inset-0 w-full h-full object-cover"
                              loading="lazy"
                            />
                          </div>
                        ) : null}
                        {item.title && (
                          <div className="p-3 bg-card border-t border-border">
                            <p className="text-sm text-muted-foreground">{item.title}</p>
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Back Button */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="pt-8 border-t border-border"
              >
                <Button variant="outline" asChild className="gap-2">
                  <Link to="/">
                    <ArrowLeft className="w-4 h-4" />
                    Kembali ke Beranda
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ProjectDetail;
