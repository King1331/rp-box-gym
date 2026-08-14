import { X } from 'lucide-react';

export default function ReceiptModal({ onClose }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(event) => event.stopPropagation()}>
        <div className="row-between">
          <h2>Comprobante</h2>
          <button
            className="icon-btn"
            onClick={onClose}
            aria-label="Cerrar comprobante"
            data-testid="button-close-receipt"
          >
            <X size={18} />
          </button>
        </div>

        <div className="receipt" data-testid="receipt-simulation">
          <h3>SINPE MÓVIL</h3>
          <p>Transacción exitosa</p>
          <p>
            De: <b>Juan Pérez</b>
          </p>
          <p>
            Monto: <b>₡20,000</b>
          </p>
          <p>Fecha: 22/09/2024 · 09:42</p>
          <p>Referencia: RPX-220924-JP</p>
        </div>

        <button
          className="primary-btn"
          style={{ width: '100%', marginTop: 14 }}
          onClick={onClose}
          data-testid="button-close-receipt-bottom"
        >
          Cerrar comprobante
        </button>
      </div>
    </div>
  );
}