import React from 'react';
import { AlertTriangle } from 'lucide-react';

export default function UserNotRegisteredError() {
  return (
    <div className="app-frame min-h-screen flex items-center justify-center p-6">
      <div className="max-w-md w-full text-center">
        <div className="w-14 h-14 rounded-full bg-[#FFD329]/15 flex items-center justify-center mx-auto mb-4">
          <AlertTriangle className="w-7 h-7 text-[#FFD329]" />
        </div>
        <h1 className="font-display text-2xl font-bold uppercase text-foreground">
          Usuario no registrado
        </h1>
        <p className="text-[#AAA79A] mt-2 text-sm">
          Tu cuenta no tiene acceso a esta aplicación. Contacta al administrador.
        </p>
      </div>
    </div>
  );
}