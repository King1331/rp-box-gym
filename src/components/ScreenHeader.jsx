import React from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import RPLogo from "@/components/RPLogo";

export default function ScreenHeader({ title, showBack = false, right = null }) {
  const navigate = useNavigate();
  return (
    <header className="sticky top-0 z-30 bg-black/85 backdrop-blur border-b border-white/5">
      <div className="flex items-center justify-between px-4 h-14">
        {showBack ? (
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-1 text-white/70 hover:text-white -ml-1"
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="text-sm">Volver</span>
          </button>
        ) : (
          <RPLogo size="sm" />
        )}

        {title && !showBack && (
          <h1 className="text-base font-bold tracking-wide">{title}</h1>
        )}

        {showBack && title && (
          <h1 className="text-base font-bold tracking-wide flex-1 text-center px-2 truncate">
            {title}
          </h1>
        )}

        <div className="min-w-[44px] flex justify-end">{right}</div>
      </div>
      {!showBack && (
        <div className="h-px bg-gradient-to-r from-transparent via-[#FFD60A]/30 to-transparent" />
      )}
    </header>
  );
}