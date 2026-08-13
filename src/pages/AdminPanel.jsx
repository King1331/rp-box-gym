import React, { useState } from "react";
import { Check, X, Receipt } from "lucide-react";
import ScreenHeader from "@/components/ScreenHeader";

const initialPayments = [
  {
    id: 1,
    user: "Juan Pérez",
    amount: "100,000",
    method: "SINPE Móvil",
    receipt: "https://images.unsplash.com/photo-1556742502-ec7c0e9f3b4b?auto=format&fit=crop&w=600&q=70",
    date: "22 Sep, 2026",
  },
  {
    id: 2,
    user: "María González",
    amount: "100,000",
    method: "SINPE Móvil",
    receipt: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=600&q=70",
    date: "21 Sep, 2026",
  },
  {
    id: 3,
    user: "Carlos Sanabria",
    amount: "100,000",
    method: "SINPE Móvil",
    receipt: "https://images.unsplash.com/photo-1526374965328-7f61d4dc09ec?auto=format&fit=crop&w=600&q=70",
    date: "20 Sep, 2026",
  },
];

function PaymentItem({ p, onAction }) {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState(null); // null | 'approved' | 'rejected'

  const handle = (action) => {
    setStatus(action);
    onAction(p.id, action);
  };

  return (
    <div
      className={`rounded-2xl border bg-[#111111] overflow-hidden transition ${
        status === "approved"
          ? "border-green-500/40 opacity-60"
          : status === "rejected"
          ? "border-red-500/40 opacity-60"
          : "border-white/10"
      }`}
    >
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FFD60A]/10 flex items-center justify-center">
              <Receipt className="w-5 h-5 text-[#FFD60A]" />
            </div>
            <div>
              <p className="font-bold text-sm">{p.user}</p>
              <p className="text-white/50 text-xs">{p.date}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-black text-[#FFD60A]">₡{p.amount}</p>
            <p className="text-white/40 text-[11px]">{p.method}</p>
          </div>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="mt-3 text-xs text-white/60 underline underline-offset-2"
        >
          {open ? "Ocultar comprobante" : "Ver comprobante"}
        </button>

        {open && (
          <div className="mt-3 rounded-xl overflow-hidden border border-white/10">
            <img src={p.receipt} alt="Comprobante SINPE" className="w-full h-44 object-cover" />
          </div>
        )}

        {status ? (
          <div
            className={`mt-4 text-center py-2.5 rounded-xl text-sm font-bold ${
              status === "approved"
                ? "bg-green-500/15 text-green-400"
                : "bg-red-500/15 text-red-400"
            }`}
          >
            {status === "approved" ? "✓ Pago aprobado" : "✕ Pago rechazado"}
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3 mt-4">
            <button
              onClick={() => handle("approved")}
              className="flex items-center justify-center gap-1.5 bg-green-500 text-white font-bold py-3 rounded-xl active:scale-95 transition"
            >
              <Check className="w-4 h-4" strokeWidth={3} />
              Aprobar
            </button>
            <button
              onClick={() => handle("rejected")}
              className="flex items-center justify-center gap-1.5 bg-red-500 text-white font-bold py-3 rounded-xl active:scale-95 transition"
            >
              <X className="w-4 h-4" strokeWidth={3} />
              Rechazar
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function AdminPanel() {
  const [payments, setPayments] = useState(initialPayments);

  return (
    <div>
      <ScreenHeader title="Panel Administrativo" />
      <div className="px-4 pt-4 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-black text-lg">Pagos Pendientes</h2>
            <p className="text-white/50 text-xs">{payments.length} solicitudes por revisar</p>
          </div>
          <span className="px-3 py-1 rounded-full bg-[#FFD60A]/15 text-[#FFD60A] text-xs font-bold">
            Staff
          </span>
        </div>

        {payments.map((p) => (
          <PaymentItem key={p.id} p={p} onAction={() => {}} />
        ))}
      </div>
    </div>
  );
}