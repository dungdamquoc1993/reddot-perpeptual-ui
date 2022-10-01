import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loading from './components/Loading';

const Dashboard = lazy(() => import('./views/Dashboard'));
const Trade = lazy(() => import('./views/Trade'));
const Earn = lazy(() => import('./views/Earn'));
const Buy = lazy(() => import('./views/Buy'));

const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/trade" element={<Trade />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/earn" element={<Earn />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
