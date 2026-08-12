/**
 * Card Component
 * 
 * Componente reutilizable para tarjetas con efecto Glassmorphism
 * (fondo translúcido, bordes sutiles, blur effect)
 * 
 * Props:
 *   - children: ReactNode - Contenido dentro de la tarjeta
 *   - className: string (opcional) - Clases Tailwind adicionales
 *   - onClick: function (opcional) - Callback al hacer click
 */
export default function Card({ children, className = '', onClick }) {
  return (
    <div
      onClick={onClick}
      className={`
        glass
        p-4 sm:p-6
        cursor-pointer
        transition-all duration-300 ease-in-out
        hover:bg-white/10 hover:border-gray-700
        ${onClick ? 'active:scale-95' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}