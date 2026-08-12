import { useState, useRef } from 'react';
import BottomNav from './components/BottomNav';
import Inicio from './screens/Inicio';
import Rutina from './screens/Rutina';
import Progreso from './screens/Progreso';
import Staff from './screens/Staff';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('inicio');
  
  // 1. Creamos una referencia para el contenedor que realmente hace scroll
  const scrollContainerRef = useRef(null);

  const handleNavigate = (screen) => {
    setCurrentScreen(screen);
    
    // 2. Hacemos scroll al TOP del contenedor específico, no del 'window'
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'inicio':
        return <Inicio onNavigate={handleNavigate} />;
      case 'rutina':
        return <Rutina />;
      case 'progreso':
        return <Progreso />;
      case 'staff':
        return <Staff />;
      default:
        return <Inicio onNavigate={handleNavigate} />;
    }
  };

  return (
    // Cambié h-screen a h-[100dvh] para que la barra de Safari/Chrome no tape tu BottomNav
    <div className="flex flex-col h-[100dvh] bg-[#171713] text-white overflow-hidden">
      
      {/* 3. Asignamos el ref al contenedor scrolleable */}
      <div 
        ref={scrollContainerRef}
        className="flex-1 overflow-y-auto overflow-x-hidden pb-24"
      >
        {renderScreen()}
      </div>

      <BottomNav currentScreen={currentScreen} onNavigate={handleNavigate} />
    </div>
  );
}