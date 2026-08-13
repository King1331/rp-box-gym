import { Toaster } from "@/components/ui/toaster"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from '@/components/ScrollToTop';
import Layout from '@/components/Layout';
import Dashboard from '@/pages/Dashboard';
import Routine from '@/pages/Routine';
import Progress from '@/pages/Progress';
import AdminPanel from '@/pages/AdminPanel';
import PaymentUpload from '@/pages/PaymentUpload';
import PageNotFound from '@/lib/PageNotFound';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/rutina" element={<Routine />} />
          <Route path="/progreso" element={<Progress />} />
          <Route path="/staff" element={<AdminPanel />} />
          <Route path="/pago" element={<PaymentUpload />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;