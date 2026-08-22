import { Dumbbell, ChevronLeft } from 'lucide-react';
import { useLocation } from 'wouter';

import ExerciseCard from '@/components/ExerciseCard';
import { exercises } from '@/lib/data';
import useRoutineLogs from '@/hooks/useRoutineLogs';

export default function RoutineScreen() {
  const [, setLocation] = useLocation();
  const { logs, saved, completed, completeSet, updateLog } =
    useRoutineLogs(exercises);

  return (
    <div className="shell-content pb-28">
      {/* Botón para volver a la pantalla de selección de rutinas */}
      <button 
        onClick={() => setLocation('/rutinas')}
        className="flex items-center gap-2 text-[hsl(var(--muted-foreground))] font-mono text-[10px] tracking-widest uppercase mb-4 hover:text-white transition-colors cursor-pointer"
      >
        <ChevronLeft size={14} />
        Volver a rutinas
      </button>

      <section className="page-header">
        <div className="eyebrow">Martes · Día 03</div>
        <h1>Pierna</h1>
        <p>Hipertrofia · Enfócate en el control, no en el ego.</p>
      </section>

      <section className="glass-card routine-summary mb-6">
        <div>
          <span>Progreso de sesión</span>
          <strong>{completed} / 13 series</strong>
        </div>
        <div style={{ color: 'hsl(var(--primary))' }}>
          <Dumbbell size={25} />
        </div>
      </section>

      <div className="space-y-4">
        {exercises.map((exercise, exerciseIndex) => (
          <ExerciseCard
            key={exercise.id}
            exercise={exercise}
            exerciseIndex={exerciseIndex}
            logs={logs[exercise.id]}
            saved={saved}
            onCompleteSet={completeSet}
            onUpdateLog={updateLog}
          />
        ))}
      </div>
    </div>
  );
}