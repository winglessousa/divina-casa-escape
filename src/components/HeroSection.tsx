import heroImg from "@/assets/hero-veranda.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Varanda da Divina Casa com vista para a mata atlântica"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <p className="text-primary text-sm uppercase tracking-[0.3em] mb-6 animate-fade-up font-body">
          Itacaré · Bahia · Brasil
        </p>
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold text-foreground leading-tight mb-6 animate-fade-up"
            style={{ animationDelay: "0.2s" }}>
          Onde a natureza<br />
          <span className="text-gradient">abraça sua alma</span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl mb-10 animate-fade-up font-body max-w-xl mx-auto"
           style={{ animationDelay: "0.4s" }}>
          Um refúgio exclusivo próximo à Praia de Jeribucaçu. 
          Conforto, silêncio e vista privilegiada para a Mata Atlântica.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.6s" }}>
          <a
            href="https://wa.me/5573991555655?text=Olá! Gostaria de reservar a Divina Casa"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-primary text-primary-foreground font-medium rounded-lg text-lg hover:opacity-90 transition-all hover:scale-105 duration-300"
          >
            Reserve Agora
          </a>
          <a
            href="#ambientes"
            className="px-8 py-4 border border-border text-foreground rounded-lg text-lg hover:bg-secondary transition-all duration-300"
          >
            Explorar
          </a>
        </div>

        {/* Social proof */}
        <div className="mt-12 flex items-center justify-center gap-6 text-muted-foreground text-sm animate-fade-up" style={{ animationDelay: "0.8s" }}>
          <span className="flex items-center gap-1">
            <span className="text-primary">★★★★★</span> 5.0 no Airbnb
          </span>
          <span className="w-px h-4 bg-border" />
          <span>Superhost</span>
          <span className="w-px h-4 bg-border" />
          <span>Poucas datas disponíveis</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
