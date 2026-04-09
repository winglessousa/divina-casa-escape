import { Instagram } from "lucide-react";
import logoImg from "@/assets/logo-divina-casa.png";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <img src={logoImg} alt="Divina Casa" className="w-12 h-12 rounded-full object-cover" />
          <p className="font-display text-xl font-semibold text-foreground">Divina Casa</p>
        </div>
        <p className="text-muted-foreground text-sm font-body mb-4">
          Itacaré · Bahia · Brasil
        </p>
        <a
          href="https://www.instagram.com/divinacasa_itacare"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm mb-6"
        >
          <Instagram className="w-4 h-4" /> @divinacasa_itacare
        </a>
        <p className="text-muted-foreground/60 text-xs font-body">
          💚 Viva momentos inesquecíveis. Boa estadia! 🌿
        </p>
      </div>
    </footer>
  );
};

export default Footer;
