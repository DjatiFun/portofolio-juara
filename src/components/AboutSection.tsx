"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { User, Heart, Briefcase, CheckCircle2 } from "lucide-react";

export const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 md:py-28 bg-background" id="about">
      <div className="container px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-4xl mx-auto space-y-12"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary">
              <User className="w-4 h-4" />
              <span className="text-sm font-medium">Tentang Saya</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-mono">
              <span className="text-foreground">Mengenal </span>
              <span className="text-gradient-primary">Lebih Dekat</span>
            </h2>
          </motion.div>

          {/* Description */}
          <motion.div variants={itemVariants} className="prose prose-lg max-w-none">
            <div className="text-muted-foreground leading-relaxed whitespace-pre-line text-center md:text-left">
              {profile.fullDescription}
            </div>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Interests */}
            <motion.div
              variants={itemVariants}
              className="p-6 rounded-xl bg-gradient-card border border-border hover:border-primary/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Heart className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Minat & Ketertarikan</h3>
              </div>
              <ul className="space-y-3">
                {profile.interests.map((interest, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-2 text-muted-foreground"
                  >
                    <CheckCircle2 className="w-4 h-4 text-primary mt-1 shrink-0" />
                    <span>{interest}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Work Approach */}
            <motion.div
              variants={itemVariants}
              className="p-6 rounded-xl bg-gradient-card border border-border hover:border-accent/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-accent/10">
                  <Briefcase className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-lg font-semibold">Pendekatan Kerja</h3>
              </div>
              <ul className="space-y-3">
                {profile.workApproach.map((approach, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-2 text-muted-foreground"
                  >
                    <CheckCircle2 className="w-4 h-4 text-accent mt-1 shrink-0" />
                    <span>{approach}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Skills */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h3 className="text-lg font-semibold text-muted-foreground">Tech Stack</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {profile.skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-4 py-2 text-sm font-mono bg-secondary rounded-lg text-secondary-foreground border border-border hover:border-primary/50 hover:bg-primary/10 transition-all cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
