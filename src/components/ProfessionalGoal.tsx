import { Target } from 'lucide-react';

export default function ProfessionalGoal() {
  return (
    <section id="objetivo" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4">
            <Target className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Objetivo Profissional
            </h2>
          </div>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full"></div>
        </div>

        <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="absolute -left-4 top-0 text-6xl text-primary/20 font-serif">"</div>
          <div className="absolute -right-4 bottom-0 text-6xl text-primary/20 font-serif">"</div>
          
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 border-l-4 border-primary rounded-lg p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-300">
            <p className="text-lg md:text-xl leading-relaxed text-foreground/90 font-sans italic">
              Atuar na área farmacêutica, hospitalar, industrial ou comercial, aplicando conhecimentos técnicos e científicos em prol da saúde, do bem-estar e da excelência operacional. Busco oportunidades de emprego ou estágio que me permitam contribuir com ética, empatia e inovação nos processos farmacêuticos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
