import React, { useState } from "react";
import { Play, Check } from "lucide-react";
import ScreenHeader from "@/components/ScreenHeader";

const exercises = [
  {
    name: "Sentadilla Libre",
    detail: "4 series x 8-10 reps",
    media: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=600&q=70",
  },
  {
    name: "Prensa de Pierna",
    detail: "4 series x 12 reps",
    media: "https://images.unsplash.com/photo-1534258936925-c58ed744d72e?auto=format&fit=crop&w=600&q=70",
  },
  {
    name: "Peso Muerto Rumano",
    detail: "3 series x 10 reps",
    media: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=600&q=70",
  },
  {
    name: "Curl Femoral",
    detail: "3 series x 15 reps",
    media: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=600&q=70",
  },
];

function ExerciseCard({ ex, index }) {
  const [sets, setSets] = useState(
    Array.from({ length: 4 }, () => ({ weight: "", reps: "", done: false }))
  );
  const seriesCount = parseInt(ex.detail.match(/(\d+)\s*series/)?.[1] ?? "4", 10);
  const activeSets = sets.slice(0, seriesCount);

  const toggleDone = (i) =>
    setSets((prev) => prev.map((s, idx) => (idx === i ? { ...s, done: !s.done } : s)));

  return (
    <div className="rounded-2xl border border-white/10 bg-[#111111] overflow-hidden">
      {/* Media */}
      <div className="relative h-40 bg-black">
        <img src={ex.media} alt={ex.name} className="w-full h-full object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] to-transparent" />
        <div className="absolute bottom-3 left-3 right-3">
          <h3 className="text-lg font-black text-white">{ex.name}</h3>
          <p className="text-sm text-[#FFD60A] font-semibold">{ex.detail}</p>
        </div>
        <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-[#FFD60A] flex items-center justify-center">
          <Play className="w-4 h-4 text-black fill-black" />
        </div>
      </div>

      {/* Inputs por serie */}
      <div className="p-4 space-y-2.5">
        <div className="grid grid-cols-[28px_1fr_1fr_36px] gap-2 text-[11px] text-white/40 uppercase tracking-wider font-semibold px-1">
          <span>Set</span>
          <span>Peso (kg)</span>
          <span>Reps</span>
          <span></span>
        </div>
        {activeSets.map((s, i) => (
          <div key={i} className="grid grid-cols-[28px_1fr_1fr_36px] gap-2 items-center">
            <span className="text-white/50 text-sm font-bold text-center">{i + 1}</span>
            <input
              type="number"
              inputMode="decimal"
              placeholder="0"
              value={s.weight}
              onChange={(e) =>
                setSets((prev) => prev.map((x, idx) => (idx === i ? { ...x, weight: e.target.value } : x)))
              }
              className="bg-black border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:border-[#FFD60A] focus:outline-none transition w-full"
            />
            <input
              type="number"
              inputMode="numeric"
              placeholder="0"
              value={s.reps}
              onChange={(e) =>
                setSets((prev) => prev.map((x, idx) => (idx === i ? { ...x, reps: e.target.value } : x)))
              }
              className="bg-black border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:border-[#FFD60A] focus:outline-none transition w-full"
            />
            <button
              onClick={() => toggleDone(i)}
              className={`w-9 h-9 rounded-lg flex items-center justify-center transition ${
                s.done ? "bg-[#FFD60A] text-black" : "bg-white/5 text-white/40 border border-white/10"
              }`}
            >
              <Check className="w-4 h-4" strokeWidth={3} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Routine() {
  return (
    <div>
      <ScreenHeader title="Día 3: Pierna (Hipertrofia)" showBack />
      <div className="px-4 pt-4 space-y-4">
        <p className="text-white/50 text-sm">
          Registra tu peso y reps en cada serie. Toca el check al completar.
        </p>
        {exercises.map((ex, i) => (
          <ExerciseCard key={i} ex={ex} index={i} />
        ))}
        <button className="w-full bg-[#FFD60A] text-black font-bold py-3.5 rounded-xl active:scale-[0.98] transition mt-2">
          Finalizar Entrenamiento
        </button>
      </div>
    </div>
  );
}