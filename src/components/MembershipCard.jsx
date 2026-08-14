import { Zap } from 'lucide-react';

export default function MembershipCard({ onPay }) {
  return (
    <section className="glass-card membership" data-testid="card-membership">
      <div className="row-between">
        <div className="eyebrow">Membresía activa</div>
        <span className="status-pill">Activa</span>
      </div>

      <h3>Plan Box mensual</h3>
      <p>
        Tu próximo pago es en{' '}
        <strong style={{ color: 'hsl(var(--foreground))' }}>3 días</strong>
      </p>
      <div className="date">VENCE · 25 SEP 2024</div>

      <button
        className="primary-btn"
        onClick={onPay}
        data-testid="button-sinpe"
      >
        <Zap size={15} />
        SINPE
      </button>
    </section>
  );
}