import { Navigate } from 'react-router-dom';

import NotFound from './pages/NotFound';
import dashboardRoutes from './pages/dashboard/DashboardRoutes';
import holdersRoutes from './pages/holders/HoldersRoutes';
import referralRoutes from './pages/referral/ReferralRoutes';
import Layout from './pages/layout';

const routes = [
  {
    element: (
      <Layout/>
    ),
    children: [...dashboardRoutes, ...holdersRoutes, ...referralRoutes],
  },
  { path: '/', element: <Navigate to="dashboard" /> },
  { path: '/holders', element: <Navigate to="holders" /> },
  { path: '/referral', element: <Navigate to="referral" /> },
  { path: '*', element: <NotFound /> },
];

export default routes;
