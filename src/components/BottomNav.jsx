import { Home, Dumbbell, LineChart, Shield } from 'lucide-react';

/**
 * BottomNav Component
 * 
 * Barra de navegación inferior fija con diseño profesional
 * Basado en código de base 44, adaptado a nuestro sistema de estado
 * 
 * Props:
 *   - currentScreen: string - Pantalla actualmente seleccionada
 *   - onNavigate: function - Callback para cambiar de pantalla
 */
export default function BottomNav({ currentScreen, onNavigate }) {
  // Array de configuración de items de navegación
  const items = [
    { id: 'inicio', label: 'Inicio', icon: Home },
    { id: 'rutina', label: 'Rutina', icon: Dumbbell },
    { id: 'progreso', label: 'Progreso', icon: LineChart },
    { id: 'staff', label: 'Staff', icon: Shield },
  ];

  return (
    <nav className="fixed bottom-0 inset-x-0 z-40 mx-auto max-w-md">
      <div className="mx-3 mb-3 rounded-2xl border border-white/10 bg-[rgba(10,10,10,0.75)] backdrop-blur-lg shadow-[0_-4px_30px_rgba(0,0,0,0.6)]">
        <div className="grid grid-cols-4">
          {items.map(({ id, label, icon: Icon }) => {
            // Determina si este item está activo
            const isActive = currentScreen === id;

            return (
              <button
                key={id}
                onClick={() => onNavigate(id)}
                className={`
                  flex flex-col items-center justify-center gap-1 py-3 
                  transition-colors duration-300
                  ${isActive ? 'text-yellow-400' : 'text-white/50 hover:text-white/70'}
                `}
              >
                {/* Icono con stroke width dinámico */}
                <Icon 
                  className="w-5 h-5" 
                  strokeWidth={isActive ? 2.5 : 2} 
                />
                {/* Etiqueta */}
                <span className="text-[10px] font-semibold tracking-wide">
                  {label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}