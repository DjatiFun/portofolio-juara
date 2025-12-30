"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { Github, Linkedin, Mail, Instagram, Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border bg-card/50">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-6"
        >
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {profile.social.github && (
              <a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            {profile.social.linkedin && (
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            )}
            {profile.social.instagram && (
              <a
                href={profile.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            )}
            {profile.social.email && (
              <a
                href={`mailto:${profile.social.email}`}
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            )}
          </div>

          {/* Copyright */}
          <div className="text-center text-muted-foreground text-sm">
            <p className="flex items-center justify-center gap-1">
              © {currentYear} {profile.name}. Dibuat dengan
              <Heart className="w-4 h-4 text-destructive fill-destructive" />
              dan kopi.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
