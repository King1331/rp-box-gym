import { Check, CircleCheck } from 'lucide-react';

export default function ExerciseCard({
  exercise,
  exerciseIndex,
  logs,
  saved,
  onCompleteSet,
  onUpdateLog,
}) {
  return (
    <section
      className="glass-card exercise-card"
      data-testid={`card-exercise-${exercise.id}`}
    >
      <div className="exercise-head">
        <div>
          <div className="exercise-number">
            0{exerciseIndex + 1} — {exercise.target}
          </div>
          <h3>{exercise.name}</h3>
          <p>{exercise.cue}</p>
        </div>
        <div className="eyebrow">
          {exercise.sets} × {exercise.reps}
        </div>
      </div>

      {logs.map((set, setIndex) => (
        <div className="set-row" key={setIndex}>
          <div className="set-no">S{setIndex + 1}</div>

          <div className="field">
            <label>Peso (kg)</label>
            <input
              type="number"
              value={set.weight}
              onChange={(event) =>
                onUpdateLog(exercise.id, setIndex, 'weight', event.target.value)
              }
              data-testid={`input-weight-${exercise.id}-${setIndex + 1}`}
            />
          </div>

          <div className="field">
            <label>Reps</label>
            <input
              type="number"
              value={set.reps}
              onChange={(event) =>
                onUpdateLog(exercise.id, setIndex, 'reps', event.target.value)
              }
              data-testid={`input-reps-${exercise.id}-${setIndex + 1}`}
            />
          </div>

          <button
            className={`set-check ${set.done ? 'done' : ''}`}
            onClick={() => onCompleteSet(exercise.id, setIndex)}
            aria-label={set.done ? 'Serie completada' : 'Completar serie'}
            data-testid={`button-complete-${exercise.id}-${setIndex + 1}`}
          >
            {set.done ? <Check size={18} /> : <CircleCheck size={18} />}
          </button>
        </div>
      ))}

      <div className="saved-note">
        {logs.every((set) => set.done)
          ? 'ENTRENAMIENTO COMPLETO'
          : saved?.startsWith(exercise.id)
            ? 'GUARDADO LOCALMENTE ✓'
            : ''}
      </div>
    </section>
  );
}