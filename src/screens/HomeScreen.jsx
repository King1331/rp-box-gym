import { Dumbbell, Flame, HeartPulse } from 'lucide-react';
import { useLocation as useWouterLocation } from 'wouter';

import MembershipCard from '@/components/MembershipCard';
import MetricCard from '@/components/MetricCard';
import SectionHeader from '@/components/SectionHeader';
import WorkoutCard from '@/components/WorkoutCard';

export default function HomeScreen() {
  const [, setLocation] = useWouterLocation();

  return (
    <>
      <section className="hero-copy">
        <div className="eyebrow">Martes · 22 septiembre 2024</div>
        <h1>
          Hola,
          <br />
          <em>Juan.</em>
        </h1>
        <p className="hero-sub">Hoy no se negocia. Hoy se entrena.</p>
      </section>

      <MembershipCard onPay={() => setLocation('/staff')} />

      <SectionHeader
        title="Tu entrenamiento"
        eyebrow="Ver rutina"
        href="/routine"
        testId="link-view-routine"
      />
      <WorkoutCard onStart={() => setLocation('/routine')} />

      <SectionHeader title="Tu marcador" eyebrow="Esta semana" />
      <section className="metrics-grid">
        <MetricCard
          icon={Flame}
          value="04"
          label="Racha actual"
          delta="+1 sesión"
          testId="metric-streak"
        />
        <MetricCard
          icon={Dumbbell}
          value="12.4k"
          label="Volumen kg"
          delta="+8.6%"
          testId="metric-volume"
        />
        <MetricCard
          icon={HeartPulse}
          value="82%"
          label="Recuperación"
          delta="Excelente"
          testId="metric-recovery"
        />
      </section>
    </>
  );
}