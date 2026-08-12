import { X } from 'lucide-react';

/**
 * Modal Component
 * 
 * Modal genérico reutilizable con overlay y botón cerrar
 * 
 * Props:
 *   - isOpen: boolean - Controla si el modal está visible
 *   - onClose: function - Callback para cerrar el modal
 *   - title: string - Título del modal
 *   - children: ReactNode - Contenido dentro del modal
 */
export default function Modal({ isOpen, onClose, title, children }) {
  // Si el modal no está abierto, no renderizar nada
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay oscuro (backdrop) */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity"
      />

      {/* Contenedor del modal (centrado) */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Tarjeta del modal */}
        <div className="glass w-full max-w-sm max-h-[80vh] overflow-y-auto">
          {/* Header con título y botón cerrar */}
          <div className="flex justify-between items-center p-4 sm:p-6 border-b border-gray-800">
            <h2 className="text-lg sm:text-xl font-bold text-white">{title}</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Cerrar modal"
            >
              <X size={24} className="text-gray-400" />
            </button>
          </div>

          {/* Contenido del modal */}
          <div className="p-4 sm:p-6">{children}</div>
        </div>
      </div>
    </>
  );
}