import { ChevronRight } from "lucide-react";

export default function ExerciseCard({ item, onOpen }){
  return (
    <button onClick={()=>onOpen(item)} className="text-left group rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-950 p-4 hover:shadow-md transition">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-xs uppercase tracking-wide text-neutral-500">{item.level} • {item.concept}</div>
          <h3 className="font-semibold mt-1">{item.title}</h3>
        </div>
        <div className="shrink-0 w-8 h-8 grid place-items-center rounded-full bg-[#bdf400]/20 text-black">
          <ChevronRight size={18} className="group-hover:translate-x-0.5 transition" />
        </div>
      </div>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300 line-clamp-2">{item.description}</p>
    </button>
  );
}
