import { Check, ChevronRight, X } from 'lucide-react';

export default function PaymentCard({
  onViewReceipt,
  onReject,
  onApprove,
}) {
  return (
    <section className="glass-card staff-card" data-testid="card-payment-juan">
      <div className="row-between">
        <div className="staff-user">
          <div className="avatar">JP</div>
          <div>
            <h3>Juan Pérez</h3>
            <p>Enviado hoy · 09:42 AM</p>
          </div>
        </div>
        <div className="payment-amount">₡20,000</div>
      </div>

      <div className="payment-meta">
        <span>Mensualidad · Septiembre</span>
        <button
          className="secondary-btn"
          onClick={onViewReceipt}
          data-testid="button-view-receipt"
        >
          Ver comprobante
          <ChevronRight size={14} />
        </button>
      </div>

      <div className="staff-actions">
        <button
          className="secondary-btn reject-btn"
          onClick={() => onReject('Pago rechazado')}
          data-testid="button-reject-payment"
        >
          <X size={16} />
          Rechazar
        </button>
        <button
          className="primary-btn approve-btn"
          onClick={() => onApprove('Pago aprobado ✓')}
          data-testid="button-approve-payment"
        >
          <Check size={16} />
          Aprobar
        </button>
      </div>
    </section>
  );
}