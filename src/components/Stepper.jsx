import React from "react";
import { Minus, Plus } from "lucide-react";

// Stepper táctil gigante: [-] [ 4 Series ] [+]
// Estilizado con tus variables globales para consistencia total
export default function Stepper({ unit, value, onChange, min = 1, max = 20, step = 1 }) {
  const btn =
    "w-12 h-12 rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--card))] flex items-center justify-center active:scale-95 transition disabled:opacity-30 shrink-0";
  
  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={() => onChange(Math.max(min, value - step))}
        disabled={value <= min}
        className={btn}
        aria-label={`Restar ${unit}`}
      >
        <Minus size={22} className="text-[hsl(var(--foreground))]" />
      </button>
      
      <span className="flex-1 text-center font-mono text-lg font-bold text-[hsl(var(--foreground))]">
        {value} <span className="text-xs text-[hsl(var(--muted-foreground))] uppercase tracking-wider">{unit}</span>
      </span>
      
      <button
        type="button"
        onClick={() => onChange(Math.min(max, value + step))}
        disabled={value >= max}
        className={btn}
        aria-label={`Sumar ${unit}`}
      >
        <Plus size={22} className="text-[hsl(var(--foreground))]" />
      </button>
    </div>
  );
}