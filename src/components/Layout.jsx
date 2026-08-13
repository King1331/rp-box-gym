import React from "react";
import { Outlet } from "react-router-dom";
import BottomNav from "@/components/BottomNav";

export default function Layout() {
  return (
    <div className="app-frame">
      <main className="relative z-10 mx-auto max-w-[760px] min-h-screen pb-28">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  );
}