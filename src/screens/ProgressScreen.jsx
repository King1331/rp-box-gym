import { TrendingDown, TrendingUp } from 'lucide-react';
import { useState } from 'react';

import ProgressChart from '@/components/ProgressChart';
import SectionHeader from '@/components/SectionHeader';

const chartPoints = {
  '1M': '18,147 60,138 102,142 144,126 186,130 228,115 270,119 312,101',
  '3M': '18,150 60,141 102,145 144,128 186,132 228,116 270,121 312,102',
  '6M': '18,153 60,146 102,149 144,137 186,133 228,121 270,111 312,92',
};

export default function ProgressScreen() {
  const [range, setRange] = useState('3M');

  return (
    <>
      <section className="page-header">
        <div className="eyebrow">Datos de rendimiento</div>
        <h1>Progreso</h1>
        <p>Los números no mienten. Tu trabajo habla.</p>
      </section>

      <div className="progress-metrics">
        <div className="glass-card progress-metric" data-testid="progress-weight">
          <TrendingDown size={17} color="hsl(var(--primary))" />
          <strong>78.4</strong>
          <span>Peso · kg</span>
          <div className="delta">−1.8 kg</div>
        </div>
        <div className="glass-card progress-metric" data-testid="progress-fat">
          <TrendingDown size={17} color="hsl(var(--primary))" />
          <strong>14.2%</strong>
          <span>Grasa corporal</span>
          <div className="delta">−2.4%</div>
        </div>
        <div className="glass-card progress-metric" data-testid="progress-muscle">
          <TrendingUp size={17} color="hsl(var(--primary))" />
          <strong>66.8</strong>
          <span>Masa muscular</span>
          <div className="delta">+1.2 kg</div>
        </div>
      </div>

      <section className="glass-card chart-card">
        <div className="chart-title">
          <b>Tendencia de peso</b>
          <span>−2.2% total</span>
        </div>

        <div className="progress-tabs">
          {Object.keys(chartPoints).map((item) => (
            <button
              className={`tab-btn ${range === item ? 'active' : ''}`}
              onClick={() => setRange(item)}
              key={item}
              data-testid={`button-range-${item}`}
            >
              {item}
            </button>
          ))}
        </div>

        <ProgressChart points={chartPoints[range]} />
      </section>

      <SectionHeader title="Último registro" eyebrow="20 Sep 2024" />
      <section className="glass-card" style={{ padding: '16px' }}>
        <div className="row-between">
          <span style={{ color: 'hsl(var(--muted-foreground))' }}>
            Peso corporal
          </span>
          <strong style={{ fontFamily: 'var(--app-font-mono)' }}>
            78.4 kg
          </strong>
        </div>
        <div
          style={{
            height: 1,
            background: 'rgba(255,255,255,.1)',
            margin: '13px 0',
          }}
        />
        <div className="row-between">
          <span style={{ color: 'hsl(var(--muted-foreground))' }}>
            Sentadilla 1RM estimado
          </span>
          <strong
            style={{
              fontFamily: 'var(--app-font-mono)',
              color: 'hsl(var(--primary))',
            }}
          >
            112 kg
          </strong>
        </div>
      </section>
    </>
  );
}