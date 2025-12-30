import { Code2, Sparkles } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      </div>

      <div className="relative z-10 container px-4 py-20 text-center space-y-8">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary animate-fade-in">
          <Sparkles className="w-4 h-4" />
          <span className="text-sm font-medium">Portfolio Developer</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-mono animate-slide-up">
          <span className="text-foreground">Proyek &</span>
          <br />
          <span className="text-gradient-primary">Karya Digital</span>
        </h1>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed animate-slide-up" style={{ animationDelay: "100ms" }}>
          Kumpulan proyek yang dikerjakan dengan dedikasi tinggi, menggabungkan 
          <span className="text-primary"> teknologi modern</span> dengan 
          <span className="text-accent"> solusi inovatif</span>.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 pt-8 animate-slide-up" style={{ animationDelay: "200ms" }}>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold font-mono text-gradient-primary">3+</div>
            <div className="text-sm text-muted-foreground">Proyek</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold font-mono text-gradient-accent">Juara 2</div>
            <div className="text-sm text-muted-foreground">Tingkat Nasional</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold font-mono text-foreground">2024</div>
            <div className="text-sm text-muted-foreground">Tahun Aktif</div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="pt-12 animate-bounce">
          <Code2 className="w-6 h-6 mx-auto text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};
