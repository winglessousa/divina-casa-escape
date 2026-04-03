import { Clock, AlertCircle, Dog, Volume2 } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const InfoSection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Practical info */}
          <AnimatedSection>
            <div className="glass-card rounded-2xl p-8 md:p-10 h-full">
              <h3 className="font-display text-2xl font-semibold text-foreground mb-8">Informações Práticas</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium text-sm">Check-in & Check-out</p>
                    <p className="text-muted-foreground text-sm mt-1">Check-in: 14h | Check-out: 11h</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                    <AlertCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium text-sm">Conectividade</p>
                    <p className="text-muted-foreground text-sm mt-1">
                      Wi-Fi disponível. O sinal pode ser instável — aproveite para se desconectar 🌿
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Rules */}
          <AnimatedSection delay={150}>
            <div className="glass-card rounded-2xl p-8 md:p-10 h-full">
              <h3 className="font-display text-2xl font-semibold text-foreground mb-8">Regras da Casa</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                    <Volume2 className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium text-sm">Silêncio após 22h</p>
                    <p className="text-muted-foreground text-sm mt-1">Respeite a tranquilidade do local e dos vizinhos.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                    <Dog className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium text-sm">Pets sob consulta</p>
                    <p className="text-muted-foreground text-sm mt-1">Entre em contato antes de trazer seu pet.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                    <span className="text-primary text-lg">🚭</span>
                  </div>
                  <div>
                    <p className="text-foreground font-medium text-sm">Não fumar</p>
                    <p className="text-muted-foreground text-sm mt-1">Proibido fumar em áreas internas.</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
