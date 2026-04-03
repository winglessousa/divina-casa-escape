import { MessageCircle } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const CTASection = () => {
  return (
    <section id="contato" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="relative rounded-3xl overflow-hidden p-12 md:p-20 text-center glass-card glow-border">
            <div className="relative z-10 max-w-2xl mx-auto">
              <p className="text-primary text-sm uppercase tracking-[0.3em] mb-4 font-body">
                Reserve sua estadia
              </p>
              <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-6">
                Sua experiência inesquecível começa aqui
              </h2>
              <p className="text-muted-foreground font-body mb-10 text-lg">
                Poucas datas disponíveis. Garanta seu refúgio na natureza.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/5573991555655?text=Olá! Gostaria de reservar a Divina Casa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-xl text-lg hover:opacity-90 transition-all hover:scale-105 duration-300"
                >
                  <MessageCircle className="w-5 h-5" />
                  Falar com Carol
                </a>
                <a
                  href="https://www.airbnb.com.br/rooms/1513745259325382041"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 border border-border text-foreground rounded-xl text-lg hover:bg-secondary transition-all duration-300"
                >
                  Ver no Airbnb
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTASection;
