export default function Hero({ onStart }){
  return (
    <section id="hero" className="bg-[#F5F5F5] dark:bg-neutral-900">
      <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="font-orbitron text-4xl md:text-5xl leading-tight text-[#111] dark:text-white">
            Apprends Java du niveau novice à legendary
          </h1>
          <p className="mt-4 text-neutral-700 dark:text-neutral-300">
            Plateforme d'apprentissage progressif du langage Java, proposant des exercices classés par concept.
          </p>
          <div className="mt-8 flex gap-3">
            <button onClick={onStart} className="px-5 py-3 rounded-lg bg-[#bdf400] text-black font-semibold shadow hover:shadow-md transition">
              Démarrer les exercices
            </button>
            <a href="#about" className="px-5 py-3 rounded-lg border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10 transition">
              En savoir plus
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#bdf400]/30 to-transparent rounded-3xl blur-2xl"/>
          <div className="relative rounded-3xl border border-black/10 dark:border-white/10 p-6 bg-white dark:bg-neutral-950">
            <pre className="text-xs md:text-sm overflow-auto"><code>{`// Exemple de solution Java\npublic class Solution {\n  public static void main(String[] args){\n    System.out.println("Hello, World!");\n  }\n}`}</code></pre>
          </div>
        </div>
      </div>
    </section>
  )
}
