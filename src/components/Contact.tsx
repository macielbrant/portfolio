import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: 'Mensagem enviada!',
        description: 'Obrigado pelo contato. Responderei em breve.',
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const socialLinks = [
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:maciel.brant@farmacia.com',
      color: 'text-primary',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com',
      color: 'text-blue-600',
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com',
      color: 'text-foreground',
    },
  ];

  return (
    <section id="contato" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
              Entre em Contato
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Tem alguma dúvida ou gostaria de colaborar? Ficarei feliz em conversar!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-up">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nome
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome completo"
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Mensagem
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Escreva sua mensagem aqui..."
                    rows={6}
                    className="w-full resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full gradient-primary text-primary-foreground shadow-glow hover:shadow-xl transition-all group"
                >
                  {isSubmitting ? (
                    'Enviando...'
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                      Enviar Mensagem
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="animate-slide-up space-y-8" style={{ animationDelay: '100ms' }}>
              <div className="bg-card rounded-2xl p-8 shadow-card">
                <h3 className="font-display font-bold text-2xl mb-6">
                  Conecte-se
                </h3>
                <div className="space-y-4">
                  {socialLinks.map((link, index) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 rounded-xl hover:bg-secondary/50 transition-colors group"
                      >
                        <div className={`w-12 h-12 rounded-full bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform ${link.color}`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="font-semibold">{link.label}</p>
                          <p className="text-sm text-muted-foreground">
                            Clique para acessar
                          </p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="bg-gradient-primary rounded-2xl p-8 text-primary-foreground shadow-glow">
                <h3 className="font-display font-bold text-2xl mb-4">
                  Vamos trabalhar juntos?
                </h3>
                <p className="leading-relaxed">
                  Estou sempre aberto a novas oportunidades de colaboração, 
                  projetos de pesquisa e consultoria farmacêutica. Entre em contato!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
