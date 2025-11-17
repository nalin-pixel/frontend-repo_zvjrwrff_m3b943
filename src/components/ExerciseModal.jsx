import { useEffect } from "react";
import { X } from "lucide-react";

export default function ExerciseModal({ item, onClose }){
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!item) return null;
  return (
    <div role="dialog" aria-modal="true" className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative max-w-3xl mx-auto mt-10 bg-white dark:bg-neutral-950 rounded-2xl border border-black/10 dark:border-white/10 p-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-xs uppercase tracking-wide text-neutral-500">{item.level} • {item.concept}</div>
            <h3 className="font-semibold text-xl mt-1">{item.title}</h3>
          </div>
          <button aria-label="Fermer" onClick={onClose} className="p-2 rounded hover:bg-black/5 dark:hover:bg-white/10"><X size={18}/></button>
        </div>
        <p className="mt-3 text-sm text-neutral-700 dark:text-neutral-300">{item.description}</p>
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="space-y-3">
            <Section title="Énoncé">
              <p className="text-sm">{item.description}</p>
            </Section>
            {item.hints?.length>0 && (
              <Section title="Pistes">
                <ul className="list-disc pl-5 text-sm space-y-1">
                  {item.hints.map((h,i)=> <li key={i}>{h}</li>)}
                </ul>
              </Section>
            )}
            {item.examples?.length>0 && (
              <Section title="Exemples">
                <div className="space-y-2 text-xs">
                  {item.examples.map((ex,i)=> (
                    <div key={i} className="rounded border border-black/10 dark:border-white/10 p-2">
                      <div><strong>Entrée:</strong> {ex.input}</div>
                      <div className="mt-1"><strong>Sortie:</strong> {ex.output}</div>
                    </div>
                  ))}
                </div>
              </Section>
            )}
          </div>
          <div className="space-y-3">
            <Section title="Solution (référence)">
              <pre className="text-xs overflow-auto rounded border border-black/10 dark:border-white/10 p-3 bg-neutral-50 dark:bg-neutral-900"><code>{item.solution?.code}</code></pre>
            </Section>
            {item.explanation && (
              <Section title="Explications">
                <p className="text-sm">{item.explanation}</p>
              </Section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }){
  return (
    <div>
      <h4 className="font-medium text-sm text-neutral-600 dark:text-neutral-300">{title}</h4>
      <div className="mt-2">{children}</div>
    </div>
  );
}
