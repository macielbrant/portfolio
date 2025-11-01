import { useState } from 'react';
import { ExternalLink, FlaskConical, FileText, Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'Protocolo de Reconciliação Medicamentosa',
      description: 'Desenvolvimento e implementação de protocolo para reconciliação medicamentosa em ambiente hospitalar.',
      fullDescription:
        'Projeto desenvolvido para reduzir erros de medicação através da implementação sistemática de reconciliação medicamentosa. Incluiu treinamento de equipe multidisciplinar, criação de formulários padronizados e integração com sistema eletrônico de prescrição. Resultou em redução de 45% nos erros de medicação identificados.',
      icon: FileText,
      category: 'Farmácia Clínica',
      link: '#',
    },
    {
      title: 'Análise de Estabilidade de Formulações Magistrais',
      description: 'Pesquisa sobre estabilidade e prazo de validade de medicamentos manipulados.',
      fullDescription:
        'Estudo laboratorial focado na análise físico-química e microbiológica de formulações magistrais. Avaliação de diferentes condições de armazenamento e estabelecimento de prazos de validade baseados em evidências científicas. Publicado em revista científica nacional.',
      icon: FlaskConical,
      category: 'Controle de Qualidade',
      link: '#',
    },
    {
      title: 'Farmacovigilância em UTI',
      description: 'Monitoramento e análise de reações adversas a medicamentos em unidade de terapia intensiva.',
      fullDescription:
        'Implementação de sistema de farmacovigilância ativa em UTI, incluindo identificação, documentação e análise de causalidade de reações adversas a medicamentos. Desenvolvimento de estratégias preventivas e educação continuada da equipe multidisciplinar.',
      icon: Search,
      category: 'Segurança do Paciente',
      link: '#',
    },
  ];

  return (
    <section id="projetos" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
              Pesquisas e Projetos
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div
                  key={index}
                  className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-glow transition-all duration-300 group cursor-pointer animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => setSelectedProject(index)}
                >
                  <div className="p-6">
                    <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground text-xs font-semibold rounded-full mb-3">
                      {project.category}
                    </span>
                    <h3 className="font-display font-bold text-xl mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    <Button
                      variant="ghost"
                      className="text-primary hover:text-primary-dark p-0 h-auto font-semibold group/btn"
                    >
                      Ver detalhes
                      <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Project Detail Modal */}
          <Dialog open={selectedProject !== null} onOpenChange={() => setSelectedProject(null)}>
            <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
              {selectedProject !== null && (
                <>
                  <DialogHeader>
                    <DialogTitle className="font-display text-2xl">
                      {projects[selectedProject].title}
                    </DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                      {projects[selectedProject].category}
                    </span>
                    <p className="text-foreground/80 leading-relaxed">
                      {projects[selectedProject].fullDescription}
                    </p>
                    {projects[selectedProject].link !== '#' && (
                      <Button className="w-full gradient-primary" asChild>
                        <a href={projects[selectedProject].link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Acessar Projeto
                        </a>
                      </Button>
                    )}
                  </div>
                </>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
}
