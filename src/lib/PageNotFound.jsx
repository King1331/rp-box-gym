import { useLocation } from 'react-router-dom';

export default function PageNotFound() {
  const location = useLocation();
  const pageName = location.pathname.substring(1);

  return (
    <div className="app-frame min-h-screen flex items-center justify-center p-6">
      <div className="max-w-md w-full text-center">
        <h1 className="font-display text-7xl font-black text-[#FFD329] tracking-tight">
          404
        </h1>
        <div className="h-0.5 w-16 bg-[#FFD329]/40 mx-auto my-4" />
        <h2 className="font-display text-2xl font-bold uppercase text-foreground">
          Página no encontrada
        </h2>
        <p className="text-[#AAA79A] mt-2 font-mono text-[11px] uppercase tracking-widest">
          "{pageName || "ruta"}" no existe en esta app
        </p>
        <div className="max-w-[220px] mx-auto mt-8">
          <button
            className="primary-btn"
            onClick={() => {
              window.location.href = '/';
            }}
          >
            Volver al inicio
          </button>
        </div>
      </div>
    </div>
  );
}