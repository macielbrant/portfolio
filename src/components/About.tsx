import { Heart, Microscope, ShieldCheck, Users } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Microscope,
      title: 'Ciência e Precisão',
      description: 'Compromisso com a excelência técnica e científica em cada análise',
    },
    {
      icon: Heart,
      title: 'Empatia e Cuidado',
      description: 'Foco no bem-estar do paciente e na humanização do tratamento',
    },
    {
      icon: ShieldCheck,
      title: 'Qualidade e Segurança',
      description: 'Garantia de qualidade em todos os processos farmacêuticos',
    },
    {
      icon: Users,
      title: 'Trabalho em Equipe',
      description: 'Colaboração multidisciplinar para melhores resultados',
    },
  ];

  return (
    <section id="sobre" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
              Sobre Mim
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>

          {/* Bio */}
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-card mb-12 animate-slide-up">
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              Possuo sólida habilidade de comunicação, fácil aprendizado e forte espírito de equipe e
              dedicação ao sucesso dos objetivos a serem alcançados. Na função que me for designada,
              farei dos objetivos da empresa os meus próprios objetivos com a intenção de proporcionar a
              melhor serviço e experiência a cada cliente.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              Minha atuação profissional é pautada pela integração entre o conhecimento 
              científico e a prática humanizada, sempre focando no bem-estar do paciente e 
              na qualidade dos processos farmacêuticos.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Acredito que a farmácia vai além da dispensação de medicamentos — é uma profissão 
              que envolve cuidado, responsabilidade e compromisso com a vida.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 shadow-card hover:shadow-glow transition-all duration-300 group animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="mb-4 inline-block">
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full group-hover:bg-primary/30 transition-all" />
                      <Icon className="w-12 h-12 text-primary relative group-hover:scale-110 transition-transform" />
                    </div>
                  </div>
                  <h3 className="font-display font-semibold text-xl mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
