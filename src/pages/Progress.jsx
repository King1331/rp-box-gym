import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import ScreenHeader from "@/components/ScreenHeader";
import { Weight, Percent, Activity } from "lucide-react";

const metrics = [
  { label: "Peso Actual", value: "85", unit: "kg", icon: Weight },
  { label: "Grasa Corporal", value: "12", unit: "%", icon: Percent },
  { label: "Masa Muscular", value: "45", unit: "%", icon: Activity },
];

const trend = [
  { mes: "Abr", grasa: 18 },
  { mes: "May", grasa: 16.5 },
  { mes: "Jun", grasa: 15 },
  { mes: "Jul", grasa: 13.8 },
  { mes: "Ago", grasa: 12.5 },
  { mes: "Sep", grasa: 12 },
];

export default function Progress() {
  return (
    <div>
      <ScreenHeader title="Mi Progreso" />
      <div className="px-4 pt-4 space-y-6">
        {/* Métricas */}
        <div className="grid grid-cols-3 gap-3">
          {metrics.map((m) => (
            <div key={m.label} className="rounded-2xl border border-white/10 bg-[#111111] p-4">
              <m.icon className="w-4 h-4 text-[#FFD60A] mb-2" />
              <p className="text-2xl font-black">
                {m.value}
                <span className="text-sm text-white/40 font-bold ml-0.5">{m.unit}</span>
              </p>
              <p className="text-[11px] text-white/50 mt-0.5 leading-tight">{m.label}</p>
            </div>
          ))}
        </div>

        {/* Gráfica */}
        <div className="rounded-2xl border border-white/10 bg-[#111111] p-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-bold text-sm">% Grasa Corporal</h3>
              <p className="text-white/40 text-xs">Tendencia últimos 6 meses</p>
            </div>
            <span className="text-[#FFD60A] font-black text-lg">↓ 6%</span>
          </div>
          <div className="h-48 -ml-2">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trend} margin={{ top: 5, right: 8, bottom: 0, left: -20 }}>
                <defs>
                  <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#FFD60A" />
                    <stop offset="100%" stopColor="#FFD60A" />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" vertical={false} />
                <XAxis dataKey="mes" stroke="rgba(255,255,255,0.4)" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis stroke="rgba(255,255,255,0.4)" fontSize={11} tickLine={false} axisLine={false} domain={[10, 20]} />
                <Tooltip
                  contentStyle={{
                    background: "#000",
                    border: "1px solid rgba(255,214,10,0.3)",
                    borderRadius: 12,
                    fontSize: 12,
                  }}
                  labelStyle={{ color: "#FFD60A", fontWeight: 700 }}
                  formatter={(v) => [`${v}%`, "Grasa"]}
                />
                <Line
                  type="monotone"
                  dataKey="grasa"
                  stroke="#FFD60A"
                  strokeWidth={3}
                  dot={{ fill: "#FFD60A", r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <button className="w-full bg-[#FFD60A] text-black font-bold py-3.5 rounded-xl active:scale-[0.98] transition">
          Registrar Nuevas Medidas
        </button>
      </div>
    </div>
  );
}