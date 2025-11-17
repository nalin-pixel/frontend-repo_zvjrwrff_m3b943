import { useEffect, useState } from "react";
import { Moon, Sun, Menu } from "lucide-react";

export default function Header({ onToggleTheme, theme }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setOpen(false);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 dark:bg-neutral-900/70 border-b border-black/5 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-[#bdf400] grid place-items-center font-bold text-black">JQ</div>
          <span className="font-orbitron text-lg tracking-wide">Java Quest</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#hero" className="hover:text-[#bdf400] transition">Accueil</a>
          <a href="#exercises" className="hover:text-[#bdf400] transition">Exercices</a>
          <a href="#about" className="hover:text-[#bdf400] transition">À propos</a>
        </nav>
        <div className="flex items-center gap-2">
          <button aria-label="Menu" className="md:hidden p-2 rounded hover:bg-black/5 dark:hover:bg-white/10" onClick={()=>setOpen(!open)}>
            <Menu size={20} />
          </button>
          <button aria-label="Basculer le thème" onClick={onToggleTheme} className="p-2 rounded hover:bg-black/5 dark:hover:bg-white/10">
            {theme === "dark" ? <Sun size={18}/> : <Moon size={18}/>}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-black/5 dark:border-white/10 px-4 py-3 space-y-2">
          <a href="#hero" className="block">Accueil</a>
          <a href="#exercises" className="block">Exercices</a>
          <a href="#about" className="block">À propos</a>
        </div>
      )}
    </header>
  );
}
