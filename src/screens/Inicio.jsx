import { useState } from 'react';
import {
  Bell,
  AlertTriangle,
  Flame,
  Zap,
  ChevronRight,
  Dumbbell,
  HeartPulse
} from 'lucide-react';
import Modal from '../components/Modal';

/**
 * Inicio Screen - Pantalla Principal (Dashboard)
 * Diseño mobile-first con MUCHO espaciado y scroll
 */
export default function Inicio({ onNavigate }) {
  const [showNotifications, setShowNotifications] = useState(false);

  // Colores reutilizables
  const bgDark = "bg-[#171713]";
  const glassCard = "bg-[#22221d]/75 border border-[#f1eec9]/15 backdrop-blur-md rounded-2xl shadow-lg";

  // Notificaciones simuladas
  const notifications = [
    {
      icon: Flame,
      title: '¡No pierdas tu racha!',
      message: 'Entrena hoy para mantener tu racha de 5 días',
    },
    {
      icon: AlertTriangle,
      title: 'Tu membresía vence pronto',
      message: 'Recuerda renovar tu membresía antes del 25 Sep',
    },
    {
      icon: Zap,
      title: '¡Casi nivel Élite!',
      message: 'Solo te faltan 9 días más para alcanzar el nivel Élite',
    },
  ];

  return (
    <div className={`min-h-screen ${bgDark} text-white overflow-x-hidden`}>
      
      {/* ==================== FONDO DEL ATLETA ==================== */}
      <div
        className="pointer-events-none fixed inset-x-0 top-0 h-[280px] opacity-70 grayscale contrast-125 z-0"
        style={{
          backgroundImage: `
            linear-gradient(
              180deg,
              rgba(0, 0, 0, 0.3),
              #171713 95%
            ),
            url('https://i.postimg.cc/7hbkSPRw/Screenshot-2026-06-12-at-5-19-59-PM.webp')
          `,
          backgroundPosition: 'center 15%',
          backgroundSize: 'cover',
          maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)'
        }}
      />

      {/* ==================== CONTENEDOR PRINCIPAL ==================== */}
      <main className="relative z-10 mx-auto w-full px-5 pt-4" style={{ minHeight: '300vh' }}>
        
        {/* ===== HEADER ===== */}
        <header className="flex items-center justify-between" style={{ marginBottom: '40px' }}>
          <a href="/" className="text-2xl font-black tracking-tight">
            RP <span className="text-yellow-400">BOX</span>
          </a>
          <button
            onClick={() => setShowNotifications(true)}
            aria-label="Abrir notificaciones"
            className="relative w-11 h-11 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-white hover:bg-white/10 active:scale-95 transition"
          >
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-yellow-400 rounded-full border-2 border-black" />
          </button>
        </header>

        {/* ===== SALUDO PRINCIPAL ===== */}
        <section style={{ marginBottom: '150px' }}>
          <p className="text-xs text-white/50 uppercase tracking-wider mb-2">
            Miércoles · 12 agosto 2026
          </p>
          <h1 className="text-5xl font-black leading-tight mb-4">
            Hola,
            <br />
            <span className="text-yellow-400">Juan.</span>
          </h1>
          <p className="text-base text-white/70">
            Hoy no se negocia. Hoy se entrena. 💪
          </p>
        </section>

        {/* ===== ESPACIADOR ===== */}
        <div style={{ height: '120px' }} />

        {/* ===== CARD MEMBRESÍA ===== */}
        <div className={`${glassCard} p-5`} style={{ marginBottom: '150px' }}>
          <div className="flex items-start gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-yellow-400/10 flex items-center justify-center text-yellow-400 flex-shrink-0">
              <Zap size={18} />
            </div>
            <div className="flex-1">
              <p className="text-xs text-white/60 uppercase tracking-wide mb-1">Membresía Activa</p>
              <h2 className="text-xl font-black uppercase mb-2">Plan Box Mensual</h2>
              <p className="text-sm text-white/70">
                Tu próximo pago en <span className="text-yellow-400 font-bold">3 días</span>
              </p>
              <p className="text-xs text-white/50 mt-1">Vence · 25 Sep 2026</p>
            </div>
          </div>

          <button
            onClick={() => alert('Ir a pantalla de pago SINPE')}
            className="w-full bg-yellow-400 text-black font-bold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-yellow-300 active:scale-95 transition"
          >
            Pagar Mensualidad vía SINPE
            <ChevronRight size={18} />
          </button>
        </div>

        {/* ===== ESPACIADOR ===== */}
        <div style={{ height: '120px' }} />

        {/* ===== SECCIÓN ENTRENAMIENTO ===== */}
        <div style={{ marginBottom: '150px' }}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xs font-bold uppercase tracking-wide text-white/60">Tu Entrenamiento</h3>
            <button 
              onClick={() => onNavigate('rutina')} 
              className="text-xs font-bold uppercase tracking-wide text-yellow-400 hover:text-yellow-300 transition"
            >
              Ver Todo
            </button>
          </div>

          <div className={`${glassCard} p-5`}>
            {/* Header de la rutina */}
            <div className="flex gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-yellow-400 text-black flex flex-col items-center justify-center flex-shrink-0">
                <span className="text-2xl font-black leading-none">03</span>
                <span className="text-xs font-bold">Día</span>
              </div>
              <div className="flex-1">
                <h4 className="text-2xl font-black uppercase mb-1">Pierna</h4>
                <p className="text-xs text-yellow-400 font-bold uppercase">
                  Hipertrofia · 58 min
                </p>
              </div>
            </div>

            {/* Ejercicio destacado */}
            <div className="mb-5 p-4 rounded-xl bg-black/30 border border-white/5">
              <p className="text-sm font-bold uppercase mb-2">Sentadilla Trasera</p>
              <div className="flex justify-between text-xs text-white/60">
                <span>4 series · 8 reps</span>
                <span className="bg-yellow-400/10 text-yellow-400 px-2 py-1 rounded">01 / 04</span>
              </div>
            </div>

            <button
              onClick={() => onNavigate('rutina')}
              className="w-full bg-yellow-400 text-black font-bold py-3 rounded-xl hover:bg-yellow-300 active:scale-95 transition"
            >
              Empezar Entrenamiento
            </button>
          </div>
        </div>

        {/* ===== ESPACIADOR ===== */}
        <div style={{ height: '120px' }} />

        {/* ===== GRID DE MÉTRICAS ===== */}
        <div style={{ marginBottom: '150px' }}>
          <h3 className="text-xs font-bold uppercase tracking-wide text-white/60 mb-8">Tu Marcador</h3>

          <div className="grid grid-cols-3 gap-3">
            {[
              { label: 'Racha', valor: '04', icon: Flame },
              { label: 'Volumen', valor: '12.4k', icon: Dumbbell },
              { label: 'Recuperación', valor: '82%', icon: HeartPulse }
            ].map((stat, i) => (
              <button 
                key={i} 
                className={`${glassCard} p-4 flex flex-col items-center gap-2 hover:bg-white/5 active:scale-95 transition`}
              >
                <div className="text-yellow-400">
                  <stat.icon size={20} />
                </div>
                <p className="text-2xl font-black leading-none">{stat.valor}</p>
                <p className="text-xs text-white/40 uppercase font-bold">{stat.label}</p>
              </button>
            ))}
          </div>
        </div>

        {/* ===== ESPACIADOR FINAL ===== */}
        <div style={{ height: '200px' }} />

      </main>

      {/* ==================== MODAL DE NOTIFICACIONES ==================== */}
      <Modal
        isOpen={showNotifications}
        onClose={() => setShowNotifications(false)}
        title="Notificaciones"
      >
        <div className="space-y-3">
          {notifications.map(({ icon: Icon, title, message }, idx) => (
            <div
              key={idx}
              className={`${glassCard} border-l-2 border-l-yellow-400 p-4`}
            >
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-yellow-400/10 flex items-center justify-center text-yellow-400 flex-shrink-0">
                  <Icon size={18} />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-bold uppercase mb-1">{title}</h3>
                  <p className="text-xs text-white/60">{message}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Modal>
    </div>
  );
}