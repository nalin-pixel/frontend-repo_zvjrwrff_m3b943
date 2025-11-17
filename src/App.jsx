import { useEffect, useMemo, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ExerciseFilters from "./components/ExerciseFilters";
import ExerciseCard from "./components/ExerciseCard";
import ExerciseModal from "./components/ExerciseModal";
import Footer from "./components/Footer";
import { exercises, LEVELS, CONCEPTS } from "./data/exercises";
import "./index.css";

function useTheme(){
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");
  useEffect(()=>{
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);
  return { theme, toggle: ()=> setTheme(t=> t === "dark" ? "light" : "dark") };
}

export default function App(){
  const { theme, toggle } = useTheme();
  const [filters, setFilters] = useState({ level: "", concept: "", q: "" });
  const [selected, setSelected] = useState(null);

  const list = useMemo(()=>{
    return exercises.filter(e=>
      (!filters.level || e.level === filters.level) &&
      (!filters.concept || e.concept === filters.concept) &&
      (!filters.q || (e.title+e.description+e.concept).toLowerCase().includes(filters.q.toLowerCase()))
    );
  }, [filters]);

  useEffect(()=>{
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/lucide@latest";
    script.defer = true;
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);

  return (
    <div className="min-h-screen bg-[#F5F5F5] text-[#111] dark:bg-neutral-950 dark:text-white">
      <Header onToggleTheme={toggle} theme={theme} />
      <Hero onStart={() => document.getElementById("exercises")?.scrollIntoView({behavior:"smooth"})} />

      <section id="exercises" className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="font-orbitron text-2xl">Exercices</h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-300">Filtre par niveau, concept ou recherche.</p>
          </div>
        </div>
        <div className="mt-6">
          <ExerciseFilters levels={LEVELS} concepts={CONCEPTS} filters={filters} setFilters={setFilters} />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {list.map(item => (
            <ExerciseCard key={item.id} item={item} onOpen={setSelected} />
          ))}
          {list.length === 0 && (
            <div className="col-span-full text-sm text-neutral-500">Aucun exercice ne correspond aux filtres.</div>
          )}
        </div>
      </section>

      <Footer />

      <ExerciseModal item={selected} onClose={()=>setSelected(null)} />
    </div>
  );
}
