import NotFound from './views/sessions/NotFound';
import { Navigate } from 'react-router-dom';

import dashboardRoutes from './views/dashboard/DashboardRoutes';
import holderRoutes from './views/holder/HolderRoutes';
import referralRoutes from './views/referral/ReferralRoutes';
import MatxLayout from './components/MatxLayout/MatxLayout';

const routes = [
  {
    element: (
      <MatxLayout />
    ),
    children: [...dashboardRoutes, ...holderRoutes, ...referralRoutes],
  },
  { path: '/', element: <Navigate to="dashboard" /> },
  { path: '/holder', element: <Navigate to="holder" /> },
  { path: '/referral', element: <Navigate to="referral" /> },
  { path: '*', element: <NotFound /> },
];

export default routes;
