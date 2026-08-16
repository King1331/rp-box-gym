import React from 'react';
import { useRegisterSW } from 'virtual:pwa-register/react';

export function ReloadPrompt() {
  const {
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(r) {
      if (!r) return;

      // 1. Revisar actualizaciones periódicamente cada 60 segundos mientras la app está abierta
      setInterval(() => {
        r.update();
      }, 60 * 1000);

      // 2. Revisar inmediatamente si el usuario vuelve a la app (cambia de pestaña o desminimiza)
      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') {
          r.update();
        }
      });
    },
    onRegisterError(error) {
      console.error('SW registration error', error);
    },
  });

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
      {/* Línea decorativa inferior */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-b-3xl" />
      
      <div className="relative">
        {/* Icono + Título */}
        <div className="mb-3 flex items-center gap-2">
          <span className="text-lg text-white">⚡</span>
          <div className="text-sm font-black uppercase tracking-wide">
            Nueva versión disponible
          </div>
        </div>

        {/* Descripción */}
        <p className="mb-4 text-xs text-white/70 leading-relaxed">
          Hemos realizado mejoras en la aplicación. Actualiza para ver los cambios.
        </p>

        {/* Botones */}
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