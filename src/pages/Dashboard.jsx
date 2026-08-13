import { useState } from 'react';
import {
  AlertTriangle,
  Bell,
  ChevronRight,
  Dumbbell,
  Flame,
  HeartPulse,
} from 'lucide-react';

const athleteImage =
  'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80';

const notifications = [
  {
    id: 1,
    icon: AlertTriangle,
    title: 'Tu membresía vence en 3 días',
    time: 'Hace 2 h',
  },
  {
    id: 2,
    icon: Flame,
    title: '¡Racha de 5 días consecutivos!',
    time: 'Hace 5 h',
  },
  {
    id: 3,
    icon: Dumbbell,
    title: 'Nuevo récord en sentadilla: 120 kg',
    time: 'Ayer',
  },
];

const metrics = [
  {
    icon: Flame,
    value: '5',
    unit: 'días',
    label: 'Racha',
    accent: true,
  },
  {
    icon: Dumbbell,
    value: '142',
    unit: '',
    label: 'Volumen',
    accent: false,
  },
  {
    icon: HeartPulse,
    value: 'Intermedio',
    unit: '',
    label: 'Nivel constancia',
    accent: true,
    small: true,
  },
];

export default function Dashboard() {
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#171713] text-white">
      {/* =====================================================
          HERO BACKDROP
      ====================================================== */}
      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-0
          z-0
          h-[385px]
          w-full
          bg-cover
          bg-center
        "
        style={{
          backgroundImage: `
            linear-gradient(
              180deg,
              rgba(0,0,0,0.10),
              #171713 97%
            ),
            url('${athleteImage}')
          `,
        }}
      />

      {/* =====================================================
          MAIN SHELL
      ====================================================== */}
      <div className="relative z-10 mx-auto w-full max-w-[520px] px-4 pb-10">
        {/* ===================================================
            TOPBAR
        ==================================================== */}
        <header className="relative z-10 flex items-center justify-between px-0 py-4">
          <a
            href="/"
            className="text-2xl font-black tracking-tight text-white no-underline"
          >
            RP <span className="text-yellow-400">BOX</span>
          </a>

          <button
            type="button"
            onClick={() => setShowNotifications(true)}
            aria-label="Abrir notificaciones"
            className="
              relative
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-white/20
              bg-white/10
              text-white
              transition
              active:scale-95
            "
          >
            <Bell size={19} />

            <span
              className="
                absolute
                right-1
                top-1
                h-2
                w-2
                rounded-full
                border-2
                border-black
                bg-yellow-400
              "
            />
          </button>
        </header>

        {/* ===================================================
            HERO COPY
        ==================================================== */}
        <section className="relative z-10 px-0 pb-8">
          <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-white/50">
            Martes · 22 septiembre 2024
          </div>

          <h1 className="mb-2 text-4xl font-black leading-tight text-white">
            Hola,
            <br />
            <em className="not-italic text-yellow-400">Juan.</em>
          </h1>

          <p className="mt-2 text-sm text-white/70">
            Hoy no se negocia. Hoy se entrena.
          </p>
        </section>

        {/* ===================================================
            MEMBERSHIP
        ==================================================== */}
        <section
          className="
            rounded-2xl
            border
            border-white/10
            bg-white/5
            p-5
            shadow-lg
            backdrop-blur-md
          "
        >
          <div className="mb-1 flex items-center gap-2">
            <AlertTriangle size={15} className="text-[#FFD329]" />

            <span className="text-xs font-semibold uppercase tracking-widest text-[#FFD329]">
              Atención
            </span>
          </div>

          <h3 className="mt-1 text-xl font-black text-white">
            3 días restantes
          </h3>

          <p className="mt-1 text-sm leading-relaxed text-white/60">
            Paga antes del vencimiento para no perder tu racha.
          </p>

          <div className="mt-2 text-xs text-[#AAA79A]">
            Vence: 25 sep 2024
          </div>

          <div className="mt-4">
            <button
              type="button"
              onClick={() =>
                alert('Pantalla de pago próximamente')
              }
              className="
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-[#FFD329]
                px-4
                py-3
                text-sm
                font-bold
                text-black
                transition
                hover:bg-[#f2c700]
                active:scale-[0.98]
              "
            >
              Pagar mensualidad
              <ChevronRight size={15} />
            </button>
          </div>
        </section>

        {/* ===================================================
            WORKOUT SECTION HEADER
        ==================================================== */}
        <div className="mt-10 flex items-center justify-between">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-white/50">
            Tu entrenamiento
          </h2>

          <button
            type="button"
            onClick={() =>
              alert('Pantalla de rutina próximamente')
            }
            className="
              flex
              items-center
              gap-1
              text-xs
              font-semibold
              text-white/60
              transition
              hover:text-[#FFD329]
            "
          >
            Ver rutina
            <ChevronRight size={13} />
          </button>
        </div>

        {/* ===================================================
            WORKOUT CARD
        ==================================================== */}
        <section
          className="
            mt-3
            rounded-2xl
            border
            border-white/10
            bg-white/5
            p-5
            shadow-lg
            backdrop-blur-md
          "
        >
          {/* Workout top */}
          <div className="flex items-center gap-3">
            <div
              className="
                flex
                h-12
                w-12
                flex-shrink-0
                items-center
                justify-center
                rounded-xl
                bg-[#FFD329]
                text-sm
                font-black
                text-black
              "
            >
              D3
            </div>

            <div className="min-w-0">
              <div className="mb-1 text-xs font-semibold uppercase tracking-widest text-white/50">
                Día 3 · Pierna
              </div>

              <h3 className="truncate text-lg font-black text-white">
                Sentadilla + Press
              </h3>
            </div>
          </div>

          {/* Exercise 1 */}
          <div
            className="
              mt-5
              flex
              items-center
              justify-between
              rounded-xl
              border
              border-white/5
              bg-black/20
              px-4
              py-3
            "
          >
            <div>
              <p className="text-sm font-semibold text-white">
                Sentadilla libre
              </p>

              <span className="mt-1 block text-xs text-[#AAA79A]">
                4 x 8 · 85 kg
              </span>
            </div>

            <Dumbbell
              size={20}
              className="text-[#FFD329]"
            />
          </div>

          {/* Exercise 2 */}
          <div
            className="
              mt-2
              flex
              items-center
              justify-between
              rounded-xl
              border
              border-white/5
              bg-black/20
              px-4
              py-3
            "
          >
            <div>
              <p className="text-sm font-semibold text-white">
                Prensa de pierna
              </p>

              <span className="mt-1 block text-xs text-[#AAA79A]">
                3 x 12 · 120 kg
              </span>
            </div>

            <Dumbbell
              size={20}
              className="text-[#AAA79A]"
            />
          </div>

          <div className="mt-4">
            <button
              type="button"
              onClick={() =>
                alert('Pantalla de rutina próximamente')
              }
              className="
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-[#FFD329]
                px-4
                py-3
                text-sm
                font-bold
                text-black
                transition
                hover:bg-[#f2c700]
                active:scale-[0.98]
              "
            >
              Empezar ahora
              <ChevronRight size={15} />
            </button>
          </div>
        </section>

        {/* ===================================================
            METRICS HEADER
        ==================================================== */}
        <div className="mt-10 flex items-center justify-between">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-white/50">
            Tu marcador
          </h2>

          <span className="text-xs font-semibold uppercase tracking-widest text-white/50">
            Esta semana
          </span>
        </div>

        {/* ===================================================
            METRICS GRID
        ==================================================== */}
        <section className="mt-3 grid grid-cols-3 gap-2">
          {metrics.map((metric) => {
            const Icon = metric.icon;

            return (
              <div
                key={metric.label}
                className={`
                  flex
                  min-h-[125px]
                  flex-col
                  items-start
                  justify-between
                  rounded-2xl
                  border
                  p-4
                  shadow-lg
                  backdrop-blur-md
                  ${
                    metric.accent
                      ? 'border-[#FFD329]/20 bg-white/5'
                      : 'border-white/10 bg-white/5'
                  }
                `}
              >
                <Icon
                  size={18}
                  className={
                    metric.accent
                      ? 'text-[#FFD329]'
                      : 'text-[#AAA79A]'
                  }
                />

                <div>
                  <strong
                    className={
                      metric.small
                        ? 'text-[18px] leading-none'
                        : 'text-2xl leading-none'
                    }
                  >
                    {metric.value}

                    {metric.unit && (
                      <span className="ml-1 text-[13px] font-normal text-[#AAA79A]">
                        {metric.unit}
                      </span>
                    )}
                  </strong>

                  <label className="mt-2 block text-[10px] uppercase tracking-wide text-[#AAA79A]">
                    {metric.label}
                  </label>
                </div>
              </div>
            );
          })}
        </section>
      </div>

      {/* =====================================================
          NOTIFICATIONS MODAL
      ====================================================== */}
      {showNotifications && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-end
            justify-center
            bg-black/60
            p-4
            backdrop-blur-sm
            sm:items-center
          "
          onClick={() => setShowNotifications(false)}
        >
          <div
            className="
              w-full
              max-w-[520px]
              rounded-2xl
              border
              border-white/10
              bg-[#22221d]
              p-5
              shadow-2xl
            "
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-lg font-black text-white">
                Notificaciones
              </h2>

              <button
                type="button"
                onClick={() => setShowNotifications(false)}
                className="text-xs font-semibold uppercase tracking-wide text-white/40 hover:text-white"
              >
                Cerrar
              </button>
            </div>

            <div className="space-y-3">
              {notifications.map((notification) => {
                const Icon = notification.icon;

                return (
                  <div
                    key={notification.id}
                    className="
                      flex
                      items-center
                      gap-3
                      rounded-xl
                      border
                      border-white/5
                      bg-white/5
                      p-3
                    "
                  >
                    <div
                      className="
                        flex
                        h-10
                        w-10
                        flex-shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-white/5
                        text-[#FFD329]
                      "
                    >
                      <Icon size={17} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-white">
                        {notification.title}
                      </p>

                      <span className="mt-1 block text-xs text-[#AAA79A]">
                        {notification.time}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}