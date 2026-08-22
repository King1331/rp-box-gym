import { useState } from 'react';
import { Route, Switch } from 'wouter';

import AppShell from '@/layouts/AppShell';
import HomeScreen from '@/screens/HomeScreen';
import RoutineScreen from '@/screens/RoutineScreen';
import ProgressScreen from '@/screens/ProgressScreen';
import StaffScreen from '@/screens/StaffScreen';
import NotificationsModal from '@/components/NotificationsModal';
import { ReloadPrompt } from '@/components/ReloadPrompt'; 
import useNotifications from '@/hooks/useNotifications';

// --- RUTINAS ---
import RoutineSelector from '@/screens/RoutineSelector';
import RoutineCreator from '@/screens/RoutineCreator';
// ------------------------

function Router() {
  const { isOpen, open, close } = useNotifications();

  return (
    <AppShell onNotifications={open}>
      <Switch>
        <Route path="/" component={HomeScreen} />
        
        {/* --- SECCIÓN DE RUTINAS --- */}
        <Route path="/rutinas" component={RoutineSelector} /> 
        <Route path="/crear-rutina" component={RoutineCreator} />
        {/* -------------------- */}

        <Route path="/routine" component={RoutineScreen} />
        <Route path="/progress" component={ProgressScreen} />
        <Route path="/staff" component={StaffScreen} />
        
        <Route component={HomeScreen} />
      </Switch>

      {isOpen && <NotificationsModal onClose={close} />}
      <ReloadPrompt />
    </AppShell>
  );
}

export default Router;