import React, { useState } from "react";
import { useLocation } from "wouter";
import { ChevronLeft, Plus, Minus, X, Check } from "lucide-react";
import { ejerciciosPorMusculo } from "@/lib/rutinasMock";
import Stepper from "@/components/Stepper";

const DIAS = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
const DIAS_CORTO = ["L", "M", "M", "J", "V", "S", "D"];

export default function RoutineCreator() {
  const [, setLocation] = useLocation();
  const [titulo, setTitulo] = useState("");
  const [selectedDays, setSelectedDays] = useState([]);
  const [activeTab, setActiveTab] = useState(null);
  const [routineData, setRoutineData] = useState({});
  const [sheet, setSheet] = useState(false);
  const [musculoActivo, setMusculoActivo] = useState(Object.keys(ejerciciosPorMusculo)[0]);

  // --- Lógica de días ---
  const toggleDay = (d) => {
    if (selectedDays.includes(d)) {
      const next = selectedDays.filter((x) => x !== d);
      setSelectedDays(next);
      const { [d]: _omit, ...rest } = routineData;
      setRoutineData(rest);
      setActiveTab((at) => (at === d ? next[0] || null : at));
    } else {
      setSelectedDays([...selectedDays, d]);
      setRoutineData({ ...routineData, [d]: routineData[d] || [] });
      setActiveTab((at) => at || d);
    }
  };

  // --- Lógica de ejercicios (sobre el día activo) ---
  const ejerciciosDia = activeTab ? routineData[activeTab] || [] : [];
  const totalEjercicios = Object.values(routineData).flat().length;

  const agregar = (nombre, musculo) => {
    if (!activeTab) return;
    setRoutineData((prev) => ({
      ...prev,
      [activeTab]: [
        ...(prev[activeTab] || []),
        { id: Date.now() + Math.random(), nombre, musculo, series: 4, reps: 10 },
      ],
    }));
  };

  const quitar = (id) =>
    setRoutineData((prev) => ({
      ...prev,
      [activeTab]: (prev[activeTab] || []).filter((e) => e.id !== id),
    }));

  const update = (id, campo, valor) =>
    setRoutineData((prev) => ({
      ...prev,
      [activeTab]: (prev[activeTab] || []).map((e) => (e.id === id ? { ...e, [campo]: valor } : e)),
    }));

  const guardar = () => setLocation("/rutinas");

  return (
    <div className="shell-content pb-28">
      
      {/* Header */}
      <header className="page-header">
        <button
          onClick={() => setLocation("/rutinas")}
          className="flex items-center gap-1 text-zinc-400 mb-3 -ml-1 cursor-pointer"
        >
          <ChevronLeft size={20} />
          <span className="text-sm font-mono uppercase tracking-widest">Volver</span>
        </button>
        <div className="eyebrow mb-1">Editor de entrenamientos</div>
        <h1>Crear Rutina</h1>
      </header>

      <div className="space-y-6 mt-4">
        {/* 1. Nombre */}
        <div>
          <label className="eyebrow block mb-2">Nombre de la rutina</label>
          <input
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            placeholder="EJ. DÍA DE PIERNA"
            className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-4 py-4 text-lg font-sans font-bold uppercase text-white placeholder-zinc-600 focus:border-white focus:outline-none transition-all"
          />
        </div>

        {/* 2. Selector de días */}
        <div>
          <label className="eyebrow block mb-2">Días de entrenamiento</label>
          <div className="flex justify-between gap-1.5">
            {DIAS.map((d, i) => {
              const activo = selectedDays.includes(d);
              return (
                <button
                  key={d}
                  onClick={() => toggleDay(d)}
                  title={d}
                  className={`flex-1 aspect-square rounded-xl font-sans font-bold text-base transition-all ${
                    activo
                      ? "bg-white text-black font-extrabold shadow-md shadow-white/5"
                      : "bg-zinc-950 text-zinc-500 border border-zinc-800/80 hover:border-zinc-700"
                  }`}
                >
                  {DIAS_CORTO[i]}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3. Pestañas dinámicas + lienzo */}
        {selectedDays.length > 0 ? (
          <div className="space-y-4">
            <div className="flex gap-2 overflow-x-auto no-scrollbar -mx-4 px-4 pb-1">
              {selectedDays.map((d) => (
                <button
                  key={d}
                  onClick={() => setActiveTab(d)}
                  className={`px-4 py-2.5 rounded-xl font-mono text-xs uppercase tracking-wider whitespace-nowrap transition-all ${
                    activeTab === d 
                      ? "bg-white text-black font-semibold" 
                      : "bg-zinc-950 border border-zinc-800 text-zinc-400 hover:text-white"
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>

            <div className="flex items-center justify-between pt-2">
              <h2 className="font-sans font-bold text-xl uppercase tracking-tight text-white">Ejercicios para {activeTab}</h2>
              <span className="eyebrow">{ejerciciosDia.length} añadidos</span>
            </div>

            {ejerciciosDia.length === 0 ? (
              <div className="rounded-2xl border border-zinc-800/80 bg-zinc-950 p-8 text-center">
                <p className="text-zinc-500 text-sm font-mono">Añade tu primer ejercicio</p>
              </div>
            ) : (
              <div className="space-y-3">
                {ejerciciosDia.map((e) => (
                  <div key={e.id} className="rounded-2xl border border-zinc-800/80 bg-zinc-950 p-4 transition-all">
                    <div className="flex items-start justify-between gap-2 mb-4">
                      <div>
                        <h3 className="font-sans font-bold text-lg uppercase text-white tracking-tight">{e.nombre}</h3>
                        <p className="eyebrow mt-0.5 text-zinc-400">{e.musculo}</p>
                      </div>
                      <button onClick={() => quitar(e.id)} className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white transition-all shrink-0">
                        <X size={16} />
                      </button>
                    </div>
                    <div className="space-y-3 pt-3 border-t border-zinc-900">
                      <Stepper unit="Series" value={e.series} onChange={(v) => update(e.id, "series", v)} />
                      <Stepper unit="Reps" value={e.reps} onChange={(v) => update(e.id, "reps", v)} />
                    </div>
                  </div>
                ))}
              </div>
            )}

            <button className="secondary-btn w-full mt-3 !py-3.5" onClick={() => setSheet(true)}>
              <Plus size={18} className="mr-2" /> Añadir Ejercicio
            </button>

            {totalEjercicios > 0 && (
              <button className="primary-btn w-full mt-3 !py-3.5" onClick={guardar}>
                <Check size={18} className="mr-2" /> Guardar Rutina
              </button>
            )}
          </div>
        ) : (
          <div className="rounded-2xl border border-zinc-800/80 bg-zinc-950 p-8 text-center">
            <p className="text-zinc-500 text-sm font-mono">Selecciona al menos un día para empezar</p>
          </div>
        )}
      </div>

      {/* Bottom Sheet — selector de ejercicios con indicador de agregado */}
      {sheet && (
        <>
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40" onClick={() => setSheet(false)} />
          <div className="fixed left-0 right-0 bottom-0 z-50 bg-zinc-950 border-t border-zinc-800 rounded-t-3xl max-h-[75vh] flex flex-col shadow-2xl animate-in slide-in-from-bottom duration-300">
            
            {/* Header del sheet */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-900">
              <h3 className="font-sans font-bold text-xl uppercase text-white tracking-tight">
                Añadir a {activeTab}
              </h3>
              <button onClick={() => setSheet(false)} className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white transition-all">
                <X size={18} />
              </button>
            </div>

            {/* Pestañas musculares */}
            <div className="flex gap-2 overflow-x-auto px-5 py-3 border-b border-zinc-900 no-scrollbar">
              {Object.keys(ejerciciosPorMusculo).map((m) => (
                <button
                  key={m}
                  onClick={() => setMusculoActivo(m)}
                  className={`px-4 py-2 rounded-xl font-mono text-xs uppercase tracking-wider whitespace-nowrap transition-all ${
                    musculoActivo === m 
                      ? "bg-white text-black font-semibold" 
                      : "bg-zinc-900 border border-zinc-800/80 text-zinc-400 hover:text-white"
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>

            {/* Lista de ejercicios */}
            <div className="overflow-y-auto p-5 grid grid-cols-1 gap-2.5">
              {ejerciciosPorMusculo[musculoActivo]?.map((nombre) => {
                const yaAgregado = ejerciciosDia.some((e) => e.nombre === nombre);

                return (
                  <button
                    key={nombre}
                    onClick={() => {
                      if (yaAgregado) {
                        const ejercicioExistente = ejerciciosDia.find((e) => e.nombre === nombre);
                        if (ejercicioExistente) quitar(ejercicioExistente.id);
                      } else {
                        agregar(nombre, musculoActivo);
                      }
                    }}
                    className={`flex items-center justify-between w-full px-4 py-3.5 rounded-2xl border transition-all text-left ${
                      yaAgregado 
                        ? "bg-zinc-900 border-zinc-700 text-white" 
                        : "bg-zinc-900/60 border-zinc-900 hover:border-zinc-800 text-zinc-200"
                    }`}
                  >
                    <span className="font-sans font-bold uppercase tracking-tight">{nombre}</span>
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all ${
                      yaAgregado ? "bg-white text-black" : "bg-zinc-800 text-zinc-400"
                    }`}>
                      {yaAgregado ? <Minus size={16} /> : <Plus size={16} />}
                    </div>
                  </button>
                );
              })}
            </div>

          </div>
        </>
      )}
    </div>
  );
}