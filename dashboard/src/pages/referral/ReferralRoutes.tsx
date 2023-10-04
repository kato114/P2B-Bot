import Loadable from '../../components/Loadable';
import {
  lazy
} from 'react';

const Analytics = Loadable(lazy(() => import('./Analytics')));

const referralRoutes = [{
  path: '/referral',
  element: <Analytics /> ,
}, ];

export default referralRoutes;