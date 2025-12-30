import { Code2, ChevronDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative py-20 bg-background overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent" />
      </div>

      <div className="relative z-10 container px-4 text-center space-y-6">
        {/* Section Title */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary animate-fade-in">
          <Code2 className="w-4 h-4" />
          <span className="text-sm font-medium">Portfolio Proyek</span>
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-mono animate-slide-up">
          <span className="text-foreground">Proyek &</span>{" "}
          <span className="text-gradient-primary">Karya Digital</span>
        </h2>

        <p
          className="max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed animate-slide-up"
          style={{ animationDelay: "100ms" }}
        >
          Kumpulan proyek yang dikerjakan dengan dedikasi tinggi, menggabungkan
          <span className="text-primary"> teknologi modern</span> dengan
          <span className="text-accent"> solusi inovatif</span>.
        </p>

        {/* Scroll indicator */}
        <div className="pt-6 animate-bounce">
          <ChevronDown className="w-6 h-6 mx-auto text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};
