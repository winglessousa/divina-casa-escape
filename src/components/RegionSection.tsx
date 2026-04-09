import AnimatedSection from "./AnimatedSection";
import { MapPin } from "lucide-react";

const beaches = [
  { name: "Praia de Jeribucaçu", distance: "5 min", mapUrl: "https://maps.google.com/?q=Praia+de+Jeribucaçu+Itacaré" },
  { name: "Praia da Concha", distance: "10 min", mapUrl: "https://maps.google.com/?q=Praia+da+Concha+Itacaré" },
  { name: "Tiririca", distance: "12 min", mapUrl: "https://maps.google.com/?q=Praia+da+Tiririca+Itacaré" },
  { name: "Prainha", distance: "15 min", mapUrl: "https://maps.google.com/?q=Prainha+Itacaré" },
];

const restaurants = [
  { name: "Jeris", desc: "Comida caseira", whatsapp: "5573999744634" },
  { name: "Flor de Pitaya", desc: "Culinária criativa", whatsapp: "5511941311602" },
  { name: "Casa do João", desc: "Sabores regionais", whatsapp: "5573999823877" },
  { name: "Marambaia", desc: "Frutos do mar", whatsapp: "5573998488362" },
  { name: "Ohana", desc: "Cozinha natural", whatsapp: "5573999914621" },
  { name: "Stop", desc: "Lanches e petiscos", whatsapp: "5573998110502" },
];

const RegionSection = () => {
  return (
    <section id="regiao" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <p className="text-primary text-sm uppercase tracking-[0.3em] mb-4 font-body">A Região</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground">
            Itacaré, um paraíso baiano
          </h2>
        </AnimatedSection>

        {/* Video highlight */}
        <AnimatedSection className="mb-8">
          <div className="relative rounded-2xl overflow-hidden aspect-video">
            <video
              src="/videos/jeribucacu.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent pointer-events-none" />
          </div>
        </AnimatedSection>

        {/* Description below video */}
        <AnimatedSection className="mb-8">
          <div className="glass-card rounded-2xl p-8 md:p-12 text-center">
            <h3 className="font-display text-2xl md:text-4xl font-semibold text-foreground mb-4">
              Praia de Jeribucaçu
            </h3>
            <p className="text-muted-foreground font-body max-w-2xl mx-auto mb-6">
              Uma das praias mais preservadas do litoral baiano, a poucos minutos da Divina Casa. 
              Águas cristalinas, coqueiros e natureza intocada. O paraíso perfeito para relaxar e se reconectar.
            </p>
            <a
              href="https://maps.google.com/?q=Praia+de+Jeribucaçu+Itacaré"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:underline"
            >
              <MapPin className="w-4 h-4" /> Ver no mapa
            </a>
          </div>
        </AnimatedSection>

        {/* Google Maps embed */}
        <AnimatedSection className="mb-16">
          <div className="rounded-2xl overflow-hidden aspect-[21/9]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5!2d-38.98!3d-14.28!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x739a8e3!2sPraia+de+Jeribuca%C3%A7u!5e0!3m2!1spt-BR!2sbr!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Divina Casa"
              className="w-full h-full"
            />
          </div>
        </AnimatedSection>

        {/* Beaches grid */}
        <AnimatedSection className="mb-16">
          <h3 className="font-display text-2xl font-semibold text-foreground mb-6">Praias Próximas</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {beaches.map((b) => (
              <a
                key={b.name}
                href={b.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-xl p-5 hover:border-primary/30 transition-colors duration-300 group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-foreground font-medium text-sm">{b.name}</p>
                    <p className="text-muted-foreground text-xs mt-1">{b.distance} de carro</p>
                  </div>
                  <MapPin className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </a>
            ))}
          </div>
        </AnimatedSection>

        {/* Restaurants */}
        <AnimatedSection>
          <h3 className="font-display text-2xl font-semibold text-foreground mb-6">Onde Comer</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {restaurants.map((r) => (
              <a
                key={r.name}
                href={`https://wa.me/${r.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-xl p-5 hover:border-primary/30 transition-colors duration-300 flex items-center justify-between group"
              >
                <div>
                  <p className="text-foreground font-medium text-sm">{r.name}</p>
                  <p className="text-muted-foreground text-xs mt-1">{r.desc}</p>
                </div>
                <span className="text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">WhatsApp →</span>
              </a>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default RegionSection;
