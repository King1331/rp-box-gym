import {
  Bell,
  Dumbbell,
  Home as HomeIcon,
  TrendingUp,
  UsersRound,
} from 'lucide-react';
import { Link, useLocation } from 'wouter';

import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', label: 'Inicio', icon: HomeIcon },
  { href: '/routine', label: 'Rutina', icon: Dumbbell },
  { href: '/progress', label: 'Progreso', icon: TrendingUp },
  { href: '/staff', label: 'Staff', icon: UsersRound },
];

export default function AppShell({ children, onNotifications }) {
  const [location] = useLocation();

  return (
    <div className="app-frame">
      <div className="hero-backdrop" />

      <main className="shell-content">
        <header className="topbar">
          <Link href="/" className="wordmark" data-testid="link-logo">
            RP <span>BOX</span>
          </Link>

          <button
            className="icon-btn"
            onClick={onNotifications}
            aria-label="Abrir notificaciones"
            data-testid="button-notifications"
            style={{ position: 'relative' }}
          >
            <Bell size={19} />
            <i className="notification-dot" />
          </button>
        </header>

        {children}
      </main>

      <nav className="bottom-nav" aria-label="Navegación principal">
        {navItems.map(({ href, label, icon: Icon }) => (
          <Link
            href={href}
            className={cn('nav-item', location === href && 'active')}
            data-testid={`link-nav-${label.toLowerCase()}`}
            key={href}
          >
            <Icon size={19} strokeWidth={location === href ? 2.5 : 1.8} />
            <span>{label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}