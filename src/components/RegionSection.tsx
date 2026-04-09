import AnimatedSection from "./AnimatedSection";
import { MapPin } from "lucide-react";
import jeribucacuImg from "@/assets/beach-jeribucacu.webp";

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

        {/* Jeribucaçu image with overlay */}
        <AnimatedSection className="mb-8">
          <div className="relative rounded-2xl overflow-hidden aspect-video">
            <img
              src={jeribucacuImg}
              alt="Praia de Jeribucaçu vista aérea"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
              <h3 className="font-display text-2xl md:text-4xl font-semibold text-foreground mb-2">
                Praia de Jeribucaçu
              </h3>
              <p className="text-[#f5f0eb] font-body max-w-2xl text-sm md:text-base mb-4">
                Uma das praias mais preservadas do litoral baiano, a poucos minutos da Divina Casa.
                Águas cristalinas, coqueiros e natureza intocada.
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
