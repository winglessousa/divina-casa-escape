import { Wifi, Wind, Car, Flame, Eye, ShowerHead, Thermometer } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const amenities = [
  { icon: Thermometer, label: "Ar-condicionado" },
  { icon: Wifi, label: "Wi-Fi" },
  { icon: ShowerHead, label: "Chuveiro quente" },
  { icon: Flame, label: "Churrasqueira" },
  { icon: Car, label: "Estacionamento" },
  { icon: Eye, label: "Vista para a mata" },
  { icon: Wind, label: "Ventilação natural" },
];

const differentials = [
  {
    title: "Natureza Imersiva",
    description: "Cercado pela Mata Atlântica, a poucos minutos da Praia de Jeribucaçu.",
  },
  {
    title: "Silêncio & Privacidade",
    description: "Sem vizinhos próximos. Apenas você, a natureza e o som dos pássaros.",
  },
  {
    title: "Vista Privilegiada",
    description: "Acorde com o verde infinito da mata e o nascer do sol entre as árvores.",
  },
  {
    title: "Experiência Única",
    description: "Um chalé com alma. Cada detalhe pensado para encantar e acolher.",
  },
];

const DifferentialsSection = () => {
  return (
    <section id="diferenciais" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <p className="text-primary text-sm uppercase tracking-[0.3em] mb-4 font-body">Diferenciais</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground">
            Por que escolher a Divina Casa
          </h2>
        </AnimatedSection>

        {/* Differentials */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {differentials.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 100}>
              <div className="glass-card rounded-2xl p-8 h-full hover:border-primary/30 transition-colors duration-300">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm font-body leading-relaxed">{item.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Amenities */}
        <AnimatedSection>
          <div className="glass-card rounded-2xl p-8 md:p-12">
            <h3 className="font-display text-2xl font-semibold text-foreground text-center mb-8">
              Comodidades
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-6">
              {amenities.map((a) => (
                <div key={a.label} className="flex flex-col items-center gap-3 text-center">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                    <a.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xs text-muted-foreground font-body">{a.label}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default DifferentialsSection;
