import { ChevronRight } from 'lucide-react';

export default function WorkoutCard({ onStart }) {
  return (
    <section className="glass-card workout-card" data-testid="card-workout">
      <div className="workout-title">
        <div className="day-block">
          <strong>03</strong>
          <span>Día</span>
        </div>

        <div>
          <div className="eyebrow">Hoy · 58 min aprox.</div>
          <h3>Pierna</h3>
          <p className="muted">Hipertrofia</p>
        </div>
      </div>

      <div className="exercise-preview">
        <div>
          <b>Sentadilla trasera</b>
          <small>4 series · 8 repeticiones</small>
        </div>
        <span>01 / 04</span>
      </div>

      <button
        className="primary-btn"
        style={{ width: '100%' }}
        onClick={onStart}
        data-testid="button-start-workout"
      >
        Empezar entrenamiento
        <ChevronRight size={17} />
      </button>
    </section>
  );
}