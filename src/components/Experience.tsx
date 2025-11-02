import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      company: 'Multimed',
      position: 'Atendimento Farmacêutico',
      period: '2025',
      description:
        'Responsável pela dispensação de medicamentos, anamnese farmacêutica e suporte na aplicação de injetáveis, com foco em segurança terapêutica e atenção ao paciente.',
    },
    {
      company: 'Gol Linhas Aéreas',
      position: 'Agente de Aeroporto',
      period: '2022 – 2023',
      description:
        'Atendimento humanizado ao público, gestão de documentação e embarque, resolução de imprevistos e operação sob pressão.',
    },
    {
      company: 'Hotel Intercity / Dubai Hotéis (MG)',
      position: 'Agente de Hospedagem',
      period: '2020 – 2022',
      description:
        'Coordenação de reservas, recepção bilíngue e experiência de atendimento de excelência.',
    },
    {
      company: 'Santa Casa de Montes Claros (MG)',
      position: 'Recepcionista Hospitalar',
      period: '2018 – 2020',
      description:
        'Acolhimento de pacientes, controle de prontuários e apoio às rotinas de enfermagem e farmácia hospitalar.',
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
