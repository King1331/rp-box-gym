import React, { useEffect } from 'react';
import { useRegisterSW } from 'virtual:pwa-register/react';
import { useLocation } from 'wouter';

export function ReloadPrompt() {
  const [location] = useLocation();

  const {
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(r) {
      if (r) {
        // Guardar la referencia del SW en la ventana para forzarlo luego
        window.swRegistration = r;
      }
    },
    onRegisterError(error) {
      console.error('SW registration error', error);
    },
  });

  // El núcleo de la estrategia: Buscar versión manualmente
  useEffect(() => {
    const checkForUpdate = async () => {
      try {
        // Cache-buster: Evita que el celular lea la memoria temporal
        const url = `/version.json?t=${new Date().getTime()}`;
        const response = await fetch(url, { cache: 'no-store' });
        const data = await response.json();

        // __APP_VERSION__ viene de vite.config.js
        if (data.version > __APP_VERSION__) {
          console.log("Nueva versión detectada. Despertando Service Worker...");
          
          if (window.swRegistration) {
            // Esto obliga al SW a actualizarse y dispara el banner visual
            await window.swRegistration.update();
          }
        }
      } catch (error) {
        // Falla en silencio si el usuario no tiene internet
      }
    };

    // Revisar cuando el usuario cambia de ruta en la app
    checkForUpdate();
    
    // También revisar cuando la app vuelve a estar visible en pantalla
    const onVisibilityChange = () => {
      if (document.visibilityState === 'visible') checkForUpdate();
    };
    
    document.addEventListener('visibilitychange', onVisibilityChange);
    return () => document.removeEventListener('visibilitychange', onVisibilityChange);

  }, [location]); // Se dispara en cada tap de navegación

  const close = () => {
    setNeedRefresh(false);
  };

  if (!needRefresh) return null;

  return (
    <div 
      className="fixed left-4 right-4 mx-auto sm:left-auto sm:right-5 sm:mx-0 z-50 max-w-sm rounded-3xl bg-[rgba(20,20,20,0.85)] backdrop-blur-xl p-5 text-white shadow-2xl border border-white/10 animate-pulse"
      style={{
        top: 'calc(env(safe-area-inset-top, 0px) + 16px)'
      }}
    >
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-b-3xl" />
      
      <div className="relative">
        <div className="mb-3 flex items-center gap-2">
          <span className="text-lg text-white">⚡</span>
          <div className="text-sm font-black uppercase tracking-wide">
            Nueva versión disponible
          </div>
        </div>

        <p className="mb-4 text-xs text-white/70 leading-relaxed">
          Hemos realizado mejoras en la aplicación. Actualiza para ver los cambios.
        </p>

        <div className="flex gap-2 justify-end">
          <button
            onClick={close}
            className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-white/60 hover:text-white rounded-lg transition-colors duration-200 hover:bg-white/5"
          >
            Más tarde
          </button>
          <button
            onClick={() => updateServiceWorker(true)}
            className="px-4 py-2 text-xs font-bold uppercase tracking-wider bg-white text-black rounded-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-200 active:scale-[0.98] border border-white"
          >
            Actualizar ahora
          </button>
        </div>
      </div>
    </div>
  );
}