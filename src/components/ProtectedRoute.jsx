import React from 'react';
import { Outlet } from 'react-router-dom';

// En modo simplificado (sin login) siempre se renderiza el contenido.
export default function ProtectedRoute() {
  return <Outlet />;
}