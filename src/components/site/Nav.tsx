import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/tech-qho-logo.png";

const links = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#testimonials", label: "Voices" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-navy-deep/80 border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center">
          <img
            src={logo}
            alt="Tech Qho logo"
            className="h-11 w-auto rounded-md bg-white object-contain p-0.5 shadow-glow"
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white/70 transition-colors hover:text-cyan-electric"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-lg bg-cyber-gradient px-5 py-2.5 text-sm font-semibold text-navy-deep shadow-glow transition-transform hover:scale-105 md:inline-flex"
        >
          Get a Quote
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="rounded-md p-2 text-white md:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-navy-deep/95 backdrop-blur-xl md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-medium text-white/80 hover:bg-white/5 hover:text-cyan-electric"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-lg bg-cyber-gradient px-4 py-3 text-center text-sm font-semibold text-navy-deep"
            >
              Get a Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
