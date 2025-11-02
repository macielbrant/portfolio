import { FileDown, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/hero-bg.jpg';
import profileImage from '@/assets/profile.jpg';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/80 dark:from-background/98 dark:via-background/95 dark:to-background/90" />

      {/* Animated Molecules Background */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-primary rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-20 w-40 h-40 border-2 border-primary/50 rounded-full animate-pulse delay-75" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border-2 border-accent rounded-full animate-pulse delay-150" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center animate-fade-in">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-primary rounded-full blur-md group-hover:blur-lg transition-all opacity-75" />
              <img
                src={profileImage}
                alt="Maciel de Souza Brant"
                className="relative w-50 h-50 rounded-full object-cover border-4 border-background shadow-glow"
              />
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="font-display font-bold text-5xl md:text-7xl mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Maciel de Souza Brant
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground/90 mb-6">
            Farmacêutico Clínico e Analista de Qualidade
          </h2>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto font-light italic">
            "Cuidar com ciência, curar com empatia."
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="gradient-primary text-white shadow-glow hover:shadow-xl transition-all text-lg px-8 group"
            >
              <Mail className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Entre em Contato
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all text-lg px-8 group"
              asChild
            >
              <a href="#" download>
                <FileDown className="w-5 h-5 mr-2 group-hover:translate-y-1 transition-transform" />
                Baixar Currículo
              </a>
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-20 animate-bounce">
            <div className="w-6 h-10 border-2 border-primary/50 rounded-full mx-auto flex items-start justify-center p-2">
              <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
