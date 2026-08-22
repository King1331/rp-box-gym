import React, { useState } from 'react';
import { ChevronDown, Info } from 'lucide-react';

export default function RoutineCard({ rutina }) {
  // Estado para controlar si el acordeón está abierto o cerrado
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="glass-card overflow-hidden">
      {/* Cabecera de la tarjeta */}
      <div className="p-5">
        <h3 className="font-sans font-bold text-2xl uppercase mb-1">{rutina.titulo}</h3>
        <p className="text-[hsl(var(--muted-foreground))] font-mono text-[11px] uppercase tracking-widest mb-4">
          {rutina.duracion} MIN · {rutina.ejercicios.length} EJERCICIOS
        </p>
        
        <div className="flex gap-2">
          {/* Botón principal de Empezar */}
          <button className="primary-btn flex-1" onClick={() => console.log('Empezar rutina')}>
            EMPEZAR
          </button>
          
          {/* Botón para expandir detalles (Acordeón) */}
          <button 
            className="secondary-btn px-4"
            onClick={() => setExpanded(!expanded)}
          >
            <ChevronDown size={18} className={`transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </div>

      {/* Cuerpo Desplegable (Ejercicios, Tempo y Video) */}
      {expanded && (
        <div className="border-t border-[hsl(var(--border))] bg-[#070707] animate-in slide-in-from-top-2 fade-in duration-200">
          {rutina.ejercicios.map((ej, idx) => (
            <div key={idx} className="p-5 border-b border-[hsl(var(--border))] last:border-0">
              
              {/* Título del ejercicio con el número */}
              <div className="flex items-center gap-3 mb-3">
                <span className="grid place-items-center w-7 h-7 rounded-full bg-[hsl(var(--muted))] text-[hsl(var(--muted-foreground))] font-mono text-[11px]">
                  {idx + 1}
                </span>
                <b className="font-sans text-xl uppercase tracking-wide">{ej.nombre}</b>
              </div>
              
              <div className="pl-10">
                <p className="text-[hsl(var(--muted-foreground))] text-[14px] leading-relaxed mb-4">
                  {ej.descripcion}
                </p>
                
                {/* Caja de Tempo */}
                {ej.tempo && (
                  <div className="mb-4 p-4 rounded-lg bg-black border border-[hsl(var(--border))]">
                    <span className="flex items-center gap-1.5 text-[hsl(var(--foreground))] font-mono text-[10px] uppercase tracking-widest mb-2 opacity-70">
                      <Info size={14} /> Tempo de ejecución
                    </span>
                    <p className="font-mono text-[12px] leading-relaxed text-[hsl(var(--muted-foreground))]">
                      {ej.tempo}
                    </p>
                  </div>
                )}

                {/* Contenedor de Video (Aspect Ratio nativo 16:9) */}
                {ej.videoUrl && (
                  <div className="relative aspect-video rounded-lg overflow-hidden bg-black border border-[hsl(var(--border))]">
                    <video 
                      src={ej.videoUrl} 
                      controls 
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>
              
            </div>
          ))}
        </div>
      )}
    </div>
  );
}