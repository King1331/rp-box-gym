import { ShieldCheck } from 'lucide-react';

import PaymentCard from '@/components/PaymentCard';
import ReceiptModal from '@/components/ReceiptModal';
import usePaymentReview from '@/hooks/usePaymentReview';

export default function StaffScreen() {
  const {
    paymentVisible,
    receiptOpen,
    feedback,
    openReceipt,
    closeReceipt,
    settle,
  } = usePaymentReview();

  return (
    <>
      <section className="page-header">
        <div className="eyebrow">Panel interno · Staff</div>
        <h1>Pagos</h1>
        <p>Revisa y confirma los pagos SINPE pendientes.</p>
      </section>

      <div className="row-between" style={{ marginBottom: 13 }}>
        <span className="eyebrow">Pendientes de revisión</span>
        <span className="status-pill">
          {paymentVisible ? '01 pendiente' : '0 pendientes'}
        </span>
      </div>

      {paymentVisible ? (
        <PaymentCard
          onViewReceipt={openReceipt}
          onReject={settle}
          onApprove={settle}
        />
      ) : (
        <section className="glass-card empty-state" data-testid="empty-payments">
          <ShieldCheck size={32} />
          <h3>Todo al día</h3>
          <p>No hay pagos pendientes de revisión.</p>
        </section>
      )}

      {feedback && (
        <div className="toast" data-testid="status-payment-feedback">
          {feedback}
        </div>
      )}

      {receiptOpen && <ReceiptModal onClose={closeReceipt} />}
    </>
  );
}