import Loadable from '../../components/Loadable';
import {
  lazy
} from 'react';

const Analytics = Loadable(lazy(() => import('./Analytics')));

const dashboardRoutes = [{
  path: '/',
  element: <Analytics /> ,
}, ];

export default dashboardRoutes;