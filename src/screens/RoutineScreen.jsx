import { Dumbbell } from 'lucide-react';

import ExerciseCard from '@/components/ExerciseCard';
import { exercises } from '@/lib/data';
import useRoutineLogs from '@/hooks/useRoutineLogs';

export default function RoutineScreen() {
  const { logs, saved, completed, completeSet, updateLog } =
    useRoutineLogs(exercises);

  return (
    <>
      <section className="page-header">
        <div className="eyebrow">Martes · Día 03</div>
        <h1>Pierna</h1>
        <p>Hipertrofia · Enfócate en el control, no en el ego.</p>
      </section>

      <section className="glass-card routine-summary">
        <div>
          <span>Progreso de sesión</span>
          <strong>{completed} / 13 series</strong>
        </div>
        <div style={{ color: 'hsl(var(--primary))' }}>
          <Dumbbell size={25} />
        </div>
      </section>

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
    </>
  );
}