"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import profileAvatar from "@/assets/profile-avatar.png";
import { Github, Linkedin, Mail, Instagram, Sparkles, ArrowDown, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToHighlight = () => {
    document.getElementById("highlight")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
          animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{ y: [0, 20, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      </div>

      <div className="relative z-10 container px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Avatar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative group"
            >
              {/* Glow ring */}
              <motion.div
                className="absolute -inset-3 bg-gradient-to-r from-primary via-accent to-primary rounded-full blur-lg opacity-50"
                animate={{ opacity: [0.3, 0.6, 0.3], rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Avatar container */}
              <div className="relative w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary/30 shadow-elevated">
                <motion.img
                  src={profileAvatar}
                  alt={profile.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>

              {/* Status badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-primary/30 shadow-card"
              >
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-foreground">Open to Work</span>
              </motion.div>
            </motion.div>

            {/* Info */}
            <div className="flex-1 text-center lg:text-left space-y-6">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary"
              >
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium">{profile.title}</span>
              </motion.div>

              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold font-mono"
              >
                <span className="text-foreground">Hai, saya </span>
                <span className="text-gradient-primary">{profile.firstName}</span>
              </motion.h1>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-xl md:text-2xl text-muted-foreground font-light"
              >
                {profile.tagline}
              </motion.p>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-muted-foreground leading-relaxed max-w-xl"
              >
                {profile.shortDescription}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="flex flex-wrap justify-center lg:justify-start gap-4"
              >
                <Button
                  onClick={scrollToProjects}
                  size="lg"
                  className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow"
                >
                  Lihat Proyek
                  <ArrowDown className="w-4 h-4" />
                </Button>
                <Button
                  onClick={scrollToHighlight}
                  variant="outline"
                  size="lg"
                  className="gap-2 border-accent text-accent hover:bg-accent/10"
                >
                  <Trophy className="w-4 h-4" />
                  Lihat Pencapaian
                </Button>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="flex justify-center lg:justify-start gap-3 pt-4"
              >
                {profile.social.github && (
                  <motion.a
                    whileHover={{ y: -3, scale: 1.05 }}
                    href={profile.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-secondary border border-border text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </motion.a>
                )}
                {profile.social.linkedin && (
                  <motion.a
                    whileHover={{ y: -3, scale: 1.05 }}
                    href={profile.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-secondary border border-border text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </motion.a>
                )}
                {profile.social.instagram && (
                  <motion.a
                    whileHover={{ y: -3, scale: 1.05 }}
                    href={profile.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-secondary border border-border text-muted-foreground hover:text-accent hover:border-accent/50 hover:bg-accent/10 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </motion.a>
                )}
                {profile.social.email && (
                  <motion.a
                    whileHover={{ y: -3, scale: 1.05 }}
                    href={`mailto:${profile.social.email}`}
                    className="p-3 rounded-xl bg-secondary border border-border text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-colors"
                    aria-label="Email"
                  >
                    <Mail className="w-5 h-5" />
                  </motion.a>
                )}
              </motion.div>
            </div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="grid grid-cols-3 gap-4 md:gap-8 mt-16 pt-16 border-t border-border/50"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold font-mono text-gradient-primary">
                {profile.stats.projects}+
              </div>
              <div className="text-sm text-muted-foreground mt-1">Proyek</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold font-mono text-gradient-accent">
                {profile.stats.achievement}
              </div>
              <div className="text-sm text-muted-foreground mt-1">Prestasi</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold font-mono text-foreground">
                {profile.stats.experience}
              </div>
              <div className="text-sm text-muted-foreground mt-1">Pengalaman</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};
