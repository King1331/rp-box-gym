import React, { useState } from "react";
import { useLocation } from "wouter";
import { Clock, Dumbbell, Plus, Play, ChevronDown, ChevronUp, Sparkles, Flame } from "lucide-react";
import { rutinasMock } from "@/lib/rutinasMock";

export default function RoutineSelector() {
  const [, setLocation] = useLocation();
  const [tab, setTab] = useState("coach");
  const [openCardId, setOpenCardId] = useState(null);

  const totalCoach = rutinasMock.filter((r) => r.origen === "coach" && r.visible).length;
  const totalMios = rutinasMock.filter((r) => r.origen === "mio" && r.visible).length;
  const lista = rutinasMock.filter((r) => r.origen === tab && r.visible);

  const rutinaEnCurso = rutinasMock.find((r) => r.enCurso) || rutinasMock[0];

  const toggleAccordion = (id) => {
    setOpenCardId(openCardId === id ? null : id);
  };

  return (
    <div className="shell-content pb-28">
      
      {/* Header — Título + Racha */}
      <header className="page-header flex items-center justify-between">
        <div>
          <div className="eyebrow mb-1">Entrenamientos</div>
          <h1>Rutinas</h1>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-white">
          <Flame size={14} className="text-white" />
          <span>5 días</span>
        </div>
      </header>

      {/* SECCIÓN: En curso (Monocromática) */}
      {rutinaEnCurso && (
        <div className="mb-8">
          <div className="eyebrow mb-3 text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
            En curso
          </div>

          <div className="rounded-2xl overflow-hidden ring-1 ring-white/30 bg-zinc-950 transition-all duration-300 shadow-xl">
            <div className="relative h-72">
              <img 
                src={rutinaEnCurso.foto || "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1000&auto=format&fit=crop"} 
                alt={rutinaEnCurso.titulo} 
                className="absolute inset-0 w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />

              <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
                <p className="eyebrow text-white/70 tracking-wider">
                  {rutinaEnCurso.musculos ? rutinaEnCurso.musculos.join(" · ") : "General"}
                </p>
                <span className="px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-sm ring-1 ring-white/25 font-mono text-[10px] uppercase tracking-wider text-white font-semibold">
                  Activa
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="font-sans font-bold text-3xl uppercase text-white leading-[0.9] tracking-tight">
                  {rutinaEnCurso.titulo}
                </h3>
                
                <div className="flex items-center gap-4 mt-3 text-xs text-zinc-300 font-mono">
                  <span className="flex items-center gap-1.5">
                    <Clock size={13} /> {rutinaEnCurso.duracion} min
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Dumbbell size={13} /> {rutinaEnCurso.ejercicios?.length || 0} ejercicios
                  </span>
                </div>

                <div className="mt-4">
                  <button 
                    className="w-full bg-white hover:bg-zinc-200 text-black font-sans font-bold uppercase tracking-wider py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-all" 
                    onClick={() => setLocation("/routine")}
                  >
                    <Play size={16} fill="black" /> Continuar rutina
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Pestañas de Navegación (Toggle tipo píldora) */}
      <div className="progress-tabs mb-6">
        <button
          onClick={() => setTab("coach")}
          className={`tab-btn flex-1 text-center py-3 text-[11px] ${tab === "coach" ? "active" : ""}`}
        >
          Del Coach ({totalCoach})
        </button>
        <button
          onClick={() => setTab("mio")}
          className={`tab-btn flex-1 text-center py-3 text-[11px] ${tab === "mio" ? "active" : ""}`}
        >
          Mis Creaciones ({totalMios})
        </button>
      </div>

      {/* Botón "Crear nueva rutina" — exclusivo de Mis Creaciones */}
      {tab === "mio" && (
        <div className="mb-6">
          <button
            onClick={() => setLocation("/crear-rutina")}
            className="primary-btn w-full flex items-center justify-center gap-2 py-3.5"
          >
            <Plus size={18} /> Crear nueva rutina
          </button>
        </div>
      )}

      {/* Lista de Tarjetas de Rutinas */}
      <div className="space-y-4">
        {lista.length === 0 ? (
          <div className="glass-card p-8 text-center">
            <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center mx-auto mb-3 text-zinc-400">
              <Sparkles size={20} />
            </div>
            <p className="text-zinc-400 text-sm mb-4">No hay rutinas personalizadas creadas todavía.</p>
            <button className="secondary-btn" onClick={() => setLocation("/crear-rutina")}>
              <Plus size={16} className="mr-2" /> Diseñar primera rutina
            </button>
          </div>
        ) : (
          lista.map((rutina) => {
            const isOpen = openCardId === rutina.id;

            return (
              <div 
                key={rutina.id} 
                className="rounded-2xl overflow-hidden ring-1 ring-white/10 bg-zinc-950 transition-all duration-300"
              >
                {/* Tarjeta principal con foto a sangre */}
                <div className="relative h-80">
                  <img 
                    src={rutina.foto || "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1000&auto=format&fit=crop"} 
                    alt={rutina.titulo} 
                    className="absolute inset-0 w-full h-full object-cover" 
                  />
                  
                  {/* Degradado oscuro de abajo hacia arriba */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/65 to-black/20" />

                  {/* Top: Músculos + Badge de Origen */}
                  <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
                    <p className="eyebrow text-white/70 tracking-wider">
                      {rutina.musculos ? rutina.musculos.join(" · ") : "General"}
                    </p>
                    <span className="px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm ring-1 ring-white/15 font-mono text-[10px] uppercase tracking-wider text-white">
                      {rutina.origen === "coach" ? "Coach" : "Mía"}
                    </span>
                  </div>

                  {/* Bottom: Título + Métricas + Botones de acción */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-sans font-bold text-3xl uppercase text-white leading-[0.9] tracking-tight">
                      {rutina.titulo}
                    </h3>
                    
                    <div className="flex items-center gap-4 mt-3 text-xs text-zinc-300 font-mono">
                      <span className="flex items-center gap-1.5">
                        <Clock size={13} /> {rutina.duracion} min
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Dumbbell size={13} /> {rutina.ejercicios?.length || 0} ejercicios
                      </span>
                    </div>

                    <div className="grid grid-cols-[1fr_auto] gap-2 mt-4">
                      <button 
                        className="primary-btn flex items-center justify-center gap-2 py-3 opacity-80 cursor-default" 
                        onClick={(e) => e.preventDefault()}
                      >
                        <Play size={15} /> Empezar
                      </button>
                      <button 
                        onClick={() => toggleAccordion(rutina.id)} 
                        className="secondary-btn !w-auto px-4 flex items-center gap-1.5 py-3 text-xs font-mono uppercase"
                      >
                        Ver {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Acordeón de ejercicios desplegable */}
                {isOpen && (
                  <div className="p-4 space-y-3 bg-zinc-900 border-t border-zinc-800 animate-fadeIn">
                    <div className="eyebrow text-zinc-400 mb-2">Desglose de ejercicios</div>
                    {rutina.ejercicios && rutina.ejercicios.length > 0 ? (
                      rutina.ejercicios.map((ej, idx) => (
                        <div key={idx} className="flex items-center justify-between py-2 border-b border-zinc-800/60 text-xs font-mono text-zinc-300">
                          <span className="font-bold uppercase text-white">{ej.nombre || ej}</span>
                          <span className="text-zinc-500">{ej.series ? `${ej.series} series` : ''}</span>
                        </div>
                      ))
                    ) : (
                      <p className="text-xs text-zinc-500 font-mono">Sin ejercicios configurados.</p>
                    )}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

    </div>
  );
}