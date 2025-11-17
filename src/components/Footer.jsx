export default function Footer(){
  return (
    <footer id="about" className="mt-20 border-t border-black/5 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6 text-sm">
        <div>
          <div className="font-orbitron text-lg">Java Quest</div>
          <p className="mt-2 text-neutral-600 dark:text-neutral-300">Plateforme d'exercices Java pour tous les niveaux.</p>
        </div>
        <div>
          <div className="font-medium">Liens</div>
          <ul className="mt-2 space-y-1">
            <li><a className="hover:text-[#bdf400]" href="#hero">Accueil</a></li>
            <li><a className="hover:text-[#bdf400]" href="#exercises">Exercices</a></li>
            <li><a className="hover:text-[#bdf400]" href="#about">À propos</a></li>
          </ul>
        </div>
        <div>
          <div className="font-medium">Réseaux</div>
          <div className="mt-2 flex gap-3">
            <a aria-label="GitHub" className="hover:opacity-70" href="#">GH</a>
            <a aria-label="Twitter" className="hover:opacity-70" href="#">TW</a>
            <a aria-label="LinkedIn" className="hover:opacity-70" href="#">IN</a>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-neutral-500 py-4">© {new Date().getFullYear()} Java Quest — Tous droits réservés.</div>
    </footer>
  );
}
