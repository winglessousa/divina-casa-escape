import { Star, Instagram } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    name: "Marina L.",
    text: "A vista da varanda é de tirar o fôlego. Melhor hospedagem que já tive em Itacaré. Voltarei com certeza!",
    rating: 5,
  },
  {
    name: "Ricardo S.",
    text: "Lugar mágico. Silêncio absoluto, natureza por todos os lados e muito conforto. Nota 10 em tudo.",
    rating: 5,
  },
  {
    name: "Camila & Pedro",
    text: "Perfeito para casais. A Carol é uma anfitriã incrível. Sentimos como se estivéssemos em casa.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <p className="text-primary text-sm uppercase tracking-[0.3em] mb-4 font-body">Depoimentos</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground">
            O que nossos hóspedes dizem
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 150}>
              <div className="glass-card rounded-2xl p-8 h-full flex flex-col">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground/80 font-body text-sm leading-relaxed mb-6 flex-1 italic">
                  "{t.text}"
                </p>
                <p className="text-muted-foreground text-sm font-medium font-body">— {t.name}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Instagram CTA */}
        <AnimatedSection>
          <div className="text-center">
            <a
              href="https://www.instagram.com/divinacasa_itacare"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 glass-card rounded-xl hover:border-primary/30 transition-all duration-300 group"
            >
              <Instagram className="w-5 h-5 text-primary" />
              <span className="text-foreground font-medium text-sm">Siga no Instagram</span>
              <span className="text-muted-foreground text-sm">@divinacasa_itacare</span>
            </a>
            <p className="text-muted-foreground text-xs font-body mt-4">
              Veja mais avaliações e fotos dos nossos hóspedes no Instagram ★★★★★
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TestimonialsSection;
