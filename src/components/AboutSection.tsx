import { profile } from "@/data/profile";
import profileAvatar from "@/assets/profile-avatar.png";
import { Github, Linkedin, Mail, Instagram, MapPin, Sparkles } from "lucide-react";

export const AboutSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden py-20">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"
        />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      </div>

      <div className="relative z-10 container px-4">
        <div className="max-w-4xl mx-auto">
          {/* Profile Card */}
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            {/* Avatar */}
            <div className="relative group animate-fade-in">
              {/* Glow ring */}
              <div className="absolute -inset-2 bg-gradient-to-r from-primary via-accent to-primary rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500 animate-pulse-glow" />
              
              {/* Avatar container */}
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary/30 shadow-elevated">
                <img
                  src={profileAvatar}
                  alt={profile.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Status badge */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-primary/30 shadow-card">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-foreground">Available</span>
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 text-center lg:text-left space-y-6">
              {/* Badge */}
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary animate-slide-up"
              >
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium">{profile.title}</span>
              </div>

              {/* Name */}
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold font-mono animate-slide-up"
                style={{ animationDelay: "100ms" }}
              >
                <span className="text-foreground">Hai, saya </span>
                <span className="text-gradient-primary">{profile.name.split(" ")[0]}</span>
              </h1>

              {/* Tagline */}
              <p
                className="text-xl md:text-2xl text-muted-foreground font-light animate-slide-up"
                style={{ animationDelay: "150ms" }}
              >
                {profile.tagline}
              </p>

              {/* Description */}
              <p
                className="text-muted-foreground leading-relaxed max-w-xl animate-slide-up"
                style={{ animationDelay: "200ms" }}
              >
                {profile.description.split("\n\n")[0]}
              </p>

              {/* Skills */}
              <div
                className="flex flex-wrap justify-center lg:justify-start gap-2 animate-slide-up"
                style={{ animationDelay: "250ms" }}
              >
                {profile.skills.map((skill, i) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm font-mono bg-secondary rounded-lg text-secondary-foreground border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                    style={{ animationDelay: `${300 + i * 50}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Social Links */}
              <div
                className="flex justify-center lg:justify-start gap-4 pt-4 animate-slide-up"
                style={{ animationDelay: "300ms" }}
              >
                {profile.social.github && (
                  <a
                    href={profile.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-secondary border border-border text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:-translate-y-1"
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
                    className="p-3 rounded-xl bg-secondary border border-border text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:-translate-y-1"
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
                    className="p-3 rounded-xl bg-secondary border border-border text-muted-foreground hover:text-accent hover:border-accent/50 hover:bg-accent/10 transition-all duration-300 hover:-translate-y-1"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                )}
                {profile.social.email && (
                  <a
                    href={`mailto:${profile.social.email}`}
                    className="p-3 rounded-xl bg-secondary border border-border text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:-translate-y-1"
                    aria-label="Email"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-3 gap-4 md:gap-8 mt-16 pt-16 border-t border-border/50 animate-slide-up"
            style={{ animationDelay: "400ms" }}
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
                {profile.stats.yearActive}
              </div>
              <div className="text-sm text-muted-foreground mt-1">Tahun Aktif</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
