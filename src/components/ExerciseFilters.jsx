import { useMemo } from "react";

export default function ExerciseFilters({ levels, concepts, filters, setFilters }){
  const levelOptions = useMemo(()=>[{label:"Tous", value:""}, ...levels.map(l=>({label:l, value:l}))],[levels]);
  const conceptOptions = useMemo(()=>[{label:"Tous", value:""}, ...concepts.map(c=>({label:c, value:c}))],[concepts]);

  return (
    <div className="flex flex-col md:flex-row gap-3">
      <select aria-label="Filtrer par niveau" value={filters.level} onChange={(e)=>setFilters(f=>({...f, level: e.target.value}))} className="px-3 py-2 rounded border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-950">
        {levelOptions.map(o=> <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
      <select aria-label="Filtrer par concept" value={filters.concept} onChange={(e)=>setFilters(f=>({...f, concept: e.target.value}))} className="px-3 py-2 rounded border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-950">
        {conceptOptions.map(o=> <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
      <input aria-label="Rechercher" placeholder="Recherche…" value={filters.q} onChange={(e)=>setFilters(f=>({...f, q: e.target.value}))} className="flex-1 px-3 py-2 rounded border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-950"/>
    </div>
  );
}
