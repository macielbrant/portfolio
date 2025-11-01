import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      company: 'Hospital Regional do Cariri',
      position: 'Farmacêutico Clínico',
      period: '2022 - Presente',
      description:
        'Responsável pela análise e validação de prescrições médicas, acompanhamento farmacoterapêutico de pacientes internados, e implementação de protocolos de segurança medicamentosa.',
    },
    {
      company: 'Laboratório de Análises Clínicas LabMed',
      position: 'Analista de Qualidade',
      period: '2020 - 2022',
      description:
        'Atuação no controle de qualidade de medicamentos, validação de processos analíticos, e garantia de conformidade com as normas da ANVISA e boas práticas de fabricação.',
    },
    {
      company: 'Farmácia Hospitalar Santa Casa',
      position: 'Farmacêutico Assistente',
      period: '2018 - 2020',
      description:
        'Gestão de estoque de medicamentos, atendimento farmacêutico, orientação a pacientes e familiares sobre uso correto de medicamentos, e suporte à equipe médica.',
    },
  ];

  return (
    <section id="experiencia" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
              Experiência Profissional
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>

          {/* Experience Cards */}
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-300 group animate-slide-up border-l-4 border-primary"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-2xl mb-2 group-hover:text-primary transition-colors">
                      {exp.position}
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <Briefcase className="w-4 h-4" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground bg-secondary px-4 py-2 rounded-full">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
