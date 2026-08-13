import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Upload, Check, Copy } from "lucide-react";
import ScreenHeader from "@/components/ScreenHeader";

const SINPE_NUMBER = "8888-8888";

export default function PaymentUpload() {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const copyNumber = () => {
    navigator.clipboard?.writeText(SINPE_NUMBER).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div>
      <ScreenHeader title="Pagar Mensualidad" showBack />
      <div className="px-4 pt-4 space-y-5">
        {/* Monto */}
        <div className="rounded-2xl border border-[#FFD60A]/30 bg-gradient-to-br from-[#1a1500] to-[#0a0a0a] p-5 text-center">
          <p className="text-white/50 text-sm">Mensualidad RP Box</p>
          <p className="text-4xl font-black text-[#FFD60A] my-1">₡100,000</p>
          <p className="text-white/40 text-xs">Vence el 25 Sep, 2026</p>
        </div>

        {/* SINPE */}
        <div className="rounded-2xl border border-white/10 bg-[#111111] p-4">
          <p className="text-xs text-white/50 uppercase tracking-wider mb-2">SINPE Móvil</p>
          <div className="flex items-center justify-between">
            <span className="text-lg font-black tracking-wider">{SINPE_NUMBER}</span>
            <button
              onClick={copyNumber}
              className="flex items-center gap-1 text-[#FFD60A] text-sm font-semibold active:scale-95 transition"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copied ? "Copiado" : "Copiar"}
            </button>
          </div>
          <p className="text-white/40 text-xs mt-2">A nombre de: RP Box Gym</p>
        </div>

        {/* Subir comprobante */}
        {!submitted ? (
          <>
            <label className="block">
              <div className="rounded-2xl border-2 border-dashed border-white/15 bg-[#111111] p-6 text-center active:scale-[0.99] transition cursor-pointer">
                {file ? (
                  <img src={URL.createObjectURL(file)} alt="Comprobante" className="max-h-48 mx-auto rounded-lg" />
                ) : (
                  <>
                    <Upload className="w-8 h-8 text-[#FFD60A] mx-auto mb-2" />
                    <p className="text-sm font-semibold">Subir comprobante de SINPE</p>
                    <p className="text-white/40 text-xs mt-1">Toca para seleccionar una imagen</p>
                  </>
                )}
              </div>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => setFile(e.target.files?.[0] ?? null)}
              />
            </label>

            <button
              disabled={!file}
              onClick={() => setSubmitted(true)}
              className="w-full bg-[#FFD60A] text-black font-bold py-3.5 rounded-xl active:scale-[0.98] transition disabled:opacity-30 disabled:cursor-not-allowed"
            >
              Enviar Comprobante
            </button>
          </>
        ) : (
          <div className="rounded-2xl border border-green-500/40 bg-green-500/10 p-6 text-center">
            <div className="w-14 h-14 rounded-full bg-green-500 mx-auto flex items-center justify-center mb-3">
              <Check className="w-7 h-7 text-white" strokeWidth={3} />
            </div>
            <h3 className="font-black text-lg text-green-400">¡Comprobante enviado!</h3>
            <p className="text-white/60 text-sm mt-1">
              El staff revisará tu pago y confirmará tu membresía pronto.
            </p>
            <button
              onClick={() => navigate("/")}
              className="mt-5 w-full bg-[#FFD60A] text-black font-bold py-3 rounded-xl active:scale-[0.98] transition"
            >
              Volver al Inicio
            </button>
          </div>
        )}
      </div>
    </div>
  );
}