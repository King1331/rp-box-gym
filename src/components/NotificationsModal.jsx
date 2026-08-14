import { X } from 'lucide-react';

import { notifications } from '@/lib/data';

export default function NotificationsModal({ onClose }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(event) => event.stopPropagation()}>
        <div className="row-between">
          <div>
            <div className="eyebrow">RP Box · Para ti</div>
            <h2>Notificaciones</h2>
          </div>

          <button
            className="icon-btn"
            onClick={onClose}
            aria-label="Cerrar notificaciones"
            data-testid="button-close-notifications"
          >
            <X size={18} />
          </button>
        </div>

        {notifications.map(({ icon: Icon, title, copy }, index) => (
          <div
            className="notification"
            key={title}
            data-testid={`notification-${index + 1}`}
          >
            <div className="notif-icon">
              <Icon size={18} />
            </div>
            <div>
              <b>{title}</b>
              <p>{copy}</p>
            </div>
          </div>
        ))}

        <button
          className="secondary-btn"
          style={{ width: '100%', marginTop: 12 }}
          onClick={onClose}
          data-testid="button-dismiss-notifications"
        >
          Marcar como leídas
        </button>
      </div>
    </div>
  );
}