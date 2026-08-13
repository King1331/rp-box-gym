import React from "react";
import { NavLink } from "react-router-dom";
import { Home, Dumbbell, LineChart, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  { to: "/", label: "Inicio", icon: Home },
  { to: "/rutina", label: "Rutina", icon: Dumbbell },
  { to: "/progreso", label: "Progreso", icon: LineChart },
  { to: "/staff", label: "Staff", icon: Shield },
];

export default function BottomNav() {
  return (
    <nav className="bottom-nav">
      {items.map(({ to, label, icon: Icon }) => (
        <NavLink
          key={to}
          to={to}
          end={to === "/"}
          className={({ isActive }) => cn("nav-item", isActive && "active")}
        >
          <Icon size={18} />
          <span>{label}</span>
        </NavLink>
      ))}
    </nav>
  );
}