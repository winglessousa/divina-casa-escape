import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoImg from "@/assets/logo-divina-casa.png";

const navItems = [
  { label: "Início", href: "#hero" },
  { label: "O Chalé", href: "#ambientes" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Região", href: "#regiao" },
  { label: "Contato", href: "#contato" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-card py-3 shadow-lg" : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <a href="#hero" className="flex items-center gap-3">
          <img src={logoImg} alt="Divina Casa" className="w-10 h-10 rounded-full object-cover" />
          <span className="font-display text-xl font-semibold tracking-wider text-foreground">
            Divina Casa
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-body text-muted-foreground hover:text-primary transition-colors duration-300 tracking-wide uppercase"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://wa.me/5573999155655?text=Olá! Gostaria de reservar a Divina Casa"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:opacity-90 transition-opacity"
          >
            Reservar
          </a>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden glass-card mt-2 mx-4 rounded-xl p-6 animate-scale-in">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-sm text-muted-foreground hover:text-primary transition-colors uppercase tracking-wide"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://wa.me/5573999155655?text=Olá! Gostaria de reservar a Divina Casa"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-4 text-center px-5 py-3 bg-primary text-primary-foreground text-sm font-medium rounded-lg"
          >
            Reservar Agora
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
