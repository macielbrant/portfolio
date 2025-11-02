import { GraduationCap } from 'lucide-react';

export default function Education() {
  const education = [
    {
      degree: 'Bacharel em Farmácia',
      institution: 'Centro Universitário de Tecnologia e Ciências – Unifatecie',
      year: 'Junho - 2025',
      description: 'Formação ampla em ciências farmacêuticas, com foco em farmacologia, análises clínicas, controle de qualidade e gestão de farmácias.',
    },
    {
      degree: 'Curso de Aperfeiçoamento – Medicina Aeroespacial',
      institution: 'Ministério da Defesa / Força Aérea Brasileira',
      year: '2023',
      description: 'Treinamento em primeiros socorros, sobrevivência na selva e combate a incêndio, com ênfase em protocolos de emergência médica e segurança.',
    },
    {
      degree: 'Curso de Atendimento ao Cliente e Relações Humanas',
      institution: 'Senac – MG',
      year: '2022',
      description: 'Aprimoramento de comunicação, empatia e fidelização no atendimento farmacêutico e hospitalar.',
    },
     {
      degree: 'Curso de Rotinas Administrativas e Contabilidade Aplicada',
      institution: 'Microlins – MG',
      year: '2021',
      description: 'Noções de gestão e processos administrativos voltados ao setor de saúde.',
    },
  ];

  return (
    <section id="formacao" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
              Formação Acadêmica
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20 transform md:-translate-x-1/2" />

            {/* Education Items */}
            <div className="space-y-12">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-8 items-start animate-fade-in ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background transform md:-translate-x-1/2 shadow-glow">
                    <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  </div>

                  {/* Content */}
                  <div className={`flex-1 md:w-5/12 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="bg-card rounded-2xl p-6 shadow-card hover:shadow-glow transition-all duration-300 group">
                      <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold mb-3">
                        <GraduationCap className="w-4 h-4" />
                        {edu.year}
                      </div>
                      <h3 className="font-display font-bold text-xl mb-2 group-hover:text-primary transition-colors">
                        {edu.degree}
                      </h3>
                      <p className="text-muted-foreground font-medium mb-3">
                        {edu.institution}
                      </p>
                      <p className="text-foreground/80 text-sm">
                        {edu.description}
                      </p>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1 md:w-5/12" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
