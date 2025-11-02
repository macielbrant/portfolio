import { Languages as LanguagesIcon, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const languages = [
  {
    name: 'Inglês',
    level: 'Avançado',
    icon: '🇬🇧',
    proficiency: 90,
  },
  {
    name: 'Espanhol',
    level: 'Básico',
    icon: '🇪🇸',
    proficiency: 40,
  },
  {
    name: 'Libras',
    level: 'Básico',
    icon: '🤟',
    proficiency: 40,
  },
];

export default function Languages() {
  return (
    <section id="idiomas" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4">
            <LanguagesIcon className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Idiomas
            </h2>
          </div>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {languages.map((language, index) => (
            <Card
              key={language.name}
              className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-primary/50"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {language.icon}
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                  {language.name}
                </h3>
                <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  {language.level}
                </Badge>
                
                {/* Progress bar */}
                <div className="w-full bg-muted rounded-full h-2 mt-4 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-primary to-primary/70 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${language.proficiency}%` }}
                  ></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
