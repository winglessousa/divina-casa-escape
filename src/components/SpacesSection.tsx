import AnimatedSection from "./AnimatedSection";
import bedroomImg from "@/assets/room-bedroom.jpg";
import livingImg from "@/assets/room-living.jpg";
import kitchenImg from "@/assets/room-kitchen.jpg";
import outdoorImg from "@/assets/room-outdoor.jpg";
import heroImg from "@/assets/hero-veranda.jpg";

const spaces = [
  {
    title: "Varanda",
    description: "Rede, café e o som da mata. O cenário perfeito para desacelerar.",
    image: heroImg,
  },
  {
    title: "Quarto",
    description: "Cama de casal, lençóis macios e a brisa da natureza como acalanto.",
    image: bedroomImg,
  },
  {
    title: "Sala",
    description: "Espaço amplo, aconchegante e com vista para a Mata Atlântica.",
    image: livingImg,
  },
  {
    title: "Cozinha",
    description: "Cozinha equipada com tudo que você precisa para momentos em família.",
    image: kitchenImg,
  },
  {
    title: "Área Externa",
    description: "Churrasqueira, deck e um jardim cercado pela Mata Atlântica.",
    image: outdoorImg,
  },
];

const SpacesSection = () => {
  return (
    <section id="ambientes" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <p className="text-primary text-sm uppercase tracking-[0.3em] mb-4 font-body">Ambientes</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground">
            Cada canto, um convite ao descanso
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {spaces.map((space, i) => (
            <AnimatedSection key={space.title} delay={i * 150}>
              <div className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer">
                <img
                  src={space.image}
                  alt={space.title}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
                    {space.title}
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base font-body">
                    {space.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpacesSection;
